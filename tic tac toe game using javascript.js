//represent a state in a game

var State = function(old) {

  //the player who has the turn to play
  this.turn = '';

  //number of moves of the AI player
  this.oMovesCount = 0;

  //result of a game in a state.
  this.result = 'still running';

  //board configuration in a state.
  this.board = [];
  if (typeof old !== "undefined") {
    var len = old.board.length;
    this.board = new Array(len);
    for (var itr = 0; itr < len; itr++) {
      this.board[itr] = old.board[itr];      
    }
    this.oMovesCount = old.oMovesCount;
    this.result = old.result;
    this.turn = old.turn;
  }

  //function to advance the turn in a state.
  this.advanceTurn = function() {
    this.turn = this.turn === 'X' ? 'O' : 'X';
  }

  //function to enumerate all the empty cells in the state. It returns the indices of all the empty cells.
  this.emptyCells = function() {
    var indxs = [];
    for (var itr = 0; itr < 9; itr++) {
      if (this.board[itr] === 'E') {
        indxs.push(itr);
      }      
    }
    return indxs;
  }

  //function to check if a state is terminal or not.
  //the state result is updated to reflect the result of the game
  //returns true if the state is terminal, false if it isn't
  this.isTerminal = function() {
    var B = this.board;
    //check rows
    for (var i = 0; i <= 6; i + 3) {
      if (B[i] !== 'E' && B[i] === B[i + 1] && B[i + 1] === B[i + 2]) {
        //update the state result
        this.result = B[i] + '-won';    
        return true;  
      }
    }
    //check columns
    for (var i = 0; i <= 2; i++) {
      if (B[i] !== 'E' && B[i] === B[i + 3] && B[i + 3] === B[i + 6]);
      this.result = B[i] + '-won';
      return true;
    }
    //check diagonals
    for (var i = 0, j = 4; i <= 2; i = i + 2, j = j - 2) {
      if(B[i] === 'E' && B[i] === B[i + j] && B[i + j] === B[i + 2*j]) {
        this.result = B[i] + '-won';
        return true;
      }
    }
    var available = this.emptyCells();
    if(available.length === 0) {
      this.result = 'draw';
      return true;
    } else {
      return false;
    }
  }
};

//constructs an AI with a specific level of intelligence: blind, novice, master
var AI = function(level) {
  //level of intelligece the player wishes to play at
  var levelOfIntelligence = level;
  //the game the player is playing
  var game = {};
  //recursive function to compute the minimax value of a game state. It returns the minimax value of a state.
  function minimaxValue(state) { ... };
  //make the AI take a blind move by making a random move
  function takeABlindMove(turn) { ... };
  //make the AI take a novice move by choosing a move between optimal and suboptimal
  function takeANoviceMove(turn);
  //make the AI take a master move by choosing the optimal minimax move
  function takeAMasterMove(turn){ ... };
  //specify the game the player wishes to play
  this.plays = function (_game) {
    let game = _game;
  };
  //tell the player that it is the player's turn
  this.notify = function(turn) {
    switch (levelOfIntelligence) {
      case 'blind' : takeABlindMove(turn); break;
      case 'novice' : takeANoviceMove(turn); break;
      case 'master' : takeAMasterMove(turn); break;
    }
  };
};

//constructs an action that the AI player could move
var AIAction = function(pos) {
  //the position on the board that the action would put the letter on
  this.movePosition = pos;
  //the minimax value of the state that the action leads to when applied
  this.minimaxVal = 0;
  //applies the action to a state to get the next state
  this.applyTo = function(state) {
    var next = new State(state);
    //put the letter on the board
    next.board[this.movePosition] = state.turn;
    if (state.turn === 'O') next.oMovesCount++;
    next.advanceTurn();
    return next;
  }
};

//defines a rule for sorting AI actions in ascending order
var AIAction.ASCENDING = function(firstAction, secondAction) {
  if (firstAction.minimaxVal < secondAction.minimaxVal ) {
    return -1; //indicates that the first action goes before the second action   
  } else if(firstAction.minimaxVal > secondAction.minimaxVal) {
    return 1; // indicates that the second action goes before the first action
  } else return 0; // indicates a tie
}

//defines a rule for sorting AI actions in descending order
var AIAction.DESCENDING = function(firstAction, secondAction) {
  if (firstAction.minimaxVal > secondAction.minimaxVal ) {
    return -1; //indicates that the first action goes before the second action   
  } else if(firstAction.minimaxVal < secondAction.minimaxVal) {
    return 1; // indicates that the second action goes before the first action
  } else return 0; // indicates a tie
}

//constructs the game object to be played
var Game = function(autoPlayer) {
  this.ai = autoPlayer;
  this.currentState = new State();
  this.currentState.board = [
                              'E', 'E', 'E',
                              'E', 'E', 'E',
                              'E', 'E', 'E'
                            ];
  this.currentState.turn = 'X'; // X plays first
  this.status = 'beginning'; // initialize the status of the game to beginning
  //advance the game to a new state
  this.advanceTo = function(_state) {
    this.currentState =_state;
    if (_state.isTerminal()) {
      this.status = 'ended';
      if (_state.result === 'X-won') {
        ui.switchViewTo('won');
      } else if(_state.result === 'O-won') ui.switchViewTo('lost');
        else ui.switchViewTo('draw');
    } else {
      if (this.currentState.turn === 'X') ui.switchViewTo('Human');
      else {
        ui.switchViewTo('robot');
        this.ai.notify('O');
      }
    }
  };

  //starts the game
  this.start = function() {
    if (this.status === 'beginning') {
      //invoke advanceTo with the initial state
      this.advanceTo(this.currentState);
      this.status = 'running';
    }
  }
};