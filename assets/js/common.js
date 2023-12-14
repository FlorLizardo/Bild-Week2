

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




const playlist = [

'Micini Tattici Nucleari',
'Merry Meowy Christmas',
'Gittame Mucho',
'Panic! at the GitHub',
'Piripiripi',
'Pippo, Pluto e Paperino - Remastered',
'Console Horror Vol.3',
'z-index 999',
'Bug Life',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg',
'pl1',
'sdzfòkjn',
'sadfdjf',
'ssdlfdxjglòflgfg'

]



function creaPlaylist () {


    let rowPlaylist = document.getElementById('playlist');
    let ul = document.createElement('ul');
    

    playlist.forEach(element => {
        let anchor = document.createElement('a');
        anchor.href= "#";
        anchor.style.textDecoration = 'none';
        anchor.classList.add('text-light');
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'smaller', 'fw-light');
        anchor.innerHTML= element;
        li.appendChild(anchor);
        ul.appendChild(li);
        rowPlaylist.appendChild(ul);

    });
    console.log(playlist);
}


creaPlaylist();

/*
<ul>
    <li><a href="">òkfdkjgn</a></li>
</ul>*/