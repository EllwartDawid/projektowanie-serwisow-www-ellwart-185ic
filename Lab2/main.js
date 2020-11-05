
                let x = document.getElementsByClassName("badge-light");
                x[0].innerHTML = 6; // x[0] to pierwszy znaleziony element


                function wyswietlNapis() {
                    document.getElementById("napis").innerHTML = "Ellwart Dawid";
                }

                function tloStrony() {
                   document.body.style.backgroundColor = "green";
                }

                function data() {
                    document.getElementById("teraz").innerHTML = Date();
                }

                function powiadomienie() {
                    alert ("Powiadomienie!");
                }
                
                function losoj(min, max) {
  	                return Math.floor(Math.random() * (max - min)) + min;
	            }
                
                function najedz(obj) {
                    obj.innerHTML = "Ellwart"
                }
  
                function odjedz(obj) {
                    obj.innerHTML = "Dawid"
                }
                
                function wyborOpcji(txt) { 
  	                document.getElementById("wybor").innerHTML = txt
	            } 

                function wcisnij(obj) {
                    obj.style.backgroundColor = "green";
                    obj.innerHTML = "Dawid";
                }

                function pusc(obj) {
                    obj.style.backgroundColor="green";
                    obj.innerHTML="Ellwart";
                }


                function czcionka() {
                    var zmienna = document.getElementById("zmiana");
                    zmienna.style.fontSize = "40px";
                }

                function czcionkaSuwak() {
                    let suwak = document.getElementById("napis1");
                    let czcionka = document.getElementById("zadanieSuwak");
                    let wielkosc, rozmiar;
                    wielkosc = suwak.value;
                    rozmiar = wielkosc + "px;";
                    czcionka.style.fontSize = suwak.value + "px";
                }

                function odliczanie(){
                    var dzisiaj = new Date();

                    var dzien = dzisiaj.getDate();
                    var miesiac = dzisiaj.getMonth()+1;
                    var rok = dzisiaj.getFullYear();

                    var godzina = dzisiaj.getHours();
                    if (godzina<10) godzina = "0"+godzina;

                    var minuta = dzisiaj.getMinutes();
                    if (minuta<10) minuta = "0"+minuta;

                    var sekunda = dzisiaj.getSeconds();
                    if (sekunda<10) sekunda = "0"+sekunda;

                    document.getElementById("zegar").innerHTML =dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda; setTimeout("odliczanie()",1000);
                }
                
                function sprawdz(){
                    var liczba = document.getElementById("pole").value;

                    if (liczba>0) document.getElementById("wynik").innerHTML="dodatnia";
                    else if (liczba<0) document.getElementById("wynik").innerHTML="ujemna";
                    else if (liczba==0) document.getElementById("wynik").innerHTML="zero";
                    else document.getElementById("wynik").innerHTML="To nie liczba";
                }
                
                function wypisz(){
                    var liczba1 = document.getElementById("pole1").value;
                    var liczba2 = document.getElementById("pole2").value;
                    var napis2 = "";

                    for (i=liczba1; i<=liczba2; i++)
                    {
                        napis2 = napis2 + i + " ";
                    }
                    document.getElementById("wynik1").innerHTML = napis2;
                }
                
                function validateForm() {
                    "use strict";
                    var x = document.forms["war1"]["war2"].value;
                    if (x == "") {
                      alert("Wypełnij pole");
                    } 
                }
                function tlo(){
                    document.body.style.backgroundImage ="url('https://www.telepolis.pl/images/2020/04/bing-tapeta.png')";
                }
                
                function kolorGuzik() {
                    let guzik = document.getElementById("guzikid");
                    guzik.style.background = 'green';
                }
                
                function obramowanie() {
                    let ramka = document.getElementById("zadanie");
                    ramka.style.borderStyle = "solid";
                }
                
                
                function tekstCzerwony() {
                    document.body.style.color = 'red';
                }
                
                function tekstStandard() {
                    document.body.style.color = 'black';
                }

   
