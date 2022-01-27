function checkMove(input){
    var choices = ["rock", "paper", "scissor"];
    var n = Math.floor(Math.random()*3);

    document.getElementById("compChoose").innerHTML = 
    ` Computer choice: <span> ${choices[n].toUpperCase()} </span>`;
    document.getElementById("firstChoose").innerHTML = 
    ` Your choice: <span>${input.toUpperCase()}</span> `;

    let compChoice = choices[n];
    switch(Cases[input][compChoice]){
        case 'win':
            result.style = "background-color: green; color: white";
            result.innerHTML = "YOU WIN";
            userScore++;
            break;
        case 'lose':
            result.style = "background-color: red; color: white";
            result.innerHTML = "YOU LOSE";
            compScore++;
            break;
        default:
            result.style = "background-color: gray; color: white";
            result.innerHTML = "Draw";
            draw++;
            break;
    }

    document.getElementById("compScore").innerHTML = compScore;
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("draw").innerHTML = draw;
}

let [compScore,userScore,draw]=[0,0,0];
let result = document.getElementById("result");
let Cases = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }
}