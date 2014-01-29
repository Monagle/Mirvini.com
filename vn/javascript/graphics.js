
function clearScreen(game) {
    drawDarkBlueBackground();
}

function drawMainMenu() {
    drawDarkBlueBackground();
    //writeTextNormal("First try");
    Chapter1();
}


function drawDarkBlueBackground() {
    var canvas = document.getElementById("MainCanvas");
    var ctx = canvas.getContext("2d");
    var grd = ctx.createLinearGradient(0, 100, canvas.width / 2, canvas.height);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "#011E30");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


function drawTextBox(game) {
    var ctx = game.canvas.getContext("2d");
    var back = ctx.createLinearGradient(0, 0, game.canvas.width, game.textboxHeight);
    back.addColorStop(0, "rgba(87,87,87,0.4)");
    back.addColorStop(1, "rgba(87,87,0,.1)");
    ctx.fillStyle = back;
    ctx.fillRect(0, game.textboxTop, game.canvas.width, game.textboxHeight);
    ctx.strokeStyle = "rgba(180,255,255,.8)";
    ctx.lineWidth = 3;
    ctx.strokeRect(0, game.textboxTop, game.canvas.width, game.textboxHeight);
    
}