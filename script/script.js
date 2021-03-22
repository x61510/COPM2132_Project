function Dice(dice1,dice2) {
  this.dice1 = dice1,
  this.dice2 = dice2
  }

const youDice = new Dice(0,0);
const botDice = new Dice(0,0);

let your_score_round = 0;
let your_score_total = 0;

let bot_score_round = 0;
let bot_score_total = 0;

let round = 0;

let end_text = "";

function roll(){
  round++;
  if (round > 3){
    return;
  }
  youDice.dice1 = Math.round(Math.random() * 5 + 1);
  youDice.dice2 = Math.round(Math.random() * 5 + 1);

  botDice.dice1 = Math.round(Math.random() * 5 + 1);
  botDice.dice2 = Math.round(Math.random() * 5 + 1);

  document.getElementById("your_dice_1").src="images/" + youDice.dice1 + ".jpg";
  document.getElementById("your_dice_2").src="images/" + youDice.dice2 + ".jpg";
  document.getElementById("bot_dice_1").src="images/" + botDice.dice1 + ".jpg";
  document.getElementById("bot_dice_2").src="images/" + botDice.dice2 + ".jpg";


  your_score_round = youDice.dice1 + youDice.dice2;

  if (youDice.dice1 == 1 || youDice.dice2 == 1){
    
    your_score_round = 0;
  } else if (youDice.dice1 == youDice.dice2){
    your_score_round *= 2;
  }
  
  your_score_total += your_score_round;



  bot_score_round = botDice.dice1 + botDice.dice2;

  if (botDice.dice1 == 1 || botDice.dice2 == 1){
    
    bot_score_round = 0;
  } else if (botDice.dice1 == botDice.dice2){
    bot_score_round *= 2;
  }

  bot_score_total += bot_score_round;



  document.getElementById("this_round1").innerHTML = your_score_round; 
  document.getElementById("total_score1").innerHTML = your_score_total;

  document.getElementById("this_round2").innerHTML = bot_score_round; 
  document.getElementById("total_score2").innerHTML = bot_score_total;

  if (round == 3){
    
    if (your_score_total > bot_score_total){
      end_text = "You Win!"
    } else if (your_score_total < bot_score_total){
      end_text = "You lose."
    } else{
      end_text = "Tie!"
    }
    
    document.getElementById("winner").innerHTML = end_text;
    $("#winner").fadeIn();
    
  }
}


function new_game() {
  youDice.dice1 = 0;
  youDice.dice2 = 0;

 botDice.dice1 = 0;
 botDice.dice2 = 0;


 your_score_round = 0;
 your_score_total = 0;

 bot_score_round = 0;
 bot_score_total = 0;

 round = 0;

 end_text = "";

 document.getElementById("this_round1").innerHTML= 0;
 document.getElementById("total_score1").innerHTML= 0;

 document.getElementById("this_round2").innerHTML= 0;
 document.getElementById("total_score2").innerHTML= 0;


  document.getElementById("your_dice_1").src="images/" + youDice.dice1 + ".jpg";
  document.getElementById("your_dice_2").src="images/" + youDice.dice2 + ".jpg";
  document.getElementById("bot_dice_1").src="images/" + botDice.dice1+ ".jpg";
  document.getElementById("bot_dice_2").src="images/" + botDice.dice2 + ".jpg";
 
  document.getElementById("winner").innerHTML = end_text;
  $("#winner").fadeOut(3000);
}

