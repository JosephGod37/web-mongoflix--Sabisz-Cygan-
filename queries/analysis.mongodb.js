
db = db.getSiblingDB("mongoflix")

print("\n--- RAPORT ANALITYCZNY MONGOFLIX ---");


console.log(1);
//1 Napisanie zapytania wyszukującego filmy z konkretnego gatunku (find).
const gatunek = "Sci-Fi";
const filmySciFi = db.movies.find({ gatunki: gatunek }).toArray();
console.log(`Filmy gatunku ${gatunek}:`, filmySciFi);


console.log(2);
//2 Napisanie zapytania filtrującego filmy po dacie i ocenie (operators: $gt, $and).
const data = new Date("2005-01-01");
const filmyPoDacieIOcene = db.movies.aggregate([
    {
        $match: { dataWejsciaDoKina: { $gt: data } }
    },
    {
        $lookup: {
            from: "reviews",
            localField: "_id",
            foreignField: "filmId",
            as: "recenzje"
        }
    },
    {
        $addFields: {
            sredniaOcena: { $avg: "$recenzje.ocena" }
        }
    },
    {
        $match: { sredniaOcena: { $gt: 8 } }
    }
]).toArray();

console.log("Filmy po dacie i z oceną > 8:", filmyPoDacieIOcene);


console.log(3);
//3 Stworzenie agregacji (aggregate): Średnia ocena dla każdego gatunku.
const sredniaOcenaNaGatunek = db.movies.aggregate([
    { $unwind: "$gatunki" },
    {
        $lookup: {
            from: "reviews",
            localField: "_id",
            foreignField: "filmId",
            as: "recenzje"
        }
    },
    {
        $addFields: {
            sredniaOcena: { $avg: "$recenzje.ocena" }
        }
    },
    {
        $group: {
            _id: "$gatunki",
            sredniaOcenaGatunku: { $avg: "$sredniaOcena" }
        }
    }
]).toArray();

console.log("Średnia ocena na gatunek:", sredniaOcenaNaGatunek);


console.log(4);
//4 Napisanie skryptu aktualizującego dane (np. dodanie pola featured: true).
const wynik=db.movies.updateMany(
    { typDostepu: "Premium" },
    { $set: { featured: true } }
);
console.log(wynik);