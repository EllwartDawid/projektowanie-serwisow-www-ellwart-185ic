
//Zadanie 1

var person = {
    "name": "David",
    "age": 21,
    "address": "Szkolna",
    "animals": {
        "dog": "Reksio",
        "cat": "Mimi",
        "reksio": {
            "age": 3,
            "gender": "male"
        }
    }
}

function zadanie1(callback) {
    console.log("Zadanie 1:");
    const arg = "koniec"
    callback(arg)
}

function dodawanie(param) {
    let a = person.age;
    let b = person.animals.reksio.age;
    const suma = a + b;
    console.log("Suma wieku właściciela i jego psa wynosi: ", suma);
    console.log(param);
};

document.getElementById("guzik1").addEventListener("click", function () { zadanie1(dodawanie) });

//Zadanie 1b

function zadanie1a(callback) {
    console.log("Zadanie 1a:");
    const arg = "koniec";
    callback(arg);
};

function ciagZnakow(param) {
    let c = person.name;
    let d = person.animals.dog;
    console.log(`${c} ma psa: ${d}`);
    console.log(param);
};


document.getElementById("guzik2").addEventListener("click", function () { zadanie1a(ciagZnakow) });

// Zadanie 2

function liczenie(x, y) {
    return x + y;
};

function naklikk() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(userData => {
                console.log("Zadanie 2:", userData.name)

                let user2 = userData.id;
                let user3 = userData.address.geo.lng;
                console.log("ID: " + user2);
                console.log("lng: " + user3);

                resolve(liczenie(user2, user3));
                reject("Błąd");

            });
    });

};
document.getElementById("guzik3").addEventListener("click", function () {
    naklikk()
        .then((response) => { console.log("Suma: ", response) })

        .catch(error => console.log("Błąd!!!!", error))

        .finally(() => console.log("Koniec przykładu"))
});

// Zadanie 2b

function nowyObiekt(user4, user5) {
    let obiekt = { ulica: user4, miasto: user5 };
    return (obiekt);
};

function obietnica() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/2')
            .then(response => response.json())
            .then(userData => {
                console.log("Zadanie 2b:", userData.name)

                let user4 = userData.address.street;
                let user5 = userData.address.city;
                console.log("Street: " + user4);
                console.log("City: " + user5);

                resolve(nowyObiekt(user4, user5));
                reject("Błąd");

            });
    });

};
document.getElementById("guzik4").addEventListener("click", function () {
    obietnica()
        .then((response) => { console.log("Nowy Obiekt: ", response) })

        .catch(error => console.log("Błąd!!!!", error))

        .finally(() => console.log("Koniec przykładu"))
});
// Zadanie 3

function liczenie(x, y) {
    return x + y;
};

function letsCalculateAsync() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/4')
            .then(response => response.json())
            .then(userData => {
                console.log("Zadanie 3:", userData.name)

                let user2 = userData.id;
                let user3 = userData.address.geo.lng;
                console.log("ID: " + user2);
                console.log("lng: " + user3);

                resolve(liczenie(user2, user3));
                reject("Błąd");

            });
    });

};
document.getElementById("guzik5").addEventListener("click", async function () {

    const dodawanie = await letsCalculateAsync();
    console.log("Suma:", dodawanie);

});

// Zadanie 3b

function nowyObiektAsync(user4, user5) {
    let obiekt = { ulica: user4, miasto: user5 };
    return (obiekt);
};

function someAsyncFunction() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/4')
            .then(response => response.json())
            .then(userData => {
                console.log("Zadanie 3b:", userData.name)

                let user4 = userData.address.street;
                let user5 = userData.address.city;
                console.log("Street: " + user4);
                console.log("City: " + user5);

                resolve(nowyObiektAsync(user4, user5));
                reject("Błąd");

            });
    });

};
document.getElementById("guzik6").addEventListener("click", async function () {

    const tworzenie = await someAsyncFunction();
    console.log(tworzenie);

});

// Zadanie 4

function naklik() {
    let url = 'https://jsonplaceholder.typicode.com/users/5';
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function () {
        let responseObj = xhr.response;
        let user4 = responseObj.id;
        let user5 = responseObj.address.geo.lng;
        let user6 = responseObj.name;
        console.log("Zadanie 4:", user6)
        console.log("ID: " + user4);
        console.log("lng: " + user5);
        console.log("Suma:", liczenie(user4, user5))
    };
    xhr.onerror = function () {
        console.log("Error");
    };
};

document.getElementById("guzik7").addEventListener("click", function () { naklik() });

//Zadanie 4b

function naklik2() {
    let url = 'https://jsonplaceholder.typicode.com/users/6';
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function () {
        let responseObj = xhr.response;
        let user4 = responseObj.address.street;
        let user5 = responseObj.address.city;
        let user6 = responseObj.name;
        console.log("Zadanie 4b:", user6)
        console.log("Street: " + user4);
        console.log("City: " + user5);
        console.log("Suma:", nowyObiekt(user4, user5))
    };
    xhr.onerror = function () {
        console.log("Error");
    };
};

document.getElementById("guzik8").addEventListener("click", function () { naklik2() });

//Zadanie 5

let url = 'https://jsonplaceholder.typicode.com/users/7'

function naklik3() {
    fetch(url)
        .then(response => response.json())
        .then(userData => {
            console.log("Zadanie 5:", userData.name)

            let user2 = userData.id;
            let user3 = userData.address.geo.lng;
            console.log("ID: " + user2);
            console.log("lng: " + user3);
            console.log("Suma: ", liczenie(user2, user3));

        });
};

document.getElementById("guzik9").addEventListener("click", function () { naklik3() });

//Zadanie 5b

function naklik4() {
    fetch(url)
        .then(response => response.json())
        .then(userData => {
            console.log("Zadanie 5b:", userData.name)

            let user4 = userData.address.street;
            let user5 = userData.address.city;
            console.log("Street: " + user4);
            console.log("City: " + user5);
            console.log("Obiekt: ", nowyObiekt(user4, user5));

        });
};

document.getElementById("guzik10").addEventListener("click", function () { naklik4() });

//Zadanie 6


function naklik5() {
    axios.get('https://jsonplaceholder.typicode.com/users/9')
        .then(userData => {

            console.log("Zadanie 6:", userData.name)
            let user2 = userData.id;
            let user3 = userData.address.geo.lng;
            console.log("ID: ", user2);
            console.log("lng: ", user3);
            console.log("Suma: ", liczenie(user2, user3));
        })
        .catch(function (error) {
            console.log("Błąd: ", error);
        });
};

document.getElementById("guzik11").addEventListener("click", function () { naklik5() });

//Zadanie 6b

function naklik6() {
    axios.get('https://jsonplaceholder.typicode.com/users/3')
        .then(userData => {
            console.log("Zadanie 6:", userData.name)
            let user4 = userData.address.street;
            let user5 = userData.address.city;
            console.log("Street: " + user4);
            console.log("City: " + user5);
            console.log("Obiekt: ", nowyObiekt(user4, user5));
        })
        .catch(function (error) {
            console.log("Błąd: ", error);
        });
};

document.getElementById("guzik12").addEventListener("click", function () { naklik6() });

