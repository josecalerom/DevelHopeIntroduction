const films = [
  {
    title: 'John Wick',
    director: 'Chad Stahelski',
    year: 2015,
    genre: 'Thriller'
  },
  {
    title: '8 Mile',
    director: 'Curtis Hanson',
    year: 2002,
    genre: 'Music'
  },
  {
    title: 'Avatar',
    director: 'James Cameron',
    year: 2010,
    genre: 'Fantasy'
  },
  {
    title: 'Spider-Man',
    director: 'Sam Raimi',
    year: 2002,
    genre: 'Fantasy'
  },
  {
    title: 'Bohemian Rhapsody',
    director: 'Bryan Singer, Dexter Fletcher',
    year: 2018,
    genre: 'Music'
  },
]

function movieStats(arr) {
  const statsObj = {
    numMovies: arr.length,
    numYears: 0,
    genreCounts: {}
  };
  let years = [];
  for (let i = 0; i < arr.length; i++) {
    // increment genre count
    if (statsObj.genreCounts[arr[i].genre]) {
      statsObj.genreCounts[arr[i].genre]++;
    } else {
      statsObj.genreCounts[arr[i].genre] = 1;
    }
    // increment year count if it hasn't already been counted
    if(years.length > 0) {
      let hasYear = false;
      for(j=0; j < years.length; j++) {
        if(years[j] === arr[i].year) {
          hasYear = true;
          break;
        };
      }
      if(!hasYear) {
        years.push(arr[i].year)
      }
    } else {
      years.push(arr[i].year);
    }
  };
  statsObj.numYears = years.length;

  return statsObj;
}

  
console.log(movieStats(films))