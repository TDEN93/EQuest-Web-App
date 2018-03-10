# -*- coding: utf-8 -*-
"""
Created on Wed Nov 22 14:51:07 2017
@author: tray_
"""

# Data Preprocessing Template

# Importing the libraries
import json


# Global Variables
player_name_id = {}
player_vehicle_id = []
player_locations = {}


#Load .json and parse into Python __inbuilt__s
with open('replays/test.replay.json','r') as file:
    file = json.load(file)


def getPlayerVehicle(file):
    # Grab every actor_id & value in replications IF replications has the object "updated_replication_value"
    pN = [(f['actor_id'], f['value']) for f in file['content']['frames'][0]['replications']\
            if 'updated_replication_value' in list(f['value'].keys())]
    # Grab the player name that belongs to n[0] (player's actor_id)
    pN = [(n[0],sub['value']['string_attribute_value']) for n in pN for sub in n[1]['updated_replication_value']\
          if sub['name'] == 'Engine.PlayerReplicationInfo:PlayerName']
    
    vehID = [(f['actor_id'],f['value']['updated_replication_value'])\
         for f in file['content']['frames'][0]['replications']\
         if 'updated_replication_value' in list(f['value'].keys())]

    vehID = [(sub[0],{'limit':2047,'value':l['value']['flagged_int_attribute_value']['int']})\
             for sub in vehID for l in sub[1]\
             if l['name'] == 'Engine.Pawn:PlayerReplicationInfo']
    
    for n in range(len(pN)):
        player_name_id.update({pN[n][1]: pN[n][0]})
        print(player_name_id)
        
    for n in range(len(vehID)):
        player_vehicle_id.append(vehID[n][0])
        print(player_vehicle_id)
        
    return print('Success')


getPlayerVehicle(file)

# def getPlayerMov(file, actor_id):
#     locs = [(frame['time'],repl) for frame in file['content']['frames']\
#         for repl in frame['replications'] if repl['actor_id'] == actor_id]
    
#     locs = [(loc[0],loc[1]['value']) for loc in locs if 'updated_replication_value' in list(loc[1]['value'].keys())]
    
#     locs = [(loc[0],loc[1]['updated_replication_value'][0]['value']['rigid_body_state_attribute_value']['location']) \
#             for loc in locs if 'rigid_body_state_attribute_value' in list(loc[1]['updated_replication_value'][0]['value'].keys())]
    
#     playerLoc = [(locs[n][1]) for n in range(len(locs))]
    
#     return playerLoc


# def dataProcess():
#    For each player, log their movements.
    
#     for i in range(len(player_vehicle_id)):
#         testLoc = getPlayerMov(file, player_vehicle_id[i])
#         player_locations.update({i: testLoc})
        
        
#     return print('Data Process Success');

# dataProcess()





