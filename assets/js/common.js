const amici = [
	{
		img: "./assets/img/edoardo.jpg",
		nome: "Mercy",
		canzone: "In Camera",
		album: "Yumi",
		minuti: "8min",
	},
	{
		img: "./assets/img/florencia.jpg",
		nome: "Cleopatra",
		canzone: "Saggio Vibes",
		album: "Clap",
		minuti: "6min",
	},
	{
		img: "./assets/img/edoardo2.jpg",
		nome: "Orione",
		canzone: "Revenge",
		album: "album 2021",
		minuti: "1min",
	},
	{
		img: "./assets/img/thomas1.jpg",
		nome: "Isara",
		canzone: "In Camera",
		album: "Yumi",
		minuti: "9min",
	},
	{
		img: "./assets/img/thomas2.jpg",
		nome: "Martino",
		canzone: "Revenge",
		album: "album 2021",
		minuti: "2min",
	},
];

function popolaAmici() {
	amici.forEach((amici) => {
		let row = document.createElement("div");
		row.classList.add("row", "ps-2");
		// row.style.lineHeight = ".3";

		let col1 = document.createElement("div");
		col1.classList.add("col-xl-3", "p-0", "my-2", "ps-2");
		let avatarAmico = document.createElement("img");
		avatarAmico.classList.add("object-fit-cover", "rounded-circle");
		avatarAmico.style.height = "2.7rem";
		avatarAmico.style.width = "2.7rem";
		avatarAmico.src = amici.img;

		let col2 = document.createElement("div");
		col2.classList.add("col-xl-6", "my-3", "amici");
		let nomeAmico = document.createElement("p");
		nomeAmico.classList.add("text-secondary");
		nomeAmico.innerText = amici.nome;
		let canzone = document.createElement("p");
		canzone.classList.add("text-secondary", "font-p", "mb-2");
		canzone.innerText = amici.canzone;
		let cd = document.createElement("div");
		cd.classList.add("d-flex", "gap-1", "font-p");
		cd.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="gray" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
		<path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"/>
		<path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z"/>
		<path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"/>
	</svg> 
		<p class="text-secondary pt-1">${amici.album}</p>
	`;

		let col3 = document.createElement("div");
		col3.classList.add("col-xl-3", "pt-3");
		let minuti = document.createElement("p");
		minuti.classList.add("text-secondary");
		minuti.style.fontSize = "10px";
		minuti.innerText = amici.minuti;

		col1.appendChild(avatarAmico);
		col2.appendChild(nomeAmico);
		col2.appendChild(canzone);
		col2.appendChild(cd);
		col3.appendChild(minuti);

		row.appendChild(col1);
		row.appendChild(col2);
		row.appendChild(col3);

		let colAmici = document.getElementById("amici");

		colAmici.appendChild(row);
	});
}

popolaAmici();

//Sezione Playlist Colonna sx
const playlist = [
	"Micini Tattici Nucleari",
	"Gimme! Gimme! Gimme! (A Ham After Midnight)",
	"Gittame Mucho",
	"Panic! at the Discord",
	"Piripiripi",
	"Il Pippo, il Pluto e il Paperino",
	"Console Horror Vol.3",
	"z-index 999 ",
	"Debug Life",
	"Micini Tattici Nucleari",
	"Gimme! Gimme! Gimme! (A Ham After Midnight)",
	"Gittame Mucho",
	"Panic! at the Discord",
	"Piripiripi",
	"Il Pippo, il Pluto e il Paperino",
	"Console Horror Vol.3",
	"z-index 999 ",
	"Debug Life",
	"Micini Tattici Nucleari",
	"Gimme! Gimme! Gimme! (A Ham After Midnight)",
	"Gittame Mucho",
	"Panic! at the Discord",
	"Piripiripi",
	"Il Pippo, il Pluto e il Paperino",
	"Console Horror Vol.3",
	"z-index 999 ",
	"Debug Life",
	"Micini Tattici Nucleari",
	"Gimme! Gimme! Gimme! (A Ham After Midnight)",
	"Gittame Mucho",
	"Panic! at the Discord",
	"Piripiripi",
	"Il Pippo, il Pluto e il Paperino",
	"Console Horror Vol.3",
	"z-index 999 ",
	"Debug Life",
];

function creaPlaylist() {
	let rowPlaylist = document.getElementById("playlist");
	let ul = document.createElement("ul");

	playlist.forEach((element) => {
		let anchor = document.createElement("a");
		anchor.href = "#";
		anchor.style.textDecoration = "none";
		anchor.classList.add("text-secondary", "font-size-list");
		let li = document.createElement("li");
		li.classList.add("list-group-item");
		anchor.innerHTML = element;
		li.appendChild(anchor);
		ul.appendChild(li);
		rowPlaylist.appendChild(ul);
	});
}

const test = "https://striveschool-api.herokuapp.com/api/deezer/album/6899610";

const getPlayer = () => {
	fetch(test)
		.then((response) => response.json())
		.then((data) => playerDefault(data))
		.catch((error) => console.error("Error:", error));
};

function playerDefault(data) {
	let imgPlayer = document.getElementById("imgPlayer");
	let songPlayer = document.getElementById("songPlayer");
	let coverMedium = data.cover_medium;
	let artistName = data.artist.name;
	let song = data.tracks.data[0].title;

	imgPlayer.innerHTML = `
		<img
		src="${coverMedium}"
		width="55"
		height="55"
		class="object-fit-cover"
	/>
		`;

	songPlayer.innerHTML = `
		<p class="h6 p-0 m-0 text-truncate">${song}</p>
		<p class="text-truncate font-size-list">${artistName}</p>
		`;

		playSong(data)
}

//play alle canzoni


function playSong(data) {
	let play = document.getElementById('play-btn');
	let audioPlayer = document.getElementById('audioPlayer');
	let preview = data.tracks.data[0].preview;
	
	audioPlayer.setAttribute('src', `${preview}`);

	play.addEventListener('click', function() {
		
		if(audioPlayer.paused) {
			audioPlayer.play();
			// move();
		}else {
			audioPlayer.pause();
			// stopMove();
		}
	})
	
}



//like al player
function like() {
	let path = document.querySelector('#iconHeart path');
	let currentColor = path.getAttribute('fill');
	if(currentColor === 'green') {
		path.setAttribute('fill', 'transparent');
		path.setAttribute('stroke', 'white');
	}else {
		path.setAttribute('fill', 'green');
		path.setAttribute('stroke', 'green');
	}
}

function goBack() {
	window.history.back()
  }
  function goForward() {
	window.history.back()
  }


document.addEventListener("DOMContentLoaded", function () {
	getPlayer();
	creaPlaylist();
});
