const test = "https://striveschool-api.herokuapp.com/api/deezer/album/62819462";

const getDisplayJb = () => {
  fetch(test)
    .then((response) => response.json())
    .then((data) => displayJumbotron(data))
    .catch((error) => console.error("Error:", error));
};

function displayJumbotron(data) {
  let containerJumbotron = document.getElementById("jumbotron");

  containerJumbotron.innerHTML = `
    <div class="row" >
      <div class="col-xl-3">
        <img
          src="${data.cover}"
          width="190"
          height="190"
          class="object-fit-cover ms-0 p-2"
        />
      </div>
      <div class="col-xl-9 px-3">
        <div>
          <p class="h6">ALBUM</p>
          <a href="../../album.html?id=${data.id}" class="text-decoration-none"><h1 class="display-4 text-light">${data.title}</h1></a>
          <a href="../../artista.html?id=${data.contributors[0].id}" class="text-decoration-none"><p class="h6 text-light">${data.artist.name}</p></a>
          <p class="h6">Ascolta il nuovo singolo di ${data.artist.name}</p>
        </div>

        <div class="my-3">
          <a
            href="#"
            class="bg-success text-black rounded-5 px-4 py-2 fw-bold text-decoration-none"
            >Play</a
          >
          <a
            href="#"
            class="border border-light text-light rounded-5 px-4 py-2 mx-3 fw-bold text-decoration-none"
            >Salva</a
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="20"
            fill="currentColor"
            class="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
            />
          </svg>
        </div>
      </div>
    </div>`;
}

/*CARDS LUNGHINE */
const cardOrizzontali = [
  "363906907",
  "510894151",
  "52845302",
  "317985097",
  "303572557",
  "211834222",
];

function fetchCardOrizzontali() {
  
    
  
  for (const playlistId of cardOrizzontali) {
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/album/${playlistId}`
    )
      .then((response) => response.json())
      .then((data) => cardPlaylist(data));
  }

}

function cardPlaylist(data) {
  let rowPlaylist = document.getElementById('cardOblunghe');
  
  let stampina =
   `
  <div class="col-xl-12 d-flex column-gap-2 my-1 bg-secondary p-0 playlistCol">
  <div class="p-0">
            <img
            src="${data.cover_small}"
            width="70"
            height="70"
            class="object-fit-cover"
            />
            </div>
            <div class="d-flex align-items-center">
            <p class="h6">${data.title}</p>
            </div>
            </div>`
;
            rowPlaylist.innerHTML += stampina;



  
};



/*CARDS ALTINE */
const cardVerticali = [
  "363906907",
  "510894151",
  "52845302",
  "317985097",
  "52845302",
  "52845302",
  "52845302",
  "317985097",
  "52845302",
  "52845302",
  "317985097",
  "52845302"
  
];


function fetchCardVerticali() {
  
    
  
  for (const playlistId of cardVerticali) {
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/album/${playlistId}`
    )
      .then((response) => response.json())
      .then((data) => stampaCardVerticali(data));
  }

}

function stampaCardVerticali(data) {
  let cardAltine = document.getElementById('cardAltine');
  
  let stampina =
   `
   <div class="col-xl-2">
   <div class="card bg-secondary text-white">
     <img
       src="${data.cover_medium}"
       class="card-img-top object-fit-cover rounded-bottom m-3"
       alt="Immagine Playlist 2"
       style="height: 110px; width: 110px"
     />
     <div class="card-body">
       <p class="card-text h6 text-light" style="font-size: 12px">
       ${data.title}
       </p>
       <p class="card-text text-light" style="font-size: 10px">
       ${data.artist.name}
       </p>
     </div>
   </div>
 </div>`
;
            cardAltine.innerHTML += stampina;



  
};






/*CARDS ARTISTI */
const cardArtisti = [
  "5695",
  "4331",
  "14585",
  "470538",
  "65682",
  "7219246",
  "5695",
  "4331",
  "14585",
  "470538",
  "65682",
  "7219246"
  
];


function fetchCardArtisti() {
  
    
  
  for (const artistId of cardArtisti) {
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`
    )
      .then((response) => response.json())
      .then((data) => stampaCardArtisti(data));
  }

}

function stampaCardArtisti(data) {
  let cardCantanti = document.getElementById('cardArtisti');
  
  let stampina =
   `
   <div class="col-xl-2">
   <div class="card bg-secondary text-white">
     <img
       src="${data.picture_medium}"
       class="card-img-top object-fit-cover rounded-circle m-3"
       alt="Immagine Playlist 2"
       style="height: 110px; width: 110px"
     />
     <div class="card-body">
     <p class="card-text text-light h6" style="font-size: 12px">
       ${data.name}
       </p>
       <p class="card-text text-light" style="font-size: 10px">
       Artista
       </p>
       
     </div>
   </div>
 </div>`
;
            cardCantanti.innerHTML += stampina;



  
};







window.onload = () => {
  getDisplayJb();
  fetchCardOrizzontali();
  fetchCardVerticali();
  fetchCardArtisti();
};
