
//function Chapter1()
//{
//    writeSpeechText("This is the first one\n The second one\nThe third One");
//}

function writeTextNormal(game,text) {
    var canvas = document.getElementById("MainCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "26px Alegreya SC";
    ctx.textBaseline = "top";
    var splitText = text.split("\n");
    var lineHeight = 28;
    for (i = 0; i < splitText.length; i++) {
        ctx.fillText(splitText[i].trim(), 10, (lineHeight * i) + game.textboxTop + 5);
    }
}

function writeSpeechText(game,text) {
    var canvas = document.getElementById("MainCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "26px Alegreya SC";
    ctx.textBaseline = "top";
    var splitText = text.split("\n");
    for (i = 0; i < splitText.length; i++) {
        splitText[i] = splitText[i].trim();
    }
    var i = 0;
    var j = 0;
    var locX = 10;
    var locY = game.textboxTop;
    writeSpeechChar(splitText, i, j, locX, locY);
}

function writeSpeechChar(splitText, i, j, locX, locY) {
    if (i < splitText.length) {
        if (j < splitText[i].length) {
            var canvas = document.getElementById("MainCanvas");
            var ctx = canvas.getContext("2d");
            ctx.fillText(splitText[i].charAt(j), locX, locY);
            locX += ctx.measureText(splitText[i].charAt(j)).width;
            //play noise
            var snd = new Audio("sounds/Talk-Beep.ogg");
            snd.play();
            j++;
        }
        else {
            i++;
            j = 0;
            locX = 10;
            locY += 28;
        }
        setTimeout(writeSpeechChar, 50, splitText, i, j, locX, locY);
    }
}
