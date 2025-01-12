let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was draw. play again";
    msg.style.backgroundColor = "#101046";

};

const showWinner = (userwin,userchoice,compChoice) => {
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
}


const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    //Generate computer choice
    const compChoice = genComputerChoice();
    console.log("comp choice = ",compChoice);

    if(userchoice === compChoice) {
        //draw game
        drawGame();
}      else{
        let userwin = true;
        if (userchoice === "rock") {
            //scissor,paper
            userwin = compChoice ==="paper" ? false : true;
        }
        else if(userchoice === "paper") {
            //scissor,rock
            userwin = compChoice === "scissor" ? false : true;
        }else{
            //rock,paper
            userwin = compChoice === "rock" ?  false : true;
        }
        showWinner(userwin,userchoice,compChoice);
        }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});


