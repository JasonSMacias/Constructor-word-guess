

function Letter(letter, TorF){
  this.letterGuessed = letter;
  this.wasGuessed = TorF;
};
Letter.prototype.getLetter = function(){

  if (this.wasGuessed === true){
    return this.letterGuessed;
  }
  else {
    return "_";
  };
};
Letter.prototype.charCompare = function(character){
  if (character === this.letterGuessed) {
    this.wasGuessed = true;
    
  }
  else {
    this.wasGuessed = false;
  };
  console.log(this.wasGuessed);
};


module.exports = Letter;