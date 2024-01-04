const params = new URLSearchParams(location.search)
const id = params.get('id');

const secondUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/";


const getTrackList = () => {
 fetch(secondUrl + id)
   .then((response) => response.json())
   .then((data) => {
       console.log(data)
     tracklist(data)
     getSong(data)
   })
   .catch((error) => console.error("Error:", error));
};


const tracklist = (data) => {
  const bg_jumbotron = document.getElementById('bg-album-jb');
 const rowAlbum = document.getElementById('albumtron');
 bg_jumbotron.style.backgroundImage = `url('${data.cover_xl}')`;
 bg_jumbotron.classList.add('bg_jumbotron')

 const totalSeconds = data.duration;
 let hour = Math.floor(totalSeconds / 3600);
 let minutes = Math.floor(( totalSeconds / 60) % 60);
 minutes = (minutes < 10) ? '0' + minutes : minutes;
 let seconds = totalSeconds % 60;
 seconds = (seconds < 10) ? '0' + seconds : seconds;
 if(hour === 0) {
  duration = `${minutes} min ${seconds} sec.`;
 }else if (hour === 1) {
  duration = `${hour} ora ${minutes} min ${seconds} sec`;
 }else {
  duration = `${hour} ore ${minutes} min ${seconds} sec`;
 }

 let date = data.release_date;
 let year = (new Date(date)).getFullYear();

 let album = 
 `<div class="col-12 album-jb bg-opacity d-flex">
 <div class="row pt-md-4 pt-lg-5 pt-xl-0">
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 text-sm-center ">
      <img
      src="${data.cover_medium}"
      width="190"
      height="190"
      class="object-fit-cover ms-xl-0 p-md-0 p-lg-0 p-xl-2 p-3"
      />
    </div>
    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 px-3 pt-xl-5 pt-sm-0 pt-0 albumSm d-sm-flex d-flex flex-column flex-sm-column">
      <p class="h6 textSm d-none d-xl-block d-lg-block d-md-block">ALBUM</p>
      <h1 class="display-5 fw-bold text-truncate order-sm-1 order-1" style="width:30rem;">${data.title}</h1>
      <div class="h6 d-flex order-sm-2 order-2">
        <img src="${data.artist.picture}" width="30px" height="30px" class="rounded-circle me-2 "> 
        <a href="../../artista.html?id=${data.contributors[0].id}" class="text-decoration-none text-light textSm pt-1 pt-sm-1 pt-xl-0 ">${data.artist.name} </a> 
        <p class="d-flex order-sm-6 order-6">  <span class="textSm pt-sm-1 pt-1 pt-xl-0"> - ${year} </span> <span class="d-none d-xl-block"> - ${data.nb_tracks} brani, </span> <span class="text-secondary d-none d-xl-block">  ${duration}</span>
        </p>
      </div>
    </div>
    </div>
  </div>` 
 rowAlbum.innerHTML = album;
}

const getSong = (data) => {

  for(let i = 0; i < data.tracks.data.length; i++) {
    //duration track
    let totalSeconds = data.tracks.data[i].duration;
    let minutes = Math.floor( totalSeconds / 60);
    let seconds = totalSeconds % 60;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    let duration = `${minutes}:${seconds}`

    //numero track
    let arrayIndex = data.tracks.data;
    let indiceTrack = data.tracks.data[i]
    let index = arrayIndex.indexOf(indiceTrack) + 1;
   
   const rowTracks = document.getElementById('tracklist');
   let track = 
   `<div class="col-xl-1 d-none d-xl-block text-secondary d-flex justify-content-end align-items-center pt-3">
              ${index}
             </div>
             <div class="col-xl-7 col-sm-7  col-7 pt-3">
               <div class="row">
               <a href="#" class="text-decoration-none"  onclick="playSongArtisti('${data.tracks.data[i].preview}', '${i}', '${data.tracks.data[i].album.cover_medium}')">

                 <div class="col-xl-12 col-sm-12 col-12 h6 text-light text-capitalize text-truncate" id="name-song-${i}">${data.tracks.data[i].title}</div>  
                </a>             
                 <div class="col-xl col-sm col h6 text-secondary text-capitalize" id="artist-name-${i}">
                ${data.artist.name}
                 </div>
               </div>
             </div>

             <div class="col-xl-3 col-sm-3 col-3 text-secondary d-flex align-items-center pt-3">${data.tracks.data[i].rank}</div>
             <div class="col-xl-1 col-sm-1 col-1 text-secondary d-flex align-items-center pt-3">${duration}</div>`
             
 rowTracks.innerHTML += track;
  }

  
}

function clickPlayer(index, coverMediumImg) {
  
  let imgPlayer = document.getElementById('imgPlayer');
  let songPlayer = document.getElementById('songPlayer');
  let artistName = document.getElementById(`artist-name-${index}`).innerText;
  let song = document.getElementById(`name-song-${index}`).innerText; 

  imgPlayer.innerHTML = `
  <img
  src="${coverMediumImg}"
  width="55"
  height="55"
  class="object-fit-cover"
/>
  `

  songPlayer.innerHTML = `
  <p class="h6 p-0 m-0 text-truncate">${song}</p>
  <p class="text-truncate font-size-list">${artistName}</p>
  `
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

function playSongArtisti(preview, index, coverMedium) {
	audioPlayer.setAttribute('src', `${preview}`);
  audioPlayer.play();
  
  play.addEventListener('click', togglePlay);
  play.removeEventListener('click', togglePlay);
  
  let coverMediumImg = coverMedium;
  

  clickPlayer( index, coverMediumImg)
}


window.onload = () => {
 getTrackList();
}