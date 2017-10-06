//Variablen


// scherm groote en breedre
var schermgroote = screen.height / 4 + 300;
var schermbreedte = screen.width / 3+ 200;


//Doelen

//Doel paal 1 gene die de spel bestuurt
var doelp1 = schermbreedte / 2;

//Doel paal 2 gene die de spel bestuurt
var doelp2 = schermbreedte / 2 - 100;

//Doel plaal 1 De tegenstander
var doelpu1 = schermbreedte / schermbreedte - 1 + 313;

//Doel plaal 2 De tegenstander
var doelpu2 = schermbreedte / schermbreedte - 1 + 213;


//De ronde stip in het midden waar de wedstrijd begin

var stipx = schermbreedte / 2 - 40;
var stipy = schermgroote / 2

//positie van player 1

var pplayer1x = stipx - 90;
var pplayer1y = stipy;

//positie van player 2

var pplayer2x = stipx + 90;
var pplayer2y = stipy;


//player 1 show

var player1 = {
    show : function() {
        fill(0);
        ellipse(pplayer1x,pplayer1y,70,70);
    }
};



function beweegp1() {

    this.keyPressed = function() {

        if (keyCode == UP_ARROW) {
             pplayer1y = pplayer1y - 10;

        } else if (keyCode == DOWN_ARROW) {
            pplayer1y = pplayer1y + 10;

        } else if (keyCode == RIGHT_ARROW) {
            pplayer1x = pplayer1x + 10;

        } else if (keyCode == LEFT_ARROW) {
            pplayer1x = pplayer1x - 10;

        }

    }

}


function beweegp2() {

if (keyDown("W")) {
    pplayer2y = pplayer2y - 1;

} else if (keyDown("S")) {
    pplayer2y = pplayer2y + 1;

} else if (keyDown("D")) {
    pplayer2x = pplayer2x + 1;

} else if (keyDown("A")) {
    pplayer2x = pplayer2x - 1;

}

}




//Player 2 show

var player2 = {
    show : function() {
        fill(255);
        ellipse(pplayer2x,pplayer2y,70,70);
    }


};



function setup() {
    createCanvas(schermgroote,schermbreedte);


}


function draw() {
    background(30,160,230);
    //doel 1;
    fill(0);
    rect(doelp1,schermgroote,10,70);
    rect(doelp2,schermgroote,10,70);
    //doel 2
    fill(255);
    rect(doelpu1,0,10,70);
    rect(doelpu2,0,10,70);

    //De begin stip
    fill(170,50,70);
    ellipse(stipx,stipy,70,70);

    //Debug bal
    if (pplayer1x >= width) {
        pplayer1x = pplayer1x - 10;

    } else if (pplayer1x <= 0) {
        pplayer1x = pplayer1x + 10;

    } else if (pplayer1y >= width + 40) {
        pplayer1y = pplayer1y - 10;

    } else if (pplayer1y <= 0) {
        pplayer1y = pplayer1y + 10;

    } else if (pplayer2x >= width) {
       pplayer2x = pplayer2x - 10;

    } else if (pplayer2x <= 0) {
        pplayer2x = pplayer2x + 10;

    } else if(pplayer2y >= width + 40) {
        pplayer2y = pplayer2y - 10;

    } else if(pplayer2y <= 0) {
        pplayer2y = pplayer2y + 10;

    }


    //player 1;
    player1.show();
    beweegp1();
    scorep1();


    //player 2;
    player2.show();
    beweegp2();
    scorep2();



}



//Score

function scorep1() {
    var score = "Score " + 0;
    text(score,35,40);

}

function scorep2() {
    var score2 = "Score " + 0;
    text(score2,35,516);


}


//Punten optelling player 1
