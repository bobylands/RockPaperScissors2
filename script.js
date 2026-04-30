        
        
        
        
        
        //je cree les variables pour le score des deux

        let humanScore = 0
        let computerScore = 0

        //cree la fonction pour le choix de lordi

        const choices = ['rock','paper','scissors']
        const computerTurn = ()=> choices[Math.floor(Math.random()*choices.length)] 

        //player fait son choix

        const rock = document.querySelector('#rock')
        const paper = document.querySelector('#paper')
        const scissors = document.querySelector('#scissors')

        let playerChoice
        
        rock.addEventListener("click",() => {
            playerChoice = "rock"
            playGame()}
        )
        paper.addEventListener("click",()=>{
            playerChoice ="paper"
            playGame()}
        )
        scissors.addEventListener("click",()=>{
            playerChoice ="scissors"
            playGame()}
            
        )


        //cree la fonction pour savoir qui gagne

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


        //display winner

        const displayWinner = (playerWin) => {
            if(playerWin ==="draw"){
                winner.textContent='draw!'
            }
            else if(playerWin === true){
                winner.textContent='You won!'
                humanScore++
            }
            else{
                winner.textContent='You lost!'
                 computerScore++
            }

        }

       const score = document.querySelector(".score")
       const winner = document.querySelector(".winner")


       //fonction qui run le jeu

        const playGame = () =>{
        let computerSelection = computerTurn()
        let result = whoWins(playerChoice,computerSelection)
        displayWinner(result)
        score.textContent = `The score is ${humanScore} - ${computerScore}`  
    }
    
    
   