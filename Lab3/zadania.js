function zadJeden() {
	var wprowadzonyTekst = document.getElementById("zadjeden").value;
	var wynik = ("Liczba liter: " + wprowadzonyTekst.length);
	console.info(wynik);
};

const tablica = [34, 54, 78, 242, 56];

function zadDwa() {
	var wynik = 0;
	for (var i = 0; i < tablica.length; i++) {
		wynik += tablica[i]
	};
	console.info(wynik);
};

var litera = 'dawid'
function zadTrzy(litera) {
	let wynikk = '';
	for (let i = 0; i < litera.length; i++) {
		if (i % 2 == 0) {
			wynikk += litera[i].toUpperCase();
		} else {
			wynikk += litera[i].toLowerCase();
		}
	}
	return console.info(wynikk);
}


var pierwsza = 5
var druga = 4

function zadCztery(pierwsza, druga) {

	if (Number.isInteger(pierwsza) && Number.isInteger(druga)) {
		return (console.info(pierwsza * druga));
	}
	else {
		return false;
	}
};

var imie = "Dawid"
var miesiac = "Maj";

function zadPiec(imie, miesiac) {
	miesiac = miesiac.toLowerCase();
	if (miesiac == "grudzień" || miesiac == "styczeń" || miesiac == "luty")
		return console.info(imie + " jeździ na sankach");
	if (miesiac == "marzec" || miesiac == "kwiecień" || miesiac == "maj")
		return console.info(imie + " chodzi po kaluzach");
	if (miesiac == "czerwiec" || miesiac == "lipiec" || miesiac == "sierpień")
		return console.info(imie + " sie opala");
	if (miesiac == "wrzesień" || miesiac == "październik" || miesiac == "listopad")
		return console.info(imie + " zbiera liscie");
	else
		return console.info(imie + " uczy się JS");
};

var tekst = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
var znak = '|';
function zadSzesc(tekst, znak) {
	var imiona = tekst.split(znak);
	var posortowane = imiona.sort();
	return console.info(posortowane.join(znak));
};

const tab = ["Ania", "Marcin", "Bartek", "Piotr"]
function zadSiedemd(tab) {
	for (let i = 0; i < tab.length; i++) {
		var duze = tab[i];
		console.info(duze.toUpperCase());
	}
};

function zadSiedemm(litera) {
	let wynikk = '';
	for (let i = 0; i < litera.length; i++) {
		if (i % 2 == 0) {
			wynikk += litera[i].toUpperCase();
		} else {
			wynikk += litera[i].toLowerCase();
		}
	}
	return console.info(wynikk);
}
var name = 'kasia';
function checkFemale(name) {
	return (name[name.length - 1] == 'a');
}
console.info(checkFemale(name));


const users = [
	"Ania Nowak",
	"Piotr Kowalski",
	"Bartek Kosecki",
	"Natalia Nowak",
	"Weronika Piotrowska",
	"Agata Beatczak",
	"Tomasz Nowak",
	"Mateusz Kowalski",
	"Marcin Kotecki",
	"Betata Lecka",
	"Katarzyna Melecka"
];

function countWomanInTable(users) {
	var pani = 0;
	for (let i = 0; i < users.length; i++) {
		var name = users[i].split(" ");
		if (checkFemale(name[0])) {
			pani++;
		}
	}
	console.info(pani);
};
