print = console.log;


var your_dice_1 = 1;
var your_dice_2 = 1;

var bot_dice_1 = 1;
var bot_dice_2 = 1;


var your_score_round = 0;
var your_score_total = 0;

var bot_score_round = 0;
var bot_score_total = 0;

var round = 0;

var end_text = "";

function roll(){
  round++;
  if (round > 3){
    return;
  }
  your_dice_1 = Math.round(Math.random() * 5 + 1);
  
  your_dice_2 = Math.round(Math.random() * 5 + 1);

  bot_dice_1 = Math.round(Math.random() * 5 + 1);
  bot_dice_2 = Math.round(Math.random() * 5 + 1);

  document.getElementById("your_dice_1").src="images/" + your_dice_1 + ".jpg";
  document.getElementById("your_dice_2").src="images/" + your_dice_2 + ".jpg";
  document.getElementById("bot_dice_1").src="images/" + bot_dice_1 + ".jpg";
  document.getElementById("bot_dice_2").src="images/" + bot_dice_2 + ".jpg";


  your_score_round = your_dice_1 + your_dice_2;

  if (your_dice_1 == 1 || your_dice_2 == 1){
    
    your_score_round = 0;
  } else if (your_dice_1 == your_dice_2){
    your_score_round *= 2;
  }
  
  your_score_total += your_score_round;




  bot_score_round = bot_dice_1 + bot_dice_2;

  if (bot_dice_1 == 1 || bot_dice_2 == 1){
    
    bot_score_round = 0;
  } else if (bot_dice_1 == bot_dice_2){
    bot_score_round *= 2;
  }

  bot_score_total += bot_score_round;


  

  document.getElementById("score_board1").innerHTML=String(your_score_round) + " " + String(your_score_total);

  document.getElementById("score_board2").innerHTML=String(bot_score_round) + " " + String(bot_score_total);

  if (round == 3){
    
    if (your_score_total > bot_score_total){
      end_text = "You Win!"
    } else if (your_score_total < bot_score_total){
      end_text = "You lose."
    } else{
      end_text = "Tie!"
    }

    
    document.getElementById("winner").innerHTML = end_text
  }
}


function new_game() {
 your_dice_1 = 1;
 your_dice_2 = 1;

 bot_dice_1 = 1;
 bot_dice_2 = 1;


 your_score_round = 0;
 your_score_total = 0;

 bot_score_round = 0;
 bot_score_total = 0;

 round = 0;

 end_text = "";

 document.getElementById("score_board1").innerHTML=String(your_score_round) + " " + String(your_score_total);

  document.getElementById("score_board2").innerHTML=String(bot_score_round) + " " + String(bot_score_total);


  document.getElementById("your_dice_1").src="images/" + your_dice_1 + ".jpg";
  document.getElementById("your_dice_2").src="images/" + your_dice_2 + ".jpg";
  document.getElementById("bot_dice_1").src="images/" + bot_dice_1 + ".jpg";
  document.getElementById("bot_dice_2").src="images/" + bot_dice_2 + ".jpg";

  document.getElementById("winner").innerHTML = end_text
}

