/*
Project: Rocket League Replay Analysis
Author: Tray Denney, Brandon VanCamp
Description: Pulls player and ball information from Rocket League replay files.
Useful Resources: 
- http://ignitersworld.com/lab/jsonQ.html Library used to traverse JSON files.
- https://www.dropbox.com/sh/152ay45pzsu9k94/AABmh1YcAZ5XuivYdR7qiOJLa?dl=0 Replay parser and decoder created by Tray Denney.
- https://www.dropbox.com/sh/iz1ccenw11aqnzp/AAABerEXLdt29UxLKUBXCOhsa?dl=0 Small list of sample replay files.
- https://cdn.discordapp.com/attachments/379071324741697538/383875441867620352/mov_data.png JSON traversal path.
- https://www.npmjs.com/package/jsonfile Library used to load JSON file.
- https://github.com/TDEN93/EQuest-Web-App/tree/master/RL-Analytics Github page.
*/

const jsonQ = require('jsonq');
const jsonFile = require('jsonfile');
const file = 'replays/input.replay.json';

let jsonObj = jsonFile.readFileSync(file);
let replayJson = jsonQ(jsonObj);


let veh_ids = [];
let veh_id_array = [];
let player_id_array = [];
let player_data = [{}];
let player_names = [];
let playerActor_ID = [];
let player = [{}];
let actor_idsTest = [];


// Remove duplicate IDs
let uniqueID = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
        return arr.indexOf(elem) == pos;
    });
}

let removeDuplicateFilter = (arr) => {
    let unique_array = arr.filter(function (elem, index, self) {
        return index == self.indexOf(elem);
    });
    return unique_array
}

// ----------- Grabs the player names and actor_ids -------------------------------
// Find where player names are located, then grab the actor_id from those nodes.
let playerActorID = replayJson.find('name', function () {
    return this == 'Engine.PlayerReplicationInfo:PlayerName';
}).parent().parent().parent().parent();

playerActorID.each(function (index, path, values){
    playerActor_ID.push(values.actor_id.value);
})
// /End finding player actor_id ------------------------------------------------

// Find player name
let playerName = replayJson.find('name', function () {
    return this == 'Engine.PlayerReplicationInfo:PlayerName';
});

let pNameVal = playerName.sibling('value');
pNameVal.each(function (index, path, value) {
    player_names.push(value.string_attribute_value);
})
// /End finding player name ---------------------------------


playerActor_ID = removeDuplicateFilter(playerActor_ID);
player_names = removeDuplicateFilter(player_names);

for(let i = 0; i < playerActor_ID.length; i++){
    player.push({Player_ID: playerActor_ID[i], 
                Player_Name: player_names[i]});
    
}
console.log(player);
// -----------------------------------------------------------------------------------------------
// ----------- Grabs the int value associated with the player -------------------------------
let vehicle_ID = replayJson.find('name', function () {
    return this == "Engine.Pawn:PlayerReplicationInfo";
});

let int = vehicle_ID.sibling('value');
int.each(function (index, path, value) {
    player_id_array.push(value.flagged_int_attribute_value.int);
});

player_id_array = removeDuplicateFilter(player_id_array);
console.log(player_id_array);

// if vehicle ID matches playerActor_ID, grab location information.

// -----------------------------------------------------------------------------------------------

// ----------- Grabs the actor id value associated with the player. Use this value in actor_id for loc info -------------------------------
let vehicle_ID_actor = int.parent().parent().parent().parent();

vehicle_ID_actor.each(function (index, path, value) {
    veh_id_array.push(value.actor_id.value);
});

veh_id_array = uniqueID(veh_id_array);

for(let i = 0; i < player_id_array.length; i++){
    actor_idsTest.push(veh_id_array[i]);
    // actor_idsTest.push({Player_ID: playerActor_ID[i], 
    //             Veh_ID: veh_id_array[i]});
    
}
console.log(actor_idsTest);
// -----------------------------------------------------------------------------------------------

let actor_ids = replayJson.find('rigid_body_state_attribute_value', function () {
    return this;
}).parent().parent().parent().parent().parent();

actor_ids.each(function (index, path, values) {
    for (let i = 0; i < actor_idsTest.length; i++) {
        if (values.actor_id.value == actor_idsTest[i]) {
            for (let j = 0; j < values.value.updated_replication_value.length; j++) {
                if (values.value.updated_replication_value[j].value.rigid_body_state_attribute_value != undefined) {
                    player_data.push({
                        linear: values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.linear_velocity,
                        angular: values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.angular_velocity,
                        location: values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.location,
                        rotation: values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.rotation,
                        ID: actor_idsTest[i]
                    });

                    // Need to clean up and sort information.
                }
            }
        }
    }
})

console.log(player_data.slice(0, 5));


