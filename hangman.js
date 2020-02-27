$(document).ready(init);

function init(){

   // $(".choice").click(results);
    $("#restart").click(refresh);
    $("button").click(randomWord);
    $(".letters").click(player)
}

var wordList = ["horse", "revolver", "saloon", "tarnation",
    "spur", "sheriff", "sarsaparilla", "cactus", "hooves", "hat",
" mustang", "rodeo" ];

var answer = [];

var abc = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

var randomWord;

var lives =0;

function randomWord(){


    var randomIndex = Math.floor(Math.random()*wordList.length);

    randomWord = wordList[randomIndex];


    for(var i = 0; i<randomWord.length; i++){
        answer[i] = "_";
    }
    //var wordLength = randomWord.length;

        $("p").text(answer.join("  "));

    var remainingLetters = randomWord.length;

}

function player(){
var guess = this.id;
var remainingLetters = randomWord.length;
var matchFound = false;

        for (var index =0; index<remainingLetters; index++){
            if(randomWord[index] === guess){
                answer[index] = guess;
                matchFound=true;
            }

            }

    $("p").text(answer.join("  "));


        $("#hangman>div").hide();

    if(!matchFound){
        lives++;
    }
    if(lives ===1){
        $("#step1").show();
    }
    if(lives ===2){
        $("#step2").show();
    }if(lives ===3){
        $("#step3").show();
    }if(lives ===4){
        $("#step4").show();
    }if(lives ===5){
        $("#step5").show();
    }if(lives ===6){
        $("#step6").show();
        $("#result").text("You Lose!");
    }



}


function refresh(){
    location.reload();

}