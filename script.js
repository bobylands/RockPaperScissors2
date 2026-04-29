//je cree les variables pour le score des deux

        let humanScore = 0
        let computerScore = 0

        //le computer fait un choix entre rock papier et ciseaux

        const choices = ['rock','paper','scissors']
        const computerTurn = ()=> choices[Math.floor(Math.random()*choices.length)] 
        
        const whoWins = (player,computer) => {

            const playerWinRock = player === "rock" && computer === "scissors"
            const playerWinPaper = player === "paper" && computer === "rock"
            const playerWinScissors = player === "scissors" && computer === "paper"
            
            
            if(player === computer){
                return "draw"
            }
            else {
            return playerWinRock || playerWinPaper || playerWinScissors
            }
        }

        const logWinner = (x) => {
            if(x === "draw"){
                console.log("draw")
            }
            else if (x === true){
                humanScore++
                console.log("huge W my nibba")
            }
            else{
                computerScore++
                console.log("jump off a bridge now loser")
            }
}
       
        //const playGame = () =>{
        let playerInput = prompt("Entrez rock, paper ou scissors").toLowerCase()
        let computerSelection = computerTurn()
        let result = whoWins(playerInput,computerSelection)
        logWinner(result)
        console.log("player: " + playerInput + " | " + "cpu: " + computerSelection)
        console.log("the score is " + humanScore + " to " + computerScore)
    }
    
        
        while (humanScore < 3 && computerScore < 3) {
        playGame();
        }
