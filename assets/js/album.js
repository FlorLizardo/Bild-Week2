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
    <div>
      <img
      src="${data.cover_medium}"
      width="190"
      height="190"
      class="object-fit-cover ms-0 p-2"
      />
    </div>
    <div class="px-3 pt-5">
      <p class="h6">ALBUM</p>
      <h1 class="display-5 fw-bold text-truncate" style="width:30rem;">${data.title}</h1>
      <div class="h6 d-flex">
        <img src="${data.artist.picture}" width="30px" height="30px" class="rounded-circle me-2"> 
        <a href="../../artista.html?id=${data.contributors[0].id}" class="text-decoration-none text-light">${data.artist.name}</a> 
        <p> - ${year} - ${data.nb_tracks} brani,<span class="text-secondary"> ${duration}</span>
        </p>
      </div>
    </div>
  </div>` 
 rowAlbum.innerHTML = album;
}

const getSong = (data) => {

  for(let i = 0; i <= data.tracks.data.length; i++) {
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
   `<div class="col-xl-1 text-secondary d-flex justify-content-end align-items-center pt-3">
              ${index}
             </div>
             <div class="col-xl-7 pt-3">
               <div class="row">
               <a href="#" class="text-decoration-none" onclick="clickPlayer('${data.cover_medium}', '${i}')">

                 <div class="col-xl-12 h6 text-light text-capitalize" id="name-song-${i}">${data.tracks.data[i].title}</div>  
                </a>             
                 <div class="col-xl h6 text-secondary text-capitalize" id="artist-name-${i}">
                ${data.artist.name}
                 </div>
               </div>
             </div>

             <div class="col-xl-3 text-secondary d-flex align-items-center pt-3">${data.tracks.data[i].rank}</div>
             <div class="col-xl-1 text-secondary d-flex align-items-center pt-3">${duration}</div>`
             
 rowTracks.innerHTML += track;
  }

  
}

function clickPlayer(coverMedium, index) {
  
  let imgPlayer = document.getElementById('imgPlayer');
  let songPlayer = document.getElementById('songPlayer');
  let artistName = document.getElementById(`artist-name-${index}`).innerText;
  let song = document.getElementById(`name-song-${index}`).innerText; 

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
  <small class="text-truncate">${artistName}</small>
  `
}


window.onload = () => {
 getTrackList();
}