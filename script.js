//TMDB

const API_KEY = 'api_key=557305253588dd9a4aa5de9222923c99';
const BASE_URL= 'https://api.themoviedb.org/3';
const API_URL = BASE_URL+'/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&'+API_KEY;
const IMG_URL='https://image.tmdb.org/t/p/w500';
const searchURL=BASE_URL+'/search/movie?'+API_KEY;
const genres=[
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

// setGenre();
// function setGenre(){
//      tagsEl.innerHTML='';
//      genres.forEach(genre =>{
//       const t = document.createElement('div');
//       t.classList.add('tag');
//       t.id=genre.id;
//       t.innerText=genre.name;
//       t.addEventListener('click',() =>{
         
//       } )
//       tagsEl.append(t);
//      })
// }

// function setGenre() {
//   tagsEl.innerHTML = '';

//   genres.forEach(genre => {
//       const t = document.createElement('div');
//       t.classList.add('tag');
//       t.id = genre.id;
//       t.innerText = genre.name;

//       t.addEventListener('click', () => {
//           // Example: Log the clicked genre's name to the console
//           if(selectedGenre.length == 0){
//               selectedGenre.push(genre.id);
//           }else{
//             if(selectedGenre.includes(genre.id)){
//               selectedGenre.forEach((id, idx) =>{
//                 if(id == genre.id ){
//                   selectedGenre.splice(idx, 1);
//                 }
//               })
//             }else{
//               selectedGenre.push(genre.id);
//             }
//           }
//           console.log(selectedGenre);

//           // You can add more functionality here based on the clicked genre
//           // For example, trigger an API request, update a list, etc.
//       });

//       tagsEl.append(t);
//   });
// }

// var selectedGenre = []
// setGenre();
// function setGenre() {
//     tagsEl.innerHTML= '';
//     genres.forEach(genre => {
//         const t = document.createElement('div');
//         t.classList.add('tag');
//         t.id=genre.id;
//         t.innerText = genre.name;
//         t.addEventListener('click', () => {
//             if(selectedGenre.length == 0){
//                 selectedGenre.push(genre.id);
//             }else{
//                 if(selectedGenre.includes(genre.id)){
//                     selectedGenre.forEach((id, idx) => {
//                         if(id == genre.id){
//                             selectedGenre.splice(idx, 1);
//                         }
//                     })
//                 }else{
//                     selectedGenre.push(genre.id);
//                 }
//             }
//             console.log(selectedGenre)
//             getMovies(API_URL + '&with_genres='+encodeURI(selectedGenre.join(',')))
//             highlightSelection()
//         })
//         tagsEl.append(t);
//     })
// }


getMovies(API_URL);

function getMovies(url){
 
  fetch(url).then(res => res.json()).then(data => {        
     
    showMovies(data.results);
  })

}


function showMovies(data) {
  main.innerHTML = '';

  data.forEach(movie => {
      const { title, poster_path, vote_average, overview } = movie;
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML = `
          <img src="${poster_path? IMG_URL + poster_path:"http://via.placeholder.com/1080x1580"}" alt="${title}"> 
          <div class="movie-info">
              <h3>${title}</h3>
              <span class="${getColor(vote_average)}">${vote_average}</span>
          </div>
          <div class="overview">
              <h3>Overview</h3>
              ${overview}
          </div>
      `;
      main.appendChild(movieEl);
  });
}
function getColor(vote) {
  if (vote >= 8) {
      return 'green';
  } else if (vote >= 5) {
      return 'orange';
  } else {
      return 'red';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm) {
      getMovies(searchURL + '&query=' + searchTerm);
      search.value = '';
  } else {
      window.location.reload();
  }
});
