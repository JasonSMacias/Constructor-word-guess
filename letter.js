function Letter(letter, guessed){
  this.letterGuessed = letter;
  this.wasGuessed = guessed;
};
Letter.prototype.getLetter = function(){
  if (this.wasGuessed = true){
    return letter;
  };
  else {
    return "_";
  };
};
Letter.prototype.charCompare = function(character){
  if (character === this.letterGuessed) {
    this.wasGuessed = true;
  };
};
