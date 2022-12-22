class Game
{
    constructor()
    {
        this.turnTimer = 0;
        this.player = new Player();
        this.enemy = new Enemy();
        this.finished = false;
    }

    playerTurn = true;
    turnCount = 2;




}

var WebGame = new Game();

var playerStats = document.getElementById("playerStats");

var enemyStats = document.getElementById("enemyStats");

var gameText = document.getElementById("gameText");


var defendButton = document.querySelector('#defendButton');
var attackButton = document.querySelector('#attackButton');

var finisherButton = document.querySelector('#finisherButton')

function initialize()
{
    finisherButton.disabled = true;
    WebGame.turnCount = 2;
    console.log(WebGame.turnCount);
    display()
}




WebGame.enemy.defending = false;

console.log(WebGame.turnCount);


function enemyTurn()
{
    let turnDecider = Math.random()

    if (!WebGame.turnCount % 2 === 0)
    {
        

        if (WebGame.player.fatigue <= 0)
        {
            //finisher
            gameText.innerHTML = "How did you lose to diglett man"

            attackButton.disabled = true;
            defendButton.disabled = true;
            finisherButton.disabled = true;
        }

        else if (turnDecider > 0.25)
        {
            // Attack

            setTimeout(function enemyAttack()
            {
                gameText.innerHTML = "Unfortunately you have been attacked for " +  WebGame.enemy.attack(WebGame.player) + " damage";
                WebGame.player.turnReset()
                WebGame.player.defending = false;

                display()
                setTimeout(function printTurn()
                {
                    WebGame.turnCount++;
                    gameText.innerHTML = "What will you do"
                    attackButton.disabled = false;
                    defendButton.disabled = false;
                }, 3000);
            }, 3000);

        


        }
        else
        {
            setTimeout(function enemyDefend()
            {
                WebGame.enemy.defending = true;
                gameText.innerHTML = "The mole goes underground";
                WebGame.player.defending = false;

                display()
                setTimeout(function printTurn()
                {
                    WebGame.turnCount++;
                    gameText.innerHTML = "What will you do"
                    attackButton.disabled = false;
                    defendButton.disabled = false;
                }, 3000);
            }, 3000);
        }
    }
    display();
}



function playerattack()
{
    if (WebGame.turnCount % 2 === 0)
    {
        attackButton.disabled = true;
        defendButton.disabled = true;
        //Make them not defend anymore right after you attack because thats when defending matters
        
        gameText.innerHTML = "You attacked that guy for " + WebGame.player.attack(WebGame.enemy) + " damage";
        WebGame.enemy.turnReset();
        WebGame.enemy.defending = false;

        WebGame.turnCount++;
        display();
    }

    enemyTurn();
}

function playerDefend()
{
    if (WebGame.turnCount % 2 === 0)
    {
        attackButton.disabled = true;
        defendButton.disabled = true;
        //Make them not defend anymore right after you attack because thats when defending matters
        
        gameText.innerHTML = "Why would you click that button";
        WebGame.player.defending = true;
        WebGame.enemy.turnReset();
        WebGame.enemy.defending = false;

        WebGame.turnCount++;
        display();
    }

    enemyTurn();
}

function playerFinisher()
{
    gameText.innerHTML = "you win";
    attackButton.disabled = true;
    defendButton.disabled = true;
}

function display()
{
    playerStats.innerHTML = "Player Stats: \n" + 
    "strength " + WebGame.player.strength + "\n" + 
    "cunning " + WebGame.player.cunning + "\n" + 
    "fatigue " + WebGame.player.fatigue + "\n" + 
    "speed " +  WebGame.player.speed + "\n"
    
    enemyStats.innerHTML = "enemy Stats: \n" + 
    "strength " + WebGame.enemy.strength + "\n" + 
    "cunning " + WebGame.enemy.cunning + "\n" + 
    "fatigue " + WebGame.enemy.fatigue + "\n" + 
    "speed " +  WebGame.enemy.speed + "\n"
    

    if ((WebGame.player.fatigue > (2 * WebGame.enemy.fatigue)) || (WebGame.enemy.fatigue <= 0)) {finisherButton.disabled = false;}

    if (WebGame.player.fatigue <= (2 * WebGame.enemy.fatigue)) {(finisherButton.disabled = true);}

}
