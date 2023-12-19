//function di prova
async function artistiProva() {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/5695/");
  const artist = await response.json();
  // console.log(artist);

  const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/5695/top?limit=50");
  const artTrackList = await resp.json();
  
  console.log(artTrackList.data[0].rank);

  // jbArtist(artist, artTrackList);
  prova(artTrackList);
  
}



//funzione numero tracks
function prova(tracklist) {
  
  let array = [];
  let ordine = [];
  for (let i = 0; i < tracklist.data.length; i++) {
    let tracks = tracklist.data[i].rank;
    array.push(tracks);
      console.log(array);
      ordine = array.sort();
      console.log(ordine);
  }
  createTopFive(ordine, tracklist);
}


function createTopFive(ordine, tracklist) {
  let topFive = [];
  for(let i = 0; i < 5; i++) {
    for(let j = 0; j < ordine.length; j++) {
      if(ordine[i] === tracklist.data[j].rank) {
        topFive.push(tracklist.data[j]);
      }
    }
  }

  // return topFive;
}



//funzione jumbotron
// function jbArtist(artist, artTrackList) {
//   const header = document.getElementById('artistPage');
 

//   header.innerHTML = `
//   <div class="row">
//   <div class="jumbotron jumbotron-fluid">
//     <div class="container" id="jumbotron">
//       <div class="mt-5 pt-5">
//         <small>Artista verificato</small>
//         <h1 class="display-1 fw-bold mb-4">${artist.name}</h1>
//         <small>${artist.nb_fan} ascoltatori mensili</small>
//       </div>
//     </div>
//   </div>
// </div>

// <div class="row">
//   <div class="col-12 d-inline mt-5 ms-3">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="50"
//       height="50"
//       fill="#1ED760"
//       class="bi bi-play-circle-fill"
//       viewBox="0 0 16 16"
//     >
//       <path
//         d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"
//       />
//     </svg>
//     <button class="btn btn-outline-light mx-3">FOLLOWING</button>

//     <a href="#">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="25"
//         height="25"
//         fill="currentColor"
//         class="bi bi-three-dots"
//         viewBox="0 0 16 16"
//       >
//         <path
//           d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
//         />
//       </svg>
//     </a>
//   </div>

//   <div class="col-xl-8">
//     <h3 class="mt-4 ms-3">Popolari</h3>
//     <div class="row d-flex pt-2">
//       <div class="col-xl-1">1</div>
//       <div class="col-4">
//             <img src="${artist.}" alt="" width="40px" height="40px"/>
//             <a href="" class="text-decoration-none text-light"></a>									
//       </div>

//       <div class="col-3">
//         <p>276.576</p>
//       </div>
//       <div class="col-4">
//         <p>3:17</p>
//       </div>
//     </div>

//   </div>

//   <div class="col-xl-4">
//     <div class="row">
//       <h3>Brani che ti piacciono</h3>
//       <div class="col-12 d-flex">
//         <div>
//           <img src="assets/img/edoardo.jpg" alt="" width="50" height="50" class="rounded-circle">
//         </div>
//         <div>
//           <h6>Hai messo Mi piace a 11 brani</h6>
//         <small>Di </small>
//         </div>
        
//       </div>
//     </div>
//   </div>
// </div>
//   `
  
// }


window.onload = () => {
  artistiProva();
}