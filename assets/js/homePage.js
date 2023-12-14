

const amici = [

    {
        img: './assets/img/edoardo.jpg',
        nome: 'Mercy',
        canzone: 'test test',
        minuti: '8min',
    },
    {
        img: './assets/img/florencia.jpg',
        nome: 'Cleopatra',
        canzone: 'test test',
        minuti: '6min',
    },
    {
        img: './assets/img/edoardo2.jpg',
        nome: 'Orione',
        canzone: 'test test',
        minuti: '1min',
    },
    {
        img: './assets/img/thomas1.jpg',
        nome: 'Isara',
        canzone: 'test test',
        minuti: '9min',
    },
    {
        img: './assets/img/thomas2.jpg',
        nome: 'Martino',
        canzone: 'test test',
        minuti: '2min',
    },
   



]

console.log(amici);


    
function popolaAmici() {
amici.forEach(amici => {


    let row = document.createElement('div');
    row.classList.add('row');

    let col1 = document.createElement('div');
    col1.classList.add('col-xl-3');
    let avatarAmico = document.createElement('img');
    avatarAmico.classList.add('object-fit-cover', 'rounded-circle');
    avatarAmico.style.height = '40px';
    avatarAmico.style.width = '40px';
    avatarAmico.src = amici.img;


    
    let col2 = document.createElement('div');
    col2.classList.add('col-xl-6');
    let nomeAmico = document.createElement('p');
    nomeAmico.innerText = amici.nome;
    let canzone = document.createElement('p');
    canzone.classList.add('small')
    canzone.innerText = amici.canzone;



    
    let col3 = document.createElement('div');
    col3.classList.add('col-xl-3');
    let minuti = document.createElement('p');
    minuti.classList.add('small');
    minuti.innerText = amici.minuti;

    
    col1.appendChild(avatarAmico);
    col2.appendChild(nomeAmico);
    col2.appendChild(canzone);
    col3.appendChild(minuti);

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);




    let colAmici = document.getElementById('amici');

    colAmici.appendChild(row);
    




});
}


popolaAmici();

`<div class="row">
<div class="col-xl-2" id="avatarAmico">gfrt</div>
<div class="col-xl-8" id="nomeAmico">gfrtwdfgdhjyhjiottyuigdtv</div>
<div class="col-xl-2" id="orarioAmico">gfrt</div>
</div>`


