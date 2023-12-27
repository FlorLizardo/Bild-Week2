const test = "https://striveschool-api.herokuapp.com/api/deezer/album/401346";

const getDisplayJb = () => {
  fetch(test)
    .then((response) => response.json())
    .then((data) => displayJumbotron(data))
    .catch((error) => console.error("Error:", error));
};

function displayJumbotron(data) {
  let containerJumbotron = document.getElementById("jumbotron");

  containerJumbotron.innerHTML = `
    <div class="row bg-jumbotron py-3 ps-5" >
      <div class="col-xl-2 d-flex align-items-center justify-content-end">
        <img
          src="${data.cover_medium}"
          width="170"
          height="170"
         
        />
      </div>
      <div class="col-xl-9">
        <div>
          <small>ALBUM</small>
          <a href="../../album.html?id=${data.id}" class="text-decoration-none"><h1 class="display-5 text-light fw-bold">${data.title}</h1></a>
          <a href="../../artista.html?id=${data.contributors[0].id}" class="text-decoration-none"><p class="h6 text-light">${data.artist.name}</p></a>
          <p class="h6">Ascolta il nuovo singolo di ${data.artist.name}</p>
        </div>

        <div class="my-3">
          <a
            href="#"
            class="btn-play text-black rounded-5 px-4 py-2 fw-bold text-decoration-none"
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
  "125887",
  "226383",
  "304170",
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
  let rowPlaylist = document.getElementById("cardOblunghe");

  let stampina = `
    <div class="col-xl-12 d-flex column-gap-2 my-1 bg-card-orizz p-0 playlistCol">
      <div class="p-0">
        <img src="${data.cover_medium}" 
            width="70"
            height="70"
            class="object-fit-cover"
        />
        </div>
      <div class="d-flex align-items-center">
      <a href="../../album.html?id=${data.id}" class="text-decoration-none"><p class="h6 text-light">${data.title}</p></a>
      </div>
    </div>`;
  rowPlaylist.innerHTML += stampina;
}

/*CARDS ALTINE */
const cardVerticali = [
  "15490684",
  "510894151",
  "1262014",
  "80119962",
  "109443",
  "275045842",
  "102819",
  "121794132",
  "7040437",
  "108564",
  "72819",
  "235076292",
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
  let cardAltine = document.getElementById("cardAltine");

  let stampina = `
   <div class="col-xl-2 h-100 my-2">
   <div class="card bg-card-verticali text-white">
   <a href="../../album.html?id=${data.id}" class="text-decoration-none"><img
       src="${data.cover_medium}"
       class="card-img-top object-fit-cover rounded-bottom mx-3 my-2 w-75"
       alt="Immagine Playlist 2"
     /></a>
     <div class="card-body pt-0">
     <a href="../../album.html?id=${data.id}" class="text-decoration-none"> <p class="card-text h6 text-light pb-1 text-truncate" style="font-size: 12px">
       ${data.title}
       </p></a>
       <a href="../../artista.html?id=${data.contributors[0].id}" class="text-decoration-none"><p class="card-text text-light" style="font-size: 10px">
       ${data.artist.name}
       </p></a>
     </div>
   </div>
 </div>`;
  cardAltine.innerHTML += stampina;
}

/*CARDS ARTISTI */
const cardArtisti = [
  "293585",
  "483",
  "14585",
  "3968561",
  "65682",
  "1182",
  "5695",
  "4331",
  "75491",
  "470538",
  "892",
  "75798",
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
  let cardCantanti = document.getElementById("cardArtisti");

  let stampina = `
  
  <div class="col-xl-2 my-1">
  <a href="../../artista.html?id=${data.id}" class="text-decoration-none">
   <div class="card bg-card-verticali text-white h-100">
    <img
       src="${data.picture_medium}"
       class="card-img-top object-fit-fill rounded-circle mx-3 my-2 w-75"
       alt="Immagine Playlist 2"
     />
    
    <div class="card-body pt-0">
      <p class="card-text text-light h6" style="font-size: 12px">
       ${data.name}
       </p>
       <p class="card-text text-light" style="font-size: 10px">
       Artista
       </p>
       
    </div>
   </div>
   </a>
 </div>
 `;
  cardCantanti.innerHTML += stampina;
}

window.onload = () => {
  getDisplayJb();
  fetchCardOrizzontali();
  fetchCardVerticali();
  fetchCardArtisti();
};
