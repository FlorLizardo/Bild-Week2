function displayJumbotron() {
	let containerJumbotron = document.getElementById("jumbotron");

	containerJumbotron.innerHTML = `
    <div class="row" >
      <div class="col-xl-3">
        <img
          src="./assets/img/photo_2023-12-14_09-32-24.jpg"
          width="190"
          height="190"
          class="object-fit-cover ms-0 p-2"
        />
      </div>
      <div class="col-xl-9 px-3">
        <div>
          <p class="h6">ALBUM</p>
          <h1 class="display-4">Titolo Canzone</h1>
          <p class="h6">Nome artista</p>
          <p class="h6">Ascolta il nuovo singolo di (nome artista)</p>
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

displayJumbotron();
