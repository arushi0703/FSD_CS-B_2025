// console.log("Hello World");
// const div=document.createElement('div');

// div[0].innerText="Hello World";
// div[0].style.color='brown';
// div[0].style.backgroundcolor='yellow';
// console.log(div);


// console.log("Hello World");
// const div=document.getElementsByTagName('div');

// div[0].innerText="ABES Engineering College";
// div[0].style.color='brown';
// div[0].style.backgroundColor='cyan';



const button = document.getElementById('btn');
console.log(button);
const loading = document.getElementById('disp');

function displayData() {
    loading.innerHTML = '<h2>Data ios loading...</h2>'

    //console.log("Hiii... inside displayData function");
    setTimeout(() => {
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        h2.innerText = "This is h2 tag";
        h2.style.backgroundColor = 'cadetblue';
        console.log(h2);
        div[0].appendChild(h2);


        img.src = 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg';
        img.setAttribute('height', 200);
        img.setAttribute('width', 200);
        console.log(img);
        div[0].appendChild(img);


    }, 2000);
    const div = document.getElementsByClassName('container');
    div[0].innerHTML = `<h1 style="color:green">Hi, I'm DOM</h1>`;
    div[0].style.backgroundColor = 'yellow';
    console.dir(div);

    loading.innerHTML = '';
}
button.addEventListener('click', displayData);

// https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg