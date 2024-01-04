//card playlist
const searchPlayList = [
  'Pop',
  'Musica',
  'Rock',
  'Podcast',
  'Eventi dal vivo',
  'Create per te',
  'Merch',
  'Estate',
  '2023',
  'Buone Feste',
  'Hip-Hop',
  'Clasifiche'
]

const color = [
  '#DC148C',
  '#006450',
  '#8400E7',
  '#1E3264',
  '#E8115B',
  '#148A08',
  '#BA5D07'
]

function getColor(color) {
  const id = Math.floor(Math.random() * color.length);
  return color[id];
}

function search(arr) {
  let divSearch = document.getElementById('playlistSearch');
  arr.forEach(element => {
    const getColorRandom = getColor(color);
    divSearch.innerHTML += `
    <div class="col-xl-3 col-6">
    <a href="#" class="anchor-hover text-decoration-none ">
    <div class="card" style="height: 11.5rem; background-color: ${getColorRandom}">
      <div class="card-body">
        <h5 class="card-title text-white">${element}</h5>                
      </div>
    </div>
    </a>
  </div>
    `
  });
}

//function search

const urlSearch = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=';

const fetchSearch = () => {
  const query = document.getElementById('search').value;

  if (query.trim() === '') {
    clearResults();
    return;
  }

  fetch(urlSearch + query)
    .then((response) => response.json())
    .then(data => getSearch(data, query))
    .catch(error => console.error('Error:', error));
}

function getSearch(data, query) {
  clearResults();

  if (data && data.data && data.data.length > 0) {
    data.data.forEach(element => {
      const title = element.title;
      const artist = element.artist.name;
      const picture = element.artist.picture_medium;
      const totalSeconds = element.duration;
      let minutes = Math.floor( totalSeconds / 60);
      let seconds = totalSeconds % 60;
      seconds = (seconds < 10) ? '0' + seconds : seconds;
      let duration = `${minutes}:${seconds}`

      let results = document.getElementById('search-results');
      results.innerHTML += `
      <div class="row pt-2 ps-3">
      <div class="col-xl-1 col-2 d-flex justify-content-end align-items-center">
      <img src="${picture}" alt="immagine dell' artista" class="w-75">
      </div>
      <div class="col-3">
      
      <a href="../../album.html?id=${element.album.id}" class="text-decoration-none">
      <p class="p-0 m-0 text-truncate">${title}</p>
      <small class="text-secondary">${artist}</small>
      </a>
      </div>
      <div class="col-1">
        <small class="text-secondary">${duration}</small>
      </div>
      </div>
      `
    });
  } else {
    document.getElementById('search-results').innerHTML = `Nessun risultato trovato per "${query}"`;
  }
}

function clearResults() {
  document.getElementById('search-results').innerHTML = '';
}

    
window.onload = () => {
  search(searchPlayList);
  document.getElementById('search').addEventListener('input', fetchSearch);
}