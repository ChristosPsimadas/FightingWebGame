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




}

var WebGame = new Game();

function initialize()
{
    display()
    console.log("5");
}


var playerStats = document.getElementById("playerStats");

var enemyStats = document.getElementById("enemyStats");

var gameText = document.getElementById("gameText");
WebGame.enemy.defending = false;

console.log(playerStats);
console.log(gameText);

function playerattack()
{
    if (WebGame.playerTurn)
    {
        WebGame.player.attack(WebGame.enemy);
        gameText.innerHTML = "You attacked that guy";
        playerTurn = false;
        display();
    }
}

function display()
{
    
    playerStats.innerHTML = "Player Stats: \n" + 
    "stength " + WebGame.player.strength + "\n" + 
    "cunning " + WebGame.player.cunning + "\n" + 
    "fatigue " + WebGame.player.fatigue + "\n" + 
    "speed " +  WebGame.player.speed + "\n"
    
    enemyStats.innerHTML = "enemy Stats: \n" + 
    "stength " + WebGame.enemy.strength + "\n" + 
    "cunning " + WebGame.enemy.cunning + "\n" + 
    "fatigue " + WebGame.enemy.fatigue + "\n" + 
    "speed " +  WebGame.enemy.speed + "\n"

}