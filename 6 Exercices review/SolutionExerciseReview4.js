const books = [
  {
    title: 'Dune', 
    author: 'Frank Herbert', 
    year: 1965,
    genre:'Science Fiction'
  },
  {
    title: 'The Martian', 
    author: 'Andy Weir', 
    year: 2014,
    genre:'Science Fiction'
  },
  {
    title: 'The Lord of the Rings', 
    author: 'Andy Weir', 
    year: 1954,
    genre:'Fantasy'
  },
  {
    title: 'The Ultimate Hitchhiker\'s Guide', 
    author: 'Douglas Adams', 
    year: 1979,
    genre:'Fantasy'
  },
  {
    title: '1Q84', 
    author: 'Haruki Murakami', 
    year: 2009,
    genre:'Novel'
  },
]

function bookTitles(arr) {
  let titlesArr = [];
  for (let i = 0; i < arr.length; i++) {
    let bookString = arr[i].title + " by " + arr[i].author;
    if (arr[i].year > 2000) {
      bookString += " - Modern";
    }
    if (arr[i].genre === "Science Fiction") {
      bookString += " - SciFi";
    }
    titlesArr.push(bookString);
  }
  return titlesArr;
}


  
console.log(bookTitles(books));