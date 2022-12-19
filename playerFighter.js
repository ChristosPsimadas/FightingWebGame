class Character
{
    constructor()
    {
        this.strength = 6;
        this.cunning = 6;
        this.speed = 6;
        this.fatigue = 30;
        this.defending = false;

        if (randomRange(0, 2) == 1)
        {
            
            this.strength += randomRange(0, 2);
                this.speed += randomRange(0, 2);
                this.cunning -= randomRange(0, 2);
                this.fatigue -= randomRange(0, 7);
        }
        else
        {
            this.strength -= randomRange(0, 2);
                this.speed -= randomRange(0, 2);
                this.cunning += randomRange(0, 2);
                this.fatigue += randomRange(0, 7);
        }

    
    }


    attack(target) 
    {
        console.log(target);
        console.log(target.defending);
        let damage = (target.defending) ? Math.round(((this.strength + this.speed + this.cunning) - (target.speed + target.cunning)) / randomRange(1, 4)) : Math.round(((this.strength + this.speed + this.cunning) - (target.speed + randomRange(0, 7))) / randomRange(1, 4));
        console.log(damage);
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

    getStrength()
    {
        return this.strength;
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
        this.defending = false;
    }

    
}



function randomRange(min, max) 
{
    return Math.floor(Math.random() * (max - min) + min);
}

