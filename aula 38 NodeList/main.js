const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);


for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody; // altera a cor de fundo no css
    p.style.color = '#FFFFFF'; // altera a cor da letra no css
}