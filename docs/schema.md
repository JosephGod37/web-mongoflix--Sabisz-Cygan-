

<<<<<<< HEAD
=======

## Film

| Pole                | Typ        | Opis                            | Przykład                             |
| :------------------ | :--------- | :------------------------------ | :----------------------------------- |
| `tytul`             | **String** | Unikalny tytuł filmu            | `"Inception"`                        |
| `dataWejsciaDoKina` | **Date**   | Data premiery filmu w kinach    | `ISODate("2010-07-16")`              |
| `gatunki`           | **Array**  | Lista gatunków filmu            | `["Sci-Fi", "Thriller"]`             |
| `rezyser`           | **String** | Nazwisko reżysera               | `"Christopher Nolan"`                |
| `listaAktorow`      | **Array**  | Lista aktorów w filmie          | `["Leonardo DiCaprio", "Tom Hardy"]` |
| `typDostepu`        | **String** | Typ dostępu: Premium lub Public | `"Premium"`                          |
| `licznikOdtworzen`  | **Int**    | Liczba odtworzeń filmu          | `15342`                              |


## Widz

| Pole              | Typ        | Opis                         | Przykład                |
| :---------------- | :--------- | :--------------------------- | :---------------------- |
| `imie`            | **String** | Imię użytkownika             | `"Jan"`                 |
| `nazwisko`        | **String** | Nazwisko użytkownika         | `"Kowalski"`            |
| `email`           | **String** | Adres e-mail                 | `"jan@mail.com"`        |
| `dataRejestracji` | **Date**   | Data założenia konta         | `ISODate("2023-05-14")` |
| `typKonta`        | **String** | Public (darmowe) lub Premium | `"Public"`              |
| `kraj`            | **String** | Kraj zamieszkania            | `"Polska"`              |
| `wiek`            | **Int**    | Wiek użytkownika             | `28`                    |


## Recenzja

| Pole          | Typ          | Opis                         | Przykład                             |
| :------------ | :----------- | :--------------------------- | :----------------------------------- |
| `filmId`      | **ObjectId** | Referencja do `filmy._id`    | `ObjectId("64f7a2...")`              |
| `widzId`      | **ObjectId** | Referencja do `widzowie._id` | `ObjectId("64f7b3...")`              |
| `ocena`       | **Int**      | Ocena filmu w skali 1–10     | `9`                                  |
| `recenzja`    | **String**   | Krótki komentarz widza       | `"Świetny film, bardzo wciągający!"` |
| `dataDodania` | **Date**     | Data dodania recenzji        | `ISODate("2024-02-15")`              |


>>>>>>> 3bde11ffad68f03b0bb5788207be656f5424a6de
