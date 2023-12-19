const params = new URLSearchParams(location.search)
const id = params.get('id');

const secondUrl = "https://striveschool-api.herokuapp.com/api/deezer/artist/";


// const getTrackList = () => {
//  fetch(secondUrl + id)
//    .then((response) => response.json())
//    .then((data) => {
//        console.log(data)
//      tracklist(data)
//      getSong(data)
//    })
//    .catch((error) => console.error("Error:", error));
// };



//function di prova
async function artistiProva() {
  const response = await fetch(secondUrl + id);
  const artist = await response.json();
  // console.log(artist);

  const resp = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=50`);
  const artTrackList = await resp.json();
  
  

   jbArtist(artist, artTrackList);
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
      
      ordine = array.sort();
      
  }
  createTopFive(ordine, tracklist);
}

const topFive = [];
console.log(topFive);
function createTopFive(ordine, tracklist) {
  
  for(let i = 0; i < 5; i++) {
    for(let j = 0; j < ordine.length; j++) {
      if(ordine[i] === tracklist.data[j].rank) {
        topFive.push(tracklist.data[j]);
      }
    }
  }

  return topFive;
}


//funzione header OK!!!!!!
function jbArtist(artist, artTrackList) {
  const header = document.getElementById('artistPage');
const favoriti = document.getElementById('favoriti');
 
  header.innerHTML = `
  <div class="row">
  <div class="jumbotron jumbotron-fluid">
    <div class="container" id="jumbotron">
      <div class="mt-5 pt-5">
        <small>Artista verificato</small>
        <h1 class="display-1 fw-bold mb-4">${artist.name}</h1>
        <small>${artist.nb_fan} ascoltatori mensili</small>
      </div>
    </div>
  </div>
</div>



  
  `

  favoriti.innerHTML = `
  <div class="row">
  <h3>Brani che ti piacciono</h3>
  <div class="col-12 d-flex">
    <div>
      <img src="assets/img/edoardo.jpg" alt="" width="50" height="50" class="rounded-circle">
    </div>
    <div>
      <h6>Hai messo Mi piace a 11 brani</h6>
    <small>Di </small>
    </div>
    
  </div>
</div>
  `
  
  }




 //funzione stampa top5

 function stampaTopFive() {
  const popolari = document.getElementById('popolari');

  for (let i = 0; i <= topFive.length; i++) {
  console.log(topFive);

  //minuti
  const totalSeconds = topFive[i].duration;
  let minutes = Math.floor( totalSeconds / 60);
  let seconds = totalSeconds % 60;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  let duration = `${minutes}:${seconds}`

  //numero track
  let arrayIndex = topFive;
  let indiceTrack = topFive[i];
  let index = arrayIndex.indexOf(indiceTrack) + 1;

    popolari.innerHTML += `
  <div class="col-xl-1">${index}</div>
                  <div class="col-4 text-truncate" >
                    <img
                      src="${topFive[i].album.cover_medium}"
                      alt=""
                      width="40px"
                      height="40px"
                    />
                    <a href="" class="text-decoration-none text-light "
                      >${topFive[i].title}</a
                    >
                  </div>

                  <div class="col-3">
                    <p>${topFive[i].rank}</p>
                  </div>
                  <div class="col-4">
                    <p>${duration}</p>
                  </div> 
                  `

  
  };
}


//stampa card album

// function stampaAlbum() {
//   let album = document.getElementById('album');


// }




window.onload = () => {
  artistiProva();
  


}





