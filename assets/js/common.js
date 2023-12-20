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
		row.classList.add("row", "ms-2");
		row.style.lineHeight = "8px";

		let col1 = document.createElement("div");
		col1.classList.add("col-xl-3", "ps-0");
		let avatarAmico = document.createElement("img");
		avatarAmico.classList.add("object-fit-cover", "rounded-circle");
		avatarAmico.style.height = "50px";
		avatarAmico.style.width = "50px";
		avatarAmico.src = amici.img;

		let col2 = document.createElement("div");
		col2.classList.add("col-xl-6", "my-3");
		let nomeAmico = document.createElement("p");
        nomeAmico.classList.add('text-secondary')
		nomeAmico.innerText = amici.nome;
		let canzone = document.createElement("p");
		canzone.style.fontSize = "12px";
        canzone.classList.add('text-secondary')
		canzone.innerText = amici.canzone;
		let cd = document.createElement("p");
		cd.style.fontSize = "12px";
        cd.classList.add('text-secondary')
		cd.innerText = amici.album;

		let col3 = document.createElement("div");
		col3.classList.add("col-xl-3", "pt-3");
		let minuti = document.createElement("p");
        minuti.classList.add('text-secondary')
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
	"sdzfòkjn",
	"sadfdjf",
	"ssdlfdxjglòflgfg",
	"pl1",
	"pl1",
	"sdzfòkjn",
	"sadfdjf",
	"ssdlfdxjglòflgfg",
	"pl1",
	"sdzfòkjn",
	"sadfdjf",
	"ssdlfdxjglòflgfg",
	"pl1",
	"sdzfòkjn",
	"sadfdjf",
	"ssdlfdxjglòflgfg",
	"pl1",
	"sdzfòkjn",
	"sadfdjf",
	"ssdlfdxjglòflgfg",
	"pl1",
	"sdzfòkjn",
	"sadfdjf",
	"ssdlfdxjglòflgfg",
	"pl1",
	"sdzfòkjn",
	"sadfdjf",
	"ssdlfdxjglòflgfg",
	"pl1",
	"sdzfòkjn",
	"sadfdjf",
	"ssdlfdxjglòflgfg",
	"pl1",
	"sdzfòkjn",
	"sadfdjf",
	"ssdlfdxjglòflgfg",
	"pl1",
	"sdzfòkjn",
	"sadfdjf",
	"ssdlfdxjglòflgfg",
	"pl1",
	"sdzfòkjn",
	"sadfdjf",
	"ssdlfdxjglòflgfg",
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

creaPlaylist();
