class Character
{
    constructor()
    {
        this.strength = 6;
        this.cunning = 6;
        this.speed = 6;
        this.fatigue = 30;
        this.defending = false;


        let modifier = randomRange(1, 3);
        switch (modifier)
        {
            case 1:
                this.initialstrength += randomRange(0, 2);
                this.initialspeed += randomRange(0, 2);
                this.initialcunning -= randomRange(0, 2);
                this.initialfatigue -= randomRange(0, 7);
                break;
            case 2:
                this.initialstrength -= randomRange(0, 2);
                this.initialspeed -= randomRange(0, 2);
                this.initialcunning += randomRange(0, 2);
                this.initialfatigue += randomRange(0, 7);
                break;
        }
    
    }


    attack(target) 
    {

        damage = (target.defending) ? ((this.strength + this.speed + this.cunning) / randomRange(1, 4)) - (target.speed + target.cunning) : ((this.strength + this.speed + this.cunning) / randomRange(1, 4)) - (target.speed + randomRange(0, 7));

        damage = (damage < 0) ? 0 : damage;

        target.fatigue -= damage;
    }

    defend() 
    {
        this.defend = true;
    }

    turnReset() 
    {
        this.defend = false;
    }

    finisher(target) 
    {
        if ((this.fatigue > (2 * target.fatigue)) || (target.fatigue <= 0))
        {
            
        }
    }   
}


class Player extends Character
{
    constructor()
    {
        super();
    }
}

class Enemy extends Character
{
    constructor()
    {
        super();
    }

    
}





function randomRange(min, max) 
{
    return Math.random() * (max - min) + min;
}

