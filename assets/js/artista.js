//function di prova
async function artistiProva() {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/5695/");
  const artist = await response.json();
  // console.log(artist);

  const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/5695/top?limit=50");
  const artTrackList = await resp.json();
  
  

   jbArtist(artist, artTrackList);
  prova(artTrackList);
  
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


function createTopFive(ordine, tracklist) {
  let topFive = [];
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

  popolari.innerHTML += `
  <div class="col-xl-1">1</div>
                  <div class="col-4">
                    <img
                      src="assets/img/photo_2023-12-14_09-32-24.jpg"
                      alt=""
                      width="40px"
                      height="40px"
                    />
                    <a href="" class="text-decoration-none text-light"
                      ></a
                    >
                  </div>

                  <div class="col-3">
                    <p>276.576</p>
                  </div>
                  <div class="col-4">
                    <p>3:17</p>
                  </div> `

 }  


//  topFive.forEach(element => {
  
//  });

window.onload = () => {
  artistiProva();
  stampaTopFive();


}





