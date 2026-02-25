
db = db.getSiblingDB("mongoflix")

db.movies.drop()
db.users.drop()
db.reviews.drop()

console.log(" ----Start: Inicjalizacja bazy danych dla aplikacji mongoflix")

// 3. Dodawanie filmów
db.movies.insertMany([
    {
        tytul: "Inception",
        dataWejsciaDoKina: new Date("2010-07-16"),
        gatunki: ["Sci-Fi", "Thriller"],
        rezyser: "Christopher Nolan",
        listaAktorow: ["Leonardo DiCaprio", "Tom Hardy"],
        typDostepu: "Premium",
        licznikOdtworzen: 15342
    },
    {
        tytul: "Interstellar",
        dataWejsciaDoKina: new Date("2014-11-07"),
        gatunki: ["Sci-Fi", "Drama"],
        rezyser: "Christopher Nolan",
        listaAktorow: ["Matthew McConaughey", "Anne Hathaway"],
        typDostepu: "Premium",
        licznikOdtworzen: 18721
    },
    {
        tytul: "Gladiator",
        dataWejsciaDoKina: new Date("2000-05-05"),
        gatunki: ["Action", "Drama"],
        rezyser: "Ridley Scott",
        listaAktorow: ["Russell Crowe", "Joaquin Phoenix"],
        typDostepu: "Public",
        licznikOdtworzen: 11234
    },
    {
        tytul: "The Matrix",
        dataWejsciaDoKina: new Date("1999-03-31"),
        gatunki: ["Sci-Fi", "Action"],
        rezyser: "The Wachowskis",
        listaAktorow: ["Keanu Reeves", "Laurence Fishburne"],
        typDostepu: "Public",
        licznikOdtworzen: 25000
    }
]);

// 4. Dodawanie użytkowników
db.users.insertMany([
    {
        imie: "Jan",
        nazwisko: "Kowalski",
        email: "jan@mail.com",
        dataRejestracji: new Date("2023-05-14"),
        typKonta: "Public",
        kraj: "Polska",
        wiek: 28
    },
    {
        imie: "Anna",
        nazwisko: "Nowak",
        email: "anna@mail.com",
        dataRejestracji: new Date("2022-11-20"),
        typKonta: "Premium",
        kraj: "Polska",
        wiek: 32
    },
    {
        imie: "Tomasz",
        nazwisko: "Wiśniewski",
        email: "tomasz@mail.com",
        dataRejestracji: new Date("2024-01-10"),
        typKonta: "Public",
        kraj: "Niemcy",
        wiek: 40
    }
]);

// 5. Dodawanie recenzji
db.reviews.insertMany([
    {
        filmId: db.movies.findOne({ tytul: "Inception" })._id,
        widzId: db.users.findOne({ email: "jan@mail.com" })._id,
        ocena: 9,
        recenzja: "Świetny film, mega fajny!",
        dataDodania: new Date("2024-02-15")
    },
    {
        filmId: db.movies.findOne({ tytul: "Interstellar" })._id,
        widzId: db.users.findOne({ email: "anna@mail.com" })._id,
        ocena: 10,
        recenzja: "Arcydzieło science fiction.",
        dataDodania: new Date("2024-03-01")
    },
    {
        filmId: db.movies.findOne({ tytul: "Gladiator" })._id,
        widzId: db.users.findOne({ email: "tomasz@mail.com" })._id,
        ocena: 8,
        recenzja: "Bardzo dobry film historyczny.",
        dataDodania: new Date("2024-04-10")
    }
]);
console.log("--- Sukces: Mongoflix gotowy do pracy! ---");
