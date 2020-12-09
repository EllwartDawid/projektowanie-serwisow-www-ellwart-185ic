
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
//wielkość canvasu
canvas.width = 1000;
canvas.height = 500;
//przypisanie wielkości canvasu do zmiennych żeby póżniej ułatwić prace
const cw = canvas.width;
const ch = canvas.height;
//wielkość piłki
const ballSize = 20;
//pozycja początkowa piłki
let ballX = cw / 2 - ballSize / 2
let ballY = ch / 2 - ballSize / 2
//wielkość paletki
const paddelHeight = 100;
const paddelWidth = 20;
//umiejscowienie na osi x dwóch graczy
const playerX = 70;
const aiX = 910;
//umiejscowienie na osi y dwóch graczy
let playerY = 200;
let aiY = 200;
//szerokość i wysokość rakietek
const lineWidth = 6;
const lineHeight = 16;
//szybkość piłki
let ballSpeedX = 4;
let ballSpeedY = 4;
// punkty graczy
let playerPoints = 0;
let aiPoints = 0;
//
function player() {
    //ostylowanie pierwszego gracza
    ctx.fillStyle = '#7FFF00';
    ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight); // metoda rysująca prostokąt 
    //reakcja na odbicie gracza
    if (ballX - paddelWidth <= playerX && ballY >= playerY - ballSize && ballY <= playerY + paddelHeight) {
        ballSpeedX = -ballSpeedX;
    }
}

function ai() {
    //ostylowanie drugiego gracza
    ctx.fillStyle = 'yellow';
    ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);
    //reakcja na odbicie ai
    if (ballX + ballSize >= aiX && ballY <= aiY + paddelHeight && ballY >= aiY - ballSize) {
        ballSpeedX = -ballSpeedX;
    }
}

function ball() {
    //ostylownie piłki
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(ballX, ballY, ballSize, ballSize);
    //zmiana pozycji piłki po każdym wywołaniu o wartość ballSpeedX,ballSpeedY
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    //uderzanie w dolne i górne krawędzie canvas
    if (ballY <= 0 || ballY + ballSize >= ch) {
        ballSpeedY = -ballSpeedY;
        speedUp()
    }
    //uderzanie w boczne krawędzie canvas
    if (ballX <= 0 || ballX + ballSize >= cw) {
        ballSpeedX = -ballSpeedX;
        speedUp()
    }
    if (ballX <= 0) {
        start();
        //zwiększenie punktów i po siągnięciu 3 wypisanie napisu i skończenie gry
        aiPoints = aiPoints + 1;
        if (aiPoints === 3) {
            aiPoints = "WIN!!!";
            stop();
        }
    }
    if (ballX + ballSize >= cw) {
        start();
        //zwiększenie punktów i po siągnięciu 3 wypisanie napisu i skończenie gry
        playerPoints = playerPoints + 1;
        if (playerPoints === 3) {
            playerPoints = "WIN!!!";
            stop();
        }
    }
}

function table() {
    // ostylowanie stołu
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, cw, ch);
    //pętl rysuje linię środkową
    for (let linePosition = 20; linePosition < ch; linePosition += 30) {
        ctx.fillStyle = "gray"
        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight)
    }

}
// Na jakiej wysokości zaczyna się canvas
topCanvas = canvas.offsetTop; //określa jak daleko od krawędzi przeklądarki znajduje się canvas
console.log(topCanvas)

function playerPosition(e) {
    playerY = e.clientY - topCanvas - paddelHeight / 2; // clientY to pozycja myszy znajdująca się w obiekcie event e, odejmujemy topCanvas żeby znać pozycje w canvasie
                                                        //odejmujemy wielkość paletki podzieloną przez dwa po to żeby paletka reagowała na mysz gdy mysz jest na jej środku
    //zabezpieczenie żeby paletka nie wyjechała poza canvas
    //gdy wyjeżdża na dole
    if (playerY >= ch - paddelHeight) {
        playerY = ch - paddelHeight
    }
    //gdy wyjeżdża na górze
    if (playerY <= 0) {
        playerY = 0;
    }
}
//zwiększenie prędkości piłki o .2 jeżeli spełnia poniższe warunki
function speedUp() {
    if (ballSpeedX > 0 && ballSpeedX < 16) {
        ballSpeedX += .2;

    } else if (ballSpeedX < 0 && ballSpeedX > -16) {
        ballSpeedX -= .2;
    }

    if (ballSpeedY > 0 && ballSpeedY < 16) {
        ballSpeedY += .2;

    } else if (ballSpeedY < 0 && ballSpeedY > -16) {
        ballSpeedY -= .2;
    }

    console.log(ballSpeedX + ", " + ballSpeedY)
}

function aiPosition() {
    //Celem funkcji jest ustalić pozycję rakietki, która póżniej jest rysowana przez funkcję ai(). 
    //współrzedne srodka wysokości rakietki
    const middlePaddel = aiY + paddelHeight / 2;
    //współrzędne piłki (środka wysokości) na canvas.
    const middleBall = ballY + ballSize / 2;

    if (ballX > 500) {
        //Warunek 1 - środek piłki odległy o więcej niż 200px od środka rakietki
        if (middlePaddel - middleBall > 200) {

            aiY -= 24; //ruch rakietki w stronę piłki (wartość określa "prędkość") Zmniejszamy na osi Y odległość między piłką a rakietką.
        } else if (middlePaddel - middleBall > 50) {
            aiY -= 10;
        }
        //to samo co wyżej tylko w drugą stronę(piłka jest pod rakietką)
        else if (middlePaddel - middleBall < -200) {
            aiY += 24;
        } else if (middlePaddel - middleBall < -50) {
            aiY += 10;
        }
    }
    //gdy piłka jest w odległości większej niż 100 i mniejszej równej 500 od lewej krawędzi(lewa strona boiska)
    if (ballX <= 500 && ballX > 100) {
        if (middlePaddel - middleBall > 100) {
            aiY -= 3;
        }
        if (middlePaddel - middleBall < -100) {
            aiY += 3;
        }
    }

    //gdy próbuje wyjachać rakietka na dole poza canvas
    if (aiY >= ch - paddelHeight) {
        aiY = ch - paddelHeight
    }

    //gdy próbuje wyjachać rakietka na górze poza canvas
    if (aiY <= 0) {
        aiY = 0;
    }
}
// funkcja która zaczyna grę
function start() {
    ballX = cw / 2 - ballSize / 2;
    ballY = ch / 2 - ballSize / 2;
    playerY = 200;
    aiY = 200;
    ballSpeedX = 2;
    ballSpeedY = 2;
}
//funkcja która kończy grę
function stop() {
    ballSpeedY = 0;
    ballSpeedX = 0;
}
// wyświetla punkty pierwszego gracza
function playerPoint() {
    ctx.font = "54px arial";
    ctx.fillStyle = "red";
    ctx.fillText(`${playerPoints}`, 250, 50);
}
//wyświetla punkty drugiego gracza
function aiPoint() {
    ctx.font = "54px arial";
    ctx.fillStyle = "red";
    ctx.fillText(`${aiPoints}`, 750, 50);
}
// wywołanie funkcji przy ruszeniu myszką, czyli kontrolowanie playera
canvas.addEventListener("mousemove", playerPosition)
// funkcja która wywołuje wszystkie inne funkcje
function game() {
    table()
    ball()
    player()
    ai()
    aiPosition()
    playerPoint()
    aiPoint()
}
//funkcja setInterval wywołuje funkcję game 60 razy na sekundę
setInterval(game, 1000 / 60)
