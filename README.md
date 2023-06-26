# findmyhat - Apply Javascript to build a web application (Find Your Hat game) from scratch.

To run the application run node main.js in the terminal / command prompt
1) Requirements
In the Javascript assessment, you need the following the following requirements:

Download and Install NodeJS here: https://nodejs.org/en/download/
Run npm install prompt-sync in the terminal / command prompt
Run npm install clear-screen in the terminal / command prompt

Requirements: 
Create a 10 X 10 Fields
The character * can be always at the default of position (0,0) when the user starts the game
The controls for the character are:
Up = U or u key
Down = D or d key
Left = L or l key
Right = R or r key
If a user entered an invalid key (e.g. p or t), output “Enter (u, d, l or r) and allow the user to enter again
The number of holes generated should be lesser than the fields generated
When the character drops into a hole, output “Sorry, you fell down a hole!” and the game ends
When the character hits the boundaries, output “Out of bounds - Game End!” and the game ends
When the character gets the hat, output “Congrats, you found your hat!” and and the game ends


Code Sample (Kick-Starter)
Create global variables and import prompt input from package (Please create your own global variables if required)

const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;
const col = 10;

