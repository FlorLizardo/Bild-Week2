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


 let album = 
 `<div class="col-xl-3">
 <img
   src="${data.cover_medium}"
   width="190"
   height="190"
   class="object-fit-cover ms-0 p-2"
 />
</div>
<div class="col-xl-9 px-3">
 <div>
   <p class="h6">ALBUM</p>
   <h1 class="display-4">${data.title}</h1>
   <p class="h6">
   <img src="${data.artist.picture}" width="30px" height="30px" class="rounded-circle"> <a href="../../artista.html?id=${data.id}" class="text-decoration-none text-light">${data.artist.name}</a> - ${data.release_date} - ${data.nb_tracks} brani -
     ${duration}
   </p>
 </div>
</div>` 
 rowAlbum.innerHTML = album;
}

const getSong = (data) => {

  for(let i = 0; i <= data.tracks.data.length; i++) {
    //duration track
    const totalSeconds = data.tracks.data[i].duration;
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
                 <div class="col-xl-12 h6 text-light text-capitalize">${data.tracks.data[i].title}</div>               
                 <div class="col-xl h6 text-secondary text-capitalize">
                ${data.artist.name}
                 </div>
               </div>
             </div>

             <div class="col-xl-3 text-secondary d-flex align-items-center pt-3">${data.tracks.data[i].rank}</div>
             <div class="col-xl-1 text-secondary d-flex align-items-center pt-3">${duration}</div>`
             
 rowTracks.innerHTML += track;
  }
}


window.onload = () => {
 getTrackList();
}