const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  return Math.floor(Math.random() * (dragon.strength - 15) + 15);
};

const warriorDamage = () => {
  return Math.floor(Math.random() * ((warrior.weaponDmg * warrior.strength) * 2 - warrior.strength) + warrior.strength);
};

const mageDamage = () => {
  if (mage.mana < 15) {
    return {
      damage: 'Não possui mana suficiente',
      mana: 0,
    }
  } 
  return {
      damage: Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence) + mage.intelligence),
      manaGasta: 15,
    }
}


const gameActions = {
  warrior: warriorTurn = (func) => {
    dragon.healthPoints = dragon.healthPoints - func;
    return warrior.damage = func;
  },
  mage: mageTurn = (func) => {
    dragon.healthPoints = dragon.healthPoints - func.damage;
    mage.mana -= 15;
    return mage.damage = func.damage;
  },
  dragon: dragonTurn = (func) => {
    mage.healthPoints = mage.healthPoints - func;
    warrior.healthPoints = warrior.healthPoints - func;
    return dragon.damage = func;
  },
  battleMembers,
};

gameActions.warrior(warriorDamage());
gameActions.mage(mageDamage());
gameActions.dragon(dragonDamage());

console.log(gameActions.battleMembers);