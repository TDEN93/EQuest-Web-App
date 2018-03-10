const jsonQ = require('jsonq');
const jsonFile = require('jsonfile');
const file = 'replays/test.replay.json';

let jsonObj = jsonFile.readFileSync(file);
let replayJson = jsonQ(jsonObj);
let i = 0;


let updated_replication_value = [];
let veh_ids = [];
let veh_id_array = [];
let player_id_array = [];
let player_data = [{}];


// Remove duplicate IDs
let uniqueID = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
        return arr.indexOf(elem) == pos;
    });
}

// ----------- Grabs the int value associated with the player -------------------------------
let vehicle_ID = replayJson.find('name', function(){
    return this == "Engine.Pawn:PlayerReplicationInfo";
});

let int = vehicle_ID.sibling('value');
int.each(function(index,path,value){
    player_id_array.push(value.flagged_int_attribute_value.int);
});

// -----------------------------------------------------------------------------------------------

// ----------- Grabs the actor id value associated with the player. Use this value in actor_id for loc info -------------------------------
let vehicle_ID_actor = vehicle_ID.parent().parent().parent().parent();

vehicle_ID_actor.each(function(index,path,value){
    veh_id_array.push(value.actor_id.value);
});

veh_ids.push(uniqueID(veh_id_array));

// console.log(uniqueID(veh_ids)[0][0]);
// console.log(uniqueID(player_id_array)[0]);
// -----------------------------------------------------------------------------------------------


let actor_ids = replayJson.find('rigid_body_state_attribute_value', function(){
    return this;
}).parent().parent().parent().parent().parent();

actor_ids.each(function(index,path,values){
    // Grab all player attributes
    // for(let i = 0; i < veh_ids.length; i++){
    //     if(values.actor_id.value == veh_ids[i][0]){
    //         console.log(values.value.updated_replication_value[i].value.rigid_body_state_attribute_value);
    //     }
    // }

    for(let i = 0; i < veh_ids.length; i++){
        if(values.actor_id.value == veh_ids[0][0]){
            player_data.push(values.value.updated_replication_value[i].value.rigid_body_state_attribute_value);
            // WHY WILL THIS NOT ALLOW ME TO ACCESS LOCATION DATA
        }
    }
})

console.log(player_data);
