var currentRMX = 10;
var currentRMY = 10;
var currentCMX = 10;
var currentCMY = 10;

var imagesAll = new Array();
for (i = 0; i < 3; i++) {
    imagesAll[i] = new Image();
    imagesAll[i].src = 'images/eyes' + i + '.png';
}

var counter = 0;

function getWidthOfCard(currentCardId) {
    var width = 0;
    var cardy = document.getElementById(currentCardId);
    if (cardy) {
        var rect = cardy.getBoundingClientRect();
        width = rect.width;
    }

    var offset = cardy.offsetLeft;
    //return width - (offset * 2) - 1;
    return width - (width * .25);
}

function getHeightOfCard(currentCardId) {
    var height = 0;
    var cardy = document.getElementById(currentCardId);
    /* Below is the width of card */
    if (cardy) {
        var rect = cardy.getBoundingClientRect();
        height = rect.height - 1;
    }

    var offset = cardy.offsetTop;

    return height - (offset * 2);
}


function animateAll() {
    var roadAcross = getWidthOfCard("playersRM");
    var heightOfRow = getHeightOfCard("playersRM") / 5;

    document.getElementById('eyesRM').src = imagesAll[counter].src;
    counter = (counter + 1) % 3;

    document.getElementById('eyesRM').style.left = currentRMX + 'px';
    document.getElementById('eyesRM').style.top = currentRMY + 'px';
    currentRMX += 15;
    currentRMY += 0;
    if (currentRMX > roadAcross) {
        currentRMX = 0;
        currentRMY += heightOfRow;
        if (currentRMY > (heightOfRow * 5))
            currentRMY = 10;
    }

    var roadDown = getHeightOfCard("playersCM");
    var widthOfColumn = getWidthOfCard("playersCM") / 5;
    document.getElementById('eyesCM').src = imagesAll[counter].src;
    counter = (counter + 1) % 3;
    document.getElementById('eyesCM').style.left = currentCMX + 'px';
    document.getElementById('eyesCM').style.top = currentCMY + 'px';

    currentCMX += 0;
    currentCMY += 15;

    if (currentCMY > roadDown) {
        currentCMY = 0;
        currentCMX += widthOfColumn;
        if (currentCMX > (widthOfColumn * 5))
            currentCMX = 10;
    }


    setTimeout('animateAll()', 300);
}



function animateRowMajor() {
    var road = getWidthOfCard("playersRM");
    var heightOfRow = getHeightOfCard("playersRM") / 5;

    document.getElementById('eyesRM').src = imagesAll[counter].src;
    counter = (counter + 1) % 3;

    document.getElementById('eyesRM').style.left = currentRMX + 'px';
    document.getElementById('eyesRM').style.top = currentRMY + 'px';
    currentRMX += 5;
    currentRMY += 0;
    if (currentRMX > road) {
        currentRMX = 0;
        currentRMY += heightOfRow;
        if (currentRMY > (heightOfRow * 5))
            currentRMY = 10;
    }

    setTimeout('animateRowMajor()', 200);
}

function animateColumnMajor() {
    var road = getHeightOfCard("playersCM");

    var widthOfColumn = getWidthOfCard("playersCM") / 5;

    document.getElementById('eyesCM').style.left = currentCMX + 'px';
    document.getElementById('eyesCM').style.top = currentCMY + 'px';

    currentCMX += 0;
    currentCMY += 15;

    if (currentCMY > road) {
        currentCMY = 0;
        currentCMX += widthOfColumn;
        if (currentCMX > (widthOfColumn * 5))
            currentCMX = 10;
    }
    setTimeout('animateColumnMajor()', 100);
}

//window.addEventListener('load', animateRowMajor);
//window.addEventListener('load', animateColumnMajor);
window.addEventListener('load', animateRowMajor);