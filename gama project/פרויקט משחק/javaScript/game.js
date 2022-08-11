//****************************
var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;
var player = {
    elem: null,
    bottom: 0,
    left: 70,
};
var newFood = null;
addEventListener("keydown", movePlayer);
function movePlayer(e) {
    var e = event.keyCode;
    switch (e) {
        case UP:
            moveUp();
            break;
        case DOWN:
            moveDown();
            break;
        case RIGHT:
            moveRight();
            break;
        case LEFT:
            moveLeft();
            break;
    }

  

    var items = document.getElementById("main").getElementsByClassName("food");
    for (var i = 0; i < items.length; i++) {
        if (elementInSamePosition(document.getElementById("girl"), items[i])) {
            if (items[i].classList.contains("stone")) {
                ExitFail();
                //alert("נכשלת נסה שנית")               
              
                //window.location.reload();
            }
            else {
               
                cleardetails(items[i]);
                addPoints();
            }
        }
    }
    onload = "myPoints()";
}
function ExitFail() {
    window.location = "game over.html";
}
/********************* general functions *********************** */
function randomBetween(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//********************************פונקציות להזזת הילדה**************************
function moveUp() {
    if (document.getElementById("girl").offsetTop >= 0) {
        player.bottom -= 5;
        //document.getElementById("girl").style.transform = "rotate(310deg)";
    }

    document.getElementById("girl").style.top = player.bottom + "px";
}

function moveDown() {

    var h = document.getElementById("girl").clientHeight;
    var mh = document.getElementById("main").clientHeight;
    var max = mh - h;

    if (document.getElementById("girl").offsetTop <= max)

        player.bottom += 5;
    //document.getElementById("girl").style.transform = "rotate(125deg)";

    document.getElementById("girl").style.top = player.bottom + "px";


}

function moveLeft() {
    if (document.getElementById("girl").offsetLeft >= 25)
        player.left += 5;
    // document.getElementById("girl").style.transform = "rotate(220deg)";

    document.getElementById("girl").style.right = player.left + "px";
}

function moveRight() {

    var w = document.getElementById("girl").clientWidth;
    var mw = document.getElementById("main").clientWidth;
    var max = mw - w;

    if (document.getElementById("girl").offsetLeft <= max)
        player.left -= 5;
    //document.getElementById("girl").style.transform = "rotate(400deg)";

    document.getElementById("girl").style.right = player.left + "px";
}
//***********************פונקציות חפצים *************************


function createDetails() {
    var main = document.getElementById("main");
    newFood = {
        bottom: randomBetween(10, 80),
        left: randomBetween(10, 80),
        img: details[Math.round(Math.random() * 100) % details.length]
    }

    var newFoodHtml = document.createElement("img");
   
newFoodHtml.src = newFood.img;
    newFoodHtml.style.right = newFood.left + '%';
    newFoodHtml.style.bottom = newFood.bottom + '%';
    newFoodHtml.classList.add('food');
    
    
    if (newFood.img.indexOf("אבן") > -1) {
        newFoodHtml.classList.add('stone');
    }

    setTimeout(function () { cleardetails(newFoodHtml); }, 7000);
    main.appendChild(newFoodHtml).style.display = "normal";
}
function cleardetails(img) {
    if (img) {
        //document.getElementById("main").removeChild(img);
        img.remove();
    }
}

//**************************בדיקת מיקום**************************

function elementInSameXPosition(elem1, elem2) {
    return (elem1.offsetLeft <= elem2.offsetLeft && (elem1.offsetLeft + elem1.clientWidth) >= elem2.offsetLeft ||
        elem2.offsetLeft <= elem1.offsetLeft && (elem2.offsetLeft + elem2.clientWidth) >= elem1.offsetLeft
    );
}
//function elementInSameXPosition(elem1,elem2) {
//    if (elem1.offsetLeft <= elem2.offsetLeft && (elem1.offsetLeft + elem1.clientWidth) >= elem2.offsetLeft ||
//        elem2.offsetLeft <= elem1.offsetLeft && (elem2.offsetLeft + elem2.clientWidth) >= elem1.offsetLeft
//    )
//        //elem2.style.visibility = 'visible'; 
//        elem2.style.display = "none";
//}

function elementInSameYPosition(elem1, elem2) {
    return (elem1.offsetTop <= elem2.offsetTop && (elem1.offsetTop + elem1.offsetHeight) >= elem2.offsetTop ||
        elem2.offsetTop <= elem1.x.offsetTop && (elem2.offsetTop + elem2.offsetHeight) >= elem1.offsetTop
    )
}
//function elementInSameYPosition(elem1, elem2) {
//    if (elem1.offsetTop <= elem2.offsetTop && (elem1.offsetTop + elem1.offsetHeight) >= elem2.offsetTop ||
//        elem2.offsetTop <= elem1.x.offsetTop && (elem2.offsetTop + elem2.offsetHeight) >= elem1.offsetTop
//    )
//        //elem2.style.visibility = 'visible';
//        elem2.style.display = "none";

//}
function elementInSamePosition(elem1, elem2) {
    return elementInSameXPosition(elem1, elem2) && elementInSameYPosition(elem1, elem2);
}
//var w = document.getElementById("win");
//function play1() {
//    w.play();
//}

//function play2() {
//    w.play();
//}
var points=0
function addPoints() {
    points +=2;
    document.getElementById("myPoints").innerHTML = points;
    if (points == 30) { 
        ExitWin();
        
      
    }


}
function ExitWin() {
    window.location = "win.html";
}























