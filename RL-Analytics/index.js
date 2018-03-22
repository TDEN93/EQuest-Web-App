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
let i = 0;


let updated_replication_value = [];
let veh_ids = [];
let veh_id_array = [];
let player_id_array = [];
let player_data = [{}];
let player_names = [];


// Remove duplicate IDs
let uniqueID = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
        return arr.indexOf(elem) == pos;
    });
}

let removeDuplicateFilter = (arr) => {
    let unique_array = arr.filter(function(elem, index, self){
        return index == self.indexOf(elem);
    });
    return unique_array
}

// ----------- Grabs the player names -------------------------------
let playerName = replayJson.find('name',function(){
    return this == 'Engine.PlayerReplicationInfo:PlayerName';
})

let pNameVal = playerName.sibling('value');
pNameVal.each(function(index,path,value){
    player_names.push(value.string_attribute_value);
})

player_names = removeDuplicateFilter(player_names);

// -----------------------------------------------------------------------------------------------
// ----------- Grabs the int value associated with the player -------------------------------
let vehicle_ID = replayJson.find('name', function(){
    return this == "Engine.Pawn:PlayerReplicationInfo";
});

let int = vehicle_ID.sibling('value');
int.each(function(index,path,value){
    player_id_array.push(value.flagged_int_attribute_value.int);
});
// -----------------------------------------------------------------------------------------------
// If player_id_array = actor_id.value, grab player name


// ----------- Grabs the actor id value associated with the player. Use this value in actor_id for loc info -------------------------------
let vehicle_ID_actor = vehicle_ID.parent().parent().parent().parent();

vehicle_ID_actor.each(function(index,path,value){
    veh_id_array.push(value.actor_id.value);
});

veh_ids.push(uniqueID(veh_id_array));

// -----------------------------------------------------------------------------------------------

console.time('test');
let actor_ids = replayJson.find('rigid_body_state_attribute_value', function(){
    return this;
}).parent().parent().parent().parent().parent();

actor_ids.each(function(index,path,values){
    for(let i = 0; i < veh_ids[0].length; i++){
        if(values.actor_id.value == veh_ids[0][i]){
            for(let j = 0; j < values.value.updated_replication_value.length; j++){
                if(values.value.updated_replication_value[j].value.rigid_body_state_attribute_value != undefined){
                    player_data.push({linear : values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.linear_velocity, 
                                    angular : values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.angular_velocity,
                                    location : values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.location,
                                    rotation : values.value.updated_replication_value[j].value.rigid_body_state_attribute_value.rotation,
                                    ID : veh_ids[0][i]});
                    // Need to clean up and sort information.
                }
            }
        }
    }
})

function test(){
    console.log(player_data.slice(0, 10));
}
test();
console.timeEnd('test');