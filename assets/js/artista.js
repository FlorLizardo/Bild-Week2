const params = new URLSearchParams(location.search);
const id = params.get("id");

const secondUrl = "https://striveschool-api.herokuapp.com/api/deezer/artist/";

//function di prova
async function artistiProva() {
  const response = await fetch(secondUrl + id);
  const artist = await response.json();
  // console.log(artist);

  const resp = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=50`
  );
  const artTrackList = await resp.json();

  jbArtist(artist);
  prova(artTrackList);
  stampaTopFive();
}

//funzione numero tracks
function prova(tracklist) {
  let array = [];
  let ordine = [];
  for (let i = 0; i < tracklist.data.length; i++) {
    let tracks = tracklist.data[i].rank;
    array.push(tracks);

    ordine = array.sort(function(a, b) {
      return a - b;
    });

    ordine.reverse();
  }
  createTopFive(ordine, tracklist);
}

const topFive = [];
console.log(topFive);
function createTopFive(ordine, tracklist) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < ordine.length; j++) {
      if (ordine[i] === tracklist.data[j].rank) {
        topFive.push(tracklist.data[j]);
      }
    }
  }

  return topFive;
}

//funzione header OK!!!!!!
function jbArtist(artist) {
  const header = document.getElementById("artistPage");
  const favoriti = document.getElementById("favoriti");
  const containerBg = document.getElementById('container-bg');
  containerBg.style.backgroundImage = `url('${artist.picture_xl}')`;
  containerBg.classList.add('bg-repeat')

  header.innerHTML = `
  <div class="row px-0" >
  <div class="col-xl-12 col-sm-12">
  <div class="jumbotron jumbotron-fluid pe-0">
    <div class=" pe-0" id="jumbotron">
      <div class="mt-5 mb-3 pt-5 bg-opacity ps-3">
      <small class="d-flex align-items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1372FC" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
      <path fill="#1372FC" d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636z"/>
      <path fill="#ffffff" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
    </svg>
    
        Artista verificato
      </small>
        <h1 class="display-1 fw-bold mb-4 text-truncate">${artist.name}</h1>
        <small>${artist.nb_fan} ascoltatori mensili</small>
      </div>
    </div>
  </div>
  </div>
</div>
  `;

  favoriti.innerHTML = `
  <div class="row mt-4">
  <h4>Brani che ti piacciono</h4>
  <div class="col-xl-12  col-sm-12 d-flex">
    <div class="me-2">
      <img src="${artist.picture_small}" alt="" width="50" height="50" class="rounded-circle">
    </div>
    <div>
      <h6>Hai messo Mi piace a 11 brani</h6>
    <small class="text-white-50">Di ${artist.name} </small>
    </div>
  </div>
</div>
  `;

}

//funzione stampa top5

function stampaTopFive() {
  const popolari = document.getElementById("popolari");

  for (let i = 0; i < topFive.length; i++) {
    console.log(topFive);

    //minuti
    const totalSeconds = topFive[i].duration;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let duration = `${minutes}:${seconds}`;

    //numero track
    let arrayIndex = topFive;
    let indiceTrack = topFive[i];
    let index = arrayIndex.indexOf(indiceTrack) + 1;

    popolari.innerHTML += `
    <div class="col-xl-1 d-none d-xl-block pt-2 d-flex justify-content-end align-items-center">${index}</div>
      <div class="col-xl-5 col-6 text-truncate pt-2">
        <img
          src="${topFive[i].album.cover_medium}"
          alt="cover album"
          width="40px"
          height="40px"
        />
        <a href="#" class="text-decoration-none text-light" id="name-song-${i}" onclick="playSongArtisti('${topFive[i].preview}', '${i}')">
          ${topFive[i].title}
        </a>
      </div>

    <div class="col-3 pt-2 d-flex justify-content-end ">
      <p class="text-white-50">${topFive[i].rank}</p>
    </div>
    <div class="col-3 pt-2 d-flex justify-content-center">
      <p class="text-white-50">${duration}</p>
    </div> 
    `;
  }
}

function clickPlayer(coverMedium, artist, index) {
  
  let imgPlayer = document.getElementById('imgPlayer');
  let songPlayer = document.getElementById('songPlayer');
  let song = document.getElementById(`name-song-${index}`).innerText; 
  let duration = calculateDuration(topFive[index].duration);
  let songPreview = topFive[index].preview;

  imgPlayer.innerHTML = `
  <img
  src="${coverMedium}"
  width="55"
  height="55"
  class="object-fit-cover"
/>
  `

  songPlayer.innerHTML = `
  <p class="h6 p-0 m-0 text-truncate">${song}</p>
  <p class="text-truncate">${artist}</p>
  `
  
}

function calculateDuration(totalSeconds) {
  let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;	
}

//play alle canzoni

let play = document.getElementById('play-btn');
let audioPlayer = document.getElementById('audioPlayer');




//funzione per assegnare il play
function togglePlay() {
	if (audioPlayer.paused) {
		audioPlayer.play();
	} else {
		audioPlayer.pause();
	}
}

//funzione principale play alla canzone

function playSongArtisti(preview, index) {
  
	audioPlayer.setAttribute('src', `${preview}`);
  audioPlayer.play();
  
  play.addEventListener('click', togglePlay);
  play.removeEventListener('click', togglePlay);
  
  let coverMedium = topFive[index].album.cover_medium;
  let artist = topFive[index].artist.name;

  clickPlayer(coverMedium, artist, index)
}


//stampa card album

// function stampaAlbum() {
//   let album = document.getElementById('album');
// }

window.onload = () => {
  artistiProva();
};