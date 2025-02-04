// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name;
  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health >0){
    return `${this.name} has received ${damage} points of damage`

    }else {
    return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return `Odin Owns You All!`

  }

    

}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health -= damage;
    if (this.health >0){
      return `A Saxon has received ${damage} points of damage`
  
      }else {
      return `A Saxon has died in combat`
      }
    }
  }   


// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
    
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    //position || index
    let idRnd = Math.floor(Math.random() * this.saxonArmy.length); // 0 -n numero random
    let rndSaxon = this.saxonArmy[idRnd]; // <= {helth:100, str...}
    let rndViking = this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let message = rndSaxon.receiveDamage(rndViking.attack());
    // message = "a Saxon died in combat"

    if(rndSaxon.health <=0){
      // metodo para arreglos splice para eliminar un elemento o mas
      this.saxonArmy.splice(idRnd, 1);
      return message;
    }
    return message;
  }

  saxonAttack(){
    let idRnd = Math.floor(Math.random() * this.vikingArmy.length);
    let rndViking = this.vikingArmy[idRnd];
    let rndSaxon = this.saxonArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let message = rndViking.receiveDamage(rndSaxon.attack());
    if(rndViking.health <=0){
      this.vikingArmy.splice(idRnd,1);
      return message;
    }
    return message;
  }
  showStatus(){
    if(!this.vikingArmy.lenght) return "Vikings have won the war of the century!" 
    if(!this.saxonArmy.length) return "Saxons have fought for their lives and survived another day..."
    if(this.saxonArmy.length && this.vikingArmy.length) return "Vikings and Saxons are still in the thick of battle."
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
