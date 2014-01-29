
function init() {
    //drawMainMenu();
    drawDarkBlueBackground();
    var game = new gameState();
    game.init();
    gameLoop(game);
}

function gameState() {
    //this.chapterData;
    //this.chapterIndex;
    this.goToNextStep = function () {
        while (this.chapterIndex < this.chapterData.length) {
            var x = this.chapterData[++this.chapterIndex].nodeType;
            if (x != 3) return;
        }
    };
    this.handleEvent = function (event) {
        //Find key pressed
        gameLoop(this);
    };

    this.canvas = document.getElementById("MainCanvas");
    this.textboxTop = this.canvas.height * .70;
    this.textboxHeight = this.canvas.height - this.textboxTop;
    this.gamedata = loadGameData();
    this.init = function () {
        loadChapter(this, "start");
    }
}

function gameLoop(game) {
    doChapterNext(game); //temporary
    //ProcessInput
    //Physics
    //Redraw

    //Prepare for next loop
    if (true) { //Temporary- Will be used for "waiting for space/enter input
        document.addEventListener('keypress', game, true);
    }
    else { 
        //setTimeout(gameLoop,100, game);
    }
}

function loadChapter(game, chapterName) {
    game.chapterData = xmlGetChapter(game.gamedata, chapterName);
    game.chapterIndex = 0;
    game.goToNextStep();
}

function doChapterNext(game) {
    var nextStep = game.chapterData[game.chapterIndex];
    switch (nextStep.nodeName) {
        case "t":
            clearScreen(game);
            drawTextBox(game);
            writeTextNormal(game,nextStep.textContent);
            game.goToNextStep();
            break;
        case "s":
            clearScreen(game);
            writeSpeechText(game, nextStep.textContent);
            game.goToNextStep();
            break;
        default:
            //ERROR
    }

}


//var InputManager = inherits(function () { }, {
//    // keycodes from jQuery UI: 
//    // https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.core.js
//    'Keys': {
//        'BACKSPACE': 8,
//        'COMMA': 188,
//        'DELETE': 46,
//        'DOWN': 40,
//        'END': 35,
//        'ENTER': 13,
//        'ESCAPE': 27,
//        'HOME': 36,
//        'LEFT': 37,
//        'NUMPAD_ADD': 107,
//        'NUMPAD_DECIMAL': 110,
//        'NUMPAD_DIVIDE': 111,
//        'NUMPAD_ENTER': 108,
//        'NUMPAD_MULTIPLY': 106,
//        'NUMPAD_SUBTRACT': 109,
//        'PAGE_DOWN': 34,
//        'PAGE_UP': 33,
//        'PERIOD': 190,
//        'RIGHT': 39,
//        'SPACE': 32,
//        'TAB': 9,
//        'UP': 38
//    },
//    '_keysDown': {},
//    'constructor': function () {
//        window.addEventListener('keydown', _.bind(this._onkeydown, this));
//        window.addEventListener('keyup', _.bind(this._onkeyup, this));
//    },
//    '_onkeydown': function (ev) {
//        // ev is the event object, and it has the "which" member,
//        // that says which key is pressed.
//        this._keysDown[ev.which] = true;
//    },
//    '_onkeyup': function (ev) {
//        this._keysDown[ev.which] = false;
//    },
//    'keyDown': function (key) {
//        // simply returning this._keysDown[key] would give "undefined"
//        // instead of false if the key was never pressed. Adding two 
//        // "!"s makes sure that it's always either true or false
//        return !!this._keysDown[key];
//    }
//});