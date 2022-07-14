// Sensei Class
// Extend the Ninja class and create the Sensei class. 
// A Sensei should have 200 Health, 10 speed, and 10 strength by default.
//  In addition, a Sensei should have a new attribute called wisdom, 
//  and the default should be 10. Finally, add the speakWisdom() method. 
//  speakWisdom() should call the drinkSake() 
// method from the Ninja class, before console.logging a wise message.


class Ninja{
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
        return this;
    }

    showStats() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
        return this;
    }
    showNameClass() {
        console.log("Name of CLASS: " + this.constructor.name);
        return this;
    }

    drinkSake () {
        this.health += 10;
        return this;
    }
}

const ojNinja = new Ninja("Ohjay");
ojNinja.sayName();
ojNinja.showStats();
ojNinja.showNameClass();



console.log("------Sensei-------");

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        const drink = super.drinkSake();
        drink;
        console.log("Wisdom: " + this.wisdom + ", 'What one programmer can do in one month, two programmers can do in two months.'")
        return this
    }

    showStatsW() {
        const stats = super.showStats();
        stats;
        console.log("Wisdom: " + this.wisdom);
        return this;
    }

  
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStatsW();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
superSensei.showNameClass();