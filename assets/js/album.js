// // fetch jumbotron singola canzone
// const myUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/62819462";

// const getJb = () => {
//   fetch(myUrl)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//       getALbum(data)
//       getTracksAlbum(data)
//     })
//     .catch((error) => console.error("Error:", error));
// };

const params = new URLSearchParams(location.search)
const id = params.get('id');

// const getALbum = (data) => {
//   const rowAlbum = document.getElementById('albumtron');

//   let album = 
//   `<div class="col-xl-3">
//   <img
//     src="${data.cover}"
//     width="190"
//     height="190"
//     class="object-fit-cover ms-0 p-2"
//   />
// </div>
// <div class="col-xl-9 px-3">
//   <div>
//     <p class="h6">ALBUM</p>
//     <h1 class="display-4">${data.title}</h1>
//     <p class="h6">
//     <img src="${data.contributors[0].picture_small}" width="30px" height="30px" class="rounded-circle"> ${data.artist.name} - ${data.release_date} - ${data.nb_tracks} brani -
//       ${data.duration}
//     </p>
//   </div>
// </div>` 
//   rowAlbum.innerHTML = album;
// }

// const getTracksAlbum = (data) => {

//    for(let i = 0; i <= data.tracks.data.length; i++) {
//     const rowTracks = document.getElementById('tracklist');
//     let track = 
//     `<div class="col-xl-1 text-secondary d-flex justify-content-end align-items-center">
//                ${data.nb_tracks}
//               </div>
//               <div class="col-xl-7">
//                 <div class="row">
//                   <div class="col-12 h6 text-light text-capitalize">${data.tracks.data[i].title}</div>               
//                   <div class="col h6 text-secondary text-capitalize">${data.artist.name}</div>
//                 </div>
//               </div>

//               <div class="col-xl-3 text-secondary d-flex align-items-center">${data.tracks.data[i].rank}</div>
//               <div class="col-xl-1 text-secondary d-flex align-items-center">${data.tracks.data[i].duration}</div>`
// //   `<div>
// //   <p>${data.tracks.data[i].title}</p>
// //   <small>${data.artist.name}</small>
// //   <small>${data.tracks.data[i].rank}</small>
// //   <small>${data.tracks.data[i].duration}</small>
// // </div>`
 
//   rowTracks.innerHTML = track;
//    }
// }


//fetch tracklist album dinamica  dalla homepage

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
 const rowAlbum = document.getElementById('albumtron');

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
//  let duration = (hour === 0) ? `${minutes} min ${seconds} sec.` : `${hour} ore ${minutes} min ${seconds} sec`;

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
   <img src="${data.artist.picture}" width="30px" height="30px" class="rounded-circle"> ${data.artist.name} - ${data.release_date} - ${data.nb_tracks} brani -
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

// var indice = miArreglo.indexOf(elementoBuscado);
   //const nbTrack = 1;
   
   const rowTracks = document.getElementById('tracklist');
   let track = 
   `<div class="col-xl-1 text-secondary d-flex justify-content-end align-items-center">
              ${index}
             </div>
             <div class="col-xl-7">
               <div class="row">
                 <div class="col-12 h6 text-light text-capitalize">${data.tracks.data[i].title}</div>               
                 <div class="col h6 text-secondary text-capitalize">${data.artist.name}</div>
               </div>
             </div>

             <div class="col-xl-3 text-secondary d-flex align-items-center">${data.tracks.data[i].rank}</div>
             <div class="col-xl-1 text-secondary d-flex align-items-center">${duration}</div>`

 
 rowTracks.innerHTML += track;
  }
}




window.onload = () => {
 //getJb();
 getTrackList();
}