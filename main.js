var Canvas = new fabric.Canvas("myCanvas");
block_height = 30;
block_width = 30;
player_x = 10;
player_y = 10;
var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        Canvas.add(player_object);
    })
}

function new_Image(getimage) {
    fabric.Image.fromURL(getimage, function (img) {
        block_object = img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        Canvas.add(block_object);
    })
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("p and shift pressed together");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("Current Width").innerHTML = block_width;
        document.getElementById("Current Height").innerHTML = block_height;
    }
    if (e.shiftKey && keypressed == '77') {
        console.log("m and shift pressed together");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("Current Width").innerHTML = block_width;
        document.getElementById("Current Height").innerHTML = block_height;
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '84') {
        new_Image("trunk.jpg");
        console.log("t");
    }
    if (keypressed == '68') {
        new_Image("dark_green.png");
        console.log("d");
    }
    if (keypressed == '76') {
        new_Image("light_green.png");
        console.log("l");
    }
    if (keypressed == '71') {
        new_Image("ground.png");
        console.log("g");
    }
    if (keypressed == '87') {
        new_Image("wall.jpg");
        console.log("w");
    }
    if (keypressed == '89') {
        new_Image("yellow_wall.png")
        console.log("y");
    }
    if (keypressed == '85') {
        new_Image("unique.png");
        console.log("u");
    }
    if (keypressed == '67') {
        new_Image("cloud.jpg");
        console.log("c");
    }
    if (keypressed == '82') {
        new_Image("roof.jpg");
        console.log("r");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_height;
        console.log("block image height=" + block_height);
        console.log("when up arrow key is pressed,x=" + player_x + ",y=" + player_y);
        Canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 450) {
        player_y = player_y + block_height;
        console.log("block image height=" + block_height);
        console.log("when up arrow key is pressed,x=" + player_x + ",y=" + player_y);
        Canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 650) {
        player_x = player_x + block_width;
        console.log("block image width=" + block_width);
        console.log("when up arrow key is pressed,x=" + player_x + ",y=" + player_y);
        Canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_width;
        console.log("block image width=" + block_width);
        console.log("when up arrow key is pressed,x=" + player_x + ",y=" + player_y);
        Canvas.remove(player_object);
        player_update();
    }
}