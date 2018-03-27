import json
import matplotlib as mpl
from mpl_toolkits.mplot3d import Axes3D
import numpy as np
import matplotlib.pyplot as plt

movementsX = []
movementsY = []
movementsZ = []

data = json.load(open("testOutput.json", 'r'))

mpl.rcParams['legend.fontsize'] = 10
fig = plt.figure(figsize=(20,20))
ax = fig.gca(projection='3d')

# x = movementsX
# y = movementsY
# z = movementsZ

for e in data:
    for key, value in e.items():
        if key == "locationX":
            movementsX.append(value)
        if key == "locationY":
            movementsY.append(value)
        if key == "locationZ":
            movementsZ.append(value)

x = [x1 * 2 for x1 in movementsX]
y = [y1 * 2 for y1 in movementsY]
z = [z1 * 2 for z1 in movementsZ]
print(len(x))
print(len(y))
print(len(z))

ax.plot(x,y,z, label='Player Movement')
ax.legend()
plt.show()