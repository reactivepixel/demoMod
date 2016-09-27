/*
  Captain
  First Mate
  Deck Swab
*/

const pirates = require('./pirates');

const startingPoint = {
    x: process.env.STARTING_X,
    y: process.env.STARTING_Y,
  };

const finalLocation = pirates.deckSwab(startingPoint);
console.log(finalLocation);
