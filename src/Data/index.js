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
let replay = jsonQ(jsonObj);



let vehicleActorArray = [];
let playerVehicleIDArray = [];
let playerNameArray = [];
let playerID_Array = [];
let player_data = [{}];
let player = [{}];
let actorID = [];


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
let getPlayerActorID = replay.find('name', function () {
    return this == 'Engine.PlayerReplicationInfo:PlayerName';
}).parent().parent().parent().parent();

getPlayerActorID.each(function (index, path, values){
    playerID_Array.push(values.actor_id.value);
})
// /End finding player actor_id ------------------------------------------------

// Find player name
let getPlayerName = replay.find('name', function () {
    return this == 'Engine.PlayerReplicationInfo:PlayerName';
});

let pNameVal = getPlayerName.sibling('value');
pNameVal.each(function (index, path, value) {
    playerNameArray.push(value.string_attribute_value);
})
// /End finding player name ---------------------------------

// Remove Duplicates in arrays
playerID_Array = removeDuplicateFilter(playerID_Array);
playerNameArray = removeDuplicateFilter(playerNameArray);

// initialize outside of for loop for speed.
let playerID_Array_Length = playerID_Array.length;

for(let i = 0; i < playerID_Array_Length; i++){
    player.push({Player_ID: playerID_Array[i], 
                Player_Name: playerNameArray[i]});
    
}
// console.log(player);
// -----------------------------------------------------------------------------------------------
// ----------- Grabs the int value associated with the player -------------------------------
let vehicle_ID = replay.find('name', function () {
    return this == "Engine.Pawn:PlayerReplicationInfo";
});

let int = vehicle_ID.sibling('value');
int.each(function (index, path, value) {
    playerVehicleIDArray
.push(value.flagged_int_attribute_value.int);
});

playerVehicleIDArray = removeDuplicateFilter(playerVehicleIDArray);
// console.log(playerVehicleIDArray);

// if vehicle ID matches playerActor_ID, grab location information.

// -----------------------------------------------------------------------------------------------

// ----------- Grabs the actor id value associated with the player. Use this value in actor_id for loc info -------------------------------
let vehicle_ID_actor = int.parent().parent().parent().parent();

vehicle_ID_actor.each(function (index, path, value) {
    vehicleActorArray.push(value.actor_id.value);
});

vehicleActorArray = uniqueID(vehicleActorArray);

for(let i = 0; i < playerVehicleIDArray.length; i++){
    actorID.push(vehicleActorArray[i]);
    // actorID.push({Player_ID: playerActor_ID[i], 
    //             Veh_ID: vehicleActorArray[i]});
    
}

// -----------------------------------------------------------------------------------------------

let actor_ids = replay.find('rigid_body_state_attribute_value', function () {
    return this;
}).parent().parent().parent().parent().parent();

actor_ids.each(function (index, path, values) {
    for (let i = 0; i < actorID.length; i++) {
        if (values.actor_id.value == actorID[i]) {
            for (let j = 0; j < values.value.updated_replication_value.length; j++) {
                if (values.value.updated_replication_value[j].value.rigid_body_state_attribute_value != undefined && actorID[i] == 23) {
                    player_data.push({
                        Name : playerNameArray[i],
                        vID: actorID[i],
                        pID: playerID_Array[i],
                        linear: values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.linear_velocity,
                        angular: values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.angular_velocity,
                        locationX: values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.location.x,
                        locationY: values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.location.y,
                        locationZ: values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.location.z,
                        rotationX: values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.rotation.x.value,
                        rotationY: values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.rotation.y.value,
                        rotationZ: values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.rotation.z.value
                    });

                    // Need to clean up and sort information.
                }
            }
        }
    }
})

let fileOutput = "testOutput.json";
let obj = player_data;


jsonFile.writeFile(fileOutput, obj, function(err){
    console.error(err);
})


