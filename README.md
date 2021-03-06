# Introduction

[![Netlify Status](https://api.netlify.com/api/v1/badges/45b1d77d-200d-4f8f-a8cf-7ebef14d18cd/deploy-status)](https://app.netlify.com/sites/mars-rover-page/deploys)

[mars-rover-page.netlify.app](https://mars-rover-page.netlify.app)

# Assumptions

1. After collision, rover stays on the position from previous move.
2. Rover instructions are ignored if initial rover's position is already occupied.

# Features

### Calculates rover's path

<img src="https://i.ibb.co/HnNMHwD/2020-04-27-11-51-35-Mars-Rover.png" alt="outside" width="300"/>

### Allows to browse journeys

<img src="https://i.ibb.co/b5nch2V/2020-04-24-14-24-05-Mars-Rover.png" alt="screen2" width="300"/>

Note: Path visualisation is not available for plateau that exceeds 100x100.

### Handles collisions and rovers that go outside plateau

<img src="https://i.ibb.co/D7zYnyb/2020-04-27-11-45-46-Mars-Rover.png" alt="screen3" width="300"/>

# Problem Statement

MARS ROVERS

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rovers so that their on board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position is represented by a combination of an x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot.

'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

Input:

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover's orientation.

Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.

Output:

The output for each rover should be its final co-ordinates and heading.

Test Input:

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

Expected Output:

1 3 N

5 1 E
