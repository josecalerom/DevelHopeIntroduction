**INT**

Write a function that takes an array of objects as a parameter, each of which represents a movie with the following properties: `title`, `director`, `year`, and `genre`. The function should return an object that contains the following properties:

- `numMovies`: the total number of movies in the array
- `numYears`: the number of unique years represented in the array
- `genreCounts`: an object that contains a count of how many movies are in each genre represented in the array.
Print the object.

## Suggestion ##
Use a for loop to iterate through the array and an if statement to check if each year or genre has already been counted. If it has not been counted, increment the corresponding count property in the returned object.


**ITA**

Scrivi una funzione che prende come parametro un array di oggetti, ognuno dei quali rappresenta un film con le seguenti proprietà: titolo, regista, anno e genere. La funzione dovrebbe restituire un oggetto che contiene le seguenti proprietà:
- `numMovies`: il numero totale di film nell'array
- `numYears`: il numero di anni unici rappresentati nell'array
- `genreCounts`: un oggetto che contiene un conteggio di quanti film ci sono in ciascun genere rappresentato nell'array.
Stampa l'oggetto.

## Suggestion ##
Utilizzare un ciclo for per iterare attraverso l'array e un'istruzione if per verificare se ogni anno o genere è già stato contato. Se non è stato contato, incrementare la proprietà di conteggio corrispondente nell'oggetto restituito.
