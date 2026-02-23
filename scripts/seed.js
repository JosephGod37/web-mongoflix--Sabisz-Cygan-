
db = db.getSiblingDB("mongoflix")

db.movies.drop()
db.users.drop()
db.reviews.drop()

console.log(" ----Start: Inicjalizacja bazy danych dla aplikacji mongoflix")

// 3. Dodawanie filmów
db.movies.insertMany([
    { _id: 1, tytul: "Inception", rok: 2010, gatunek: "Sci-Fi", czy_premium: true, licznik_odtworzen: 15342 },
    { _id: 2, tytul: "Interstellar", rok: 2014, gatunek: "Sci-Fi", czy_premium: true, licznik_odtworzen: 18721 },
    { _id: 3, tytul: "Gladiator", rok: 2000, gatunek: "Action", czy_premium: false, licznik_odtworzen: 11234 },
    { _id: 4, tytul: "Parasite", rok: 2019, gatunek: "Thriller", czy_premium: true, licznik_odtworzen: 14222 },
    { _id: 5, tytul: "The Dark Knight", rok: 2008, gatunek: "Action", czy_premium: false, licznik_odtworzen: 22310 },
    { _id: 6, tytul: "Forrest Gump", rok: 1994, gatunek: "Drama", czy_premium: false, licznik_odtworzen: 19876 },
    { _id: 7, tytul: "Whiplash", rok: 2014, gatunek: "Drama", czy_premium: true, licznik_odtworzen: 9876 },
    { _id: 8, tytul: "The Matrix", rok: 1999, gatunek: "Sci-Fi", czy_premium: false, licznik_odtworzen: 25000 },
    { _id: 9, tytul: "The Social Network", rok: 2010, gatunek: "Drama", czy_premium: false, licznik_odtworzen: 8765 },
    { _id: 10, tytul: "Joker", rok: 2019, gatunek: "Crime", czy_premium: true, licznik_odtworzen: 17654 }
]);

// 4. Dodawanie użytkowników
db.users.insertMany([
    { _id: 1, imie: "Jan", nazwisko: "Kowalski", email: "jan@mail.com", kraj: "Polska", wiek: 28, czy_premium: false },
    { _id: 2, imie: "Anna", nazwisko: "Nowak", email: "anna@mail.com", kraj: "Polska", wiek: 32, czy_premium: true },
    { _id: 3, imie: "Tomasz", nazwisko: "Wiśniewski", email: "tomasz@mail.com", kraj: "Niemcy", wiek: 40, czy_premium: false },
    { _id: 4, imie: "Kasia", nazwisko: "Mazur", email: "kasia@mail.com", kraj: "Francja", wiek: 25, czy_premium: true },
    { _id: 5, imie: "Marek", nazwisko: "Lewandowski", email: "marek@mail.com", kraj: "Hiszpania", wiek: 35, czy_premium: false }
]);

// 5. Dodawanie recenzji
db.reviews.insertMany([
    { _id: 1, movie_id: 1, user_id: 1, ocena: 9, komentarz: "Świetny film!" },
    { _id: 2, movie_id: 2, user_id: 2, ocena: 10, komentarz: "Arcydzieło sci-fi." },
    { _id: 3, movie_id: 3, user_id: 3, ocena: 8, komentarz: "Bardzo dobry." },
    { _id: 4, movie_id: 4, user_id: 4, ocena: 9, komentarz: "Genialna satyra." },
    { _id: 5, movie_id: 5, user_id: 1, ocena: 10, komentarz: "Najlepszy Batman." },
    { _id: 6, movie_id: 6, user_id: 5, ocena: 7, komentarz: "Klasyka kina." },
    { _id: 7, movie_id: 7, user_id: 2, ocena: 8, komentarz: "Świetna muzyka." },
    { _id: 8, movie_id: 8, user_id: 3, ocena: 9, komentarz: "Ponadczasowy." },
    { _id: 9, movie_id: 9, user_id: 4, ocena: 7, komentarz: "Ciekawa historia." },
    { _id: 10, movie_id: 10, user_id: 5, ocena: 9, komentarz: "Mocny film." }
]);
console.log("--- Sukces: Mongoflix gotowy do pracy! ---");
