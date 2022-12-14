class Game
{
    constructor()
    {
        this.turnTimer = 0;
        this.player = new Player();
        this.enemy = new Enemy();
        this.finished = false;
    }

    playerTurn()
    {
        
    }


    gameLoop()
    {
        while (this.finished)
        {
            if ((this.turnTimer % 2) === 0)
            {
                this.playerTurn()
            }
        }
    }

}

var WebGame = new Game();
WebGame.gameLoop();