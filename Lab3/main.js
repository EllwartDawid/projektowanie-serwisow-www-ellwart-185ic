
var box = document.getElementById('alert');
box.addEventListener('click', function () {
    alert('Hello World');
});

document.getElementById("zaddwa").addEventListener("mouseover", zadDwa); //najechanie myszą
document.getElementById("zaddwa").addEventListener("mouseout", zadDwaa); //odjechanie myszą
function zadDwa() {
    document.getElementById("zaddwa").innerHTML = "Dawid";
};

function zadDwaa() {
    document.getElementById("zaddwa").innerHTML = "Ellwart";
};

document.getElementById("zadtrzy").addEventListener("keypress", zadTrzy); //naciśnięcie klawisz

function zadTrzy() {
    document.getElementById("zadtrzy").style.backgroundColor = "red";
};

document.getElementById("zadcztery").addEventListener("select", zadCztery); //Zdarzenie występuje po wybraniu przez użytkownika tekstu (dla <input> i <textarea>)

function zadCztery() {
    document.getElementById("zadcztery").style.color = "green";
}

document.getElementById("zadpiec").addEventListener("dblclick", zadPiec); //podwójne kliknięcie

function zadPiec() {
    document.getElementById("zadpiec").innerHTML = "I was double-clicked!";
};

document.getElementById("zadszesc").addEventListener("keydown", zadSzesc); //naciskanie klawisza

function zadSzesc() {
    var zmienna = document.getElementById("zadszesc");
    zmienna.style.fontSize = "40px";
};

document.getElementById("zadsiedem").addEventListener("copy", zadSiedem); //po skopiowaniu

function zadSiedem() {
    zadsiedem.style.color = 'red';
};

document.getElementById("zadosiem").addEventListener("input", zadOsiem); //po wprowadzeniu danych

function zadOsiem() {
    var liczba = document.getElementById("zadosiem").value;

    if (liczba > 0) document.getElementById("wynik").innerHTML = "dodatnia";
    else if (liczba == 0) document.getElementById("wynik").innerHTML = "zero";
    else document.getElementById("wynik").innerHTML = "To nie liczba";
};


document.getElementById("zaddziewiec").addEventListener("submit", zadDziewiec); // po przyciśniuciu guzika submit
function zadDziewiec() {
    "use strict";
    var x = document.forms["war1"]["war2"].value;
    if (x == "") {
        alert("Wypełnij pole");
    };
};

document.getElementById("zaddziesiec").addEventListener("contextmenu", zadDziesiec); //po otworzeniu menu kontekstowego prawym przyciskiem myszy
function zadDziesiec() {
    zaddziesiec.style.backgroundImage = "url('https://www.telepolis.pl/images/2020/04/bing-tapeta.png')"
};

document.getElementById("zadjedenascie").addEventListener("change", zadJedenascie);//Zdarzenie występuje, gdy zawartość elementu formularza, zaznaczenie lub stan zaznaczenia uległy zmianie
function zadJedenascie() {
    let suwak = document.getElementById("napis1");
    let czcionka = document.getElementById("zadaniejedenascie");
    let wielkosc, rozmiar;
    wielkosc = suwak.value;
    rozmiar = wielkosc + "px;";
    czcionka.style.fontSize = suwak.value + "px";
};
