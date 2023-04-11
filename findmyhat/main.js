const prompt = require('prompt-sync')({ sigint: true });
const clear = require('clear-screen');


// global variables
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const height = 10;
const width = 10;
const field = [[]];

// to keep track of the character row and column
let currCharRow = 0;
let currCharCol = 0;

function generateField() {
    for (let row = 0; row < height; row++) {

        field[row] = [];
        for (let column = 0; column < width; column++) {

            // check for certain probability to either generate a field or a hole
            // will generate a random number between 0 and 9
            let prob = (Math.floor(Math.random() * 10));

            if (prob < 2) {
                field[row][column] = hole;
            }

            else {
                field[row][column] = fieldCharacter;
            }

        }
    }
    //display the character to (0,0)
    field[currCharRow][currCharCol] = pathCharacter;

    //display the Hat in random position
    //randomise the row and col
    let rows = (Math.floor(Math.random() * 10));
    let columns = (Math.floor(Math.random() * 10));
    field[rows][columns] = hat;

}

function askQuestion() {
    let getInput = '';
    let validInputs = ['u', 'd', 'l', 'r'];

    // validate if user key in any other keys
    while (true) {
        getInput = prompt('Which way? ').toLowerCase();
        if (validInputs.includes(getInput)) {
            break;
        } else {
            console.log("Please enter u, d, l, or r.");
        }
    }
    switch (getInput) {

        //move up
        case 'u':

            currCharRow--;
            break;
        // move right
        case 'r':

            currCharCol++;
            break;
        // move down
        case 'd':

            currCharRow++;
            break;

        // move left

        case 'l':

            currCharCol--;
            break;


    }

    // if (getInput != )
}

function print() {  //to format the array into a nicer way

    clear();




    const displayString = field.map(row => {

        return row.join('');

    }).join('\n');  // \n is next line
    console.log(displayString); // convert to string

    // map method is to loop through 
    //(1) all the columns and join the elements with no space
    //(2) all the rows and join the elements with next line ('/n')



} // end of print function


function startGame() {

    let isPlaying = true;

    while (isPlaying) {
        print();
        askQuestion();   // gets up down left right

        // check if win or lose or continue

        // 1) out of bound

        if (currCharRow < 0 || currCharRow >= height || currCharCol < 0 || currCharCol >= width) {

            console.log('Out of bounds! Game over.');
            isPlaying = false;

        }


        else if (field[currCharRow][currCharCol] == hole) {

            console.log('Sorry, you fell into a hole. Game over!');

            // Check if win or lose or continue

            isPlaying = false;
        }

        else if (field[currCharRow][currCharCol] == hat) {

            console.log('Congratulations, you found your hat!');

            // Check if win or lose or continue

            isPlaying = false;
        }



        else {
            field[currCharRow][currCharCol] = pathCharacter;
        }


    }
}

generateField();
startGame();