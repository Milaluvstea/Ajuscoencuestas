// Crear el contenedor principal
const body = document.body;
body.style.margin = '0';
body.style.overflow = 'hidden';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.height = '100vh';
body.style.background = 'radial-gradient(circle, #0a0a3c, #020214)';
body.style.color = 'white';
body.style.fontFamily = 'Arial, sans-serif';
body.style.textAlign = 'center';
body.style.position = 'relative';

// Crear el contenedor del cuadro de código
const container = document.createElement('div');
container.style.zIndex = '10';
container.style.background = 'rgba(0, 0, 0, 0.6)';
container.style.padding = '20px';
container.style.borderRadius = '10px';
container.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.3)';
container.style.width = '80%';
container.style.maxWidth = '400px';
container.style.position = 'relative';
body.appendChild(container);

// Añadir título y descripción
const title = document.createElement('h1');
title.innerText = 'Bienvenido al proyecto final';
container.appendChild(title);

const description = document.createElement('p');
description.innerText = 'Por favor, ingrese el código dado por los representantes';
container.appendChild(description);

// Crear el campo de entrada y el botón
const input = document.createElement('input');
input.type = 'text';
input.id = 'codeInput';
input.placeholder = 'Ingrese código';
input.style.padding = '12px';
input.style.fontSize = '18px';
input.style.border = '2px solid #00aaff';
input.style.borderRadius = '5px';
input.style.textAlign = 'center';
input.style.background = '#222';
input.style.color = 'white';
input.style.outline = 'none';
input.style.width = '100%';
input.style.boxSizing = 'border-box';
container.appendChild(input);

const button = document.createElement('button');
button.innerText = 'Ingresar';
button.style.marginTop = '10px';
button.style.padding = '12px 25px';
button.style.fontSize = '18px';
button.style.background = 'transparent';
button.style.border = '2px solid #00aaff';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.transition = 'background 0.3s, transform 0.3s';
button.style.color = 'white';
button.style.fontWeight = 'bold';
button.style.boxShadow = '0 0 10px rgba(0, 170, 255, 0.5)';
button.style.width = '100%';
button.style.boxSizing = 'border-box';
button.onmouseover = () => {
    button.style.background = '#00aaff';
    button.style.transform = 'scale(1.1)';
};
button.onmouseout = () => {
    button.style.background = 'transparent';
    button.style.transform = 'scale(1)';
};
button.onclick = checkCode;
container.appendChild(button);

// Crear el contenedor de la imagen de fondo
const imageContainer = document.createElement('div');
imageContainer.style.position = 'absolute';
imageContainer.style.top = '50%';
imageContainer.style.left = '50%';
imageContainer.style.transform = 'translate(-50%, -50%)';
imageContainer.style.width = '100%';
imageContainer.style.height = '100%';
imageContainer.style.display = 'flex';
imageContainer.style.justifyContent = 'center';
imageContainer.style.mixBlendMode = 'multiply';
imageContainer.style.zIndex = '1';
body.appendChild(imageContainer);

const image = document.createElement('img');
image.src = 'https://scontent.fmex2-1.fna.fbcdn.net/v/t39.30808-6/481783985_666401382425276_1748038720067318412_n.jpg?stp=dst-jpg_p552x414_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGqLFyIqQR5frZmKxkYY1Xr1O0T1IeIwvvU7RPUh4jC-xw0viU8AjkdEEKa4TAxLGkASKfXAenbePj1Hl2-0w3y&_nc_ohc=e5G8ICIb1PEQ7kNvgHiWdcg&_nc_oc=AdhH7aqpkmAB85VQCHR4eUkbU9gTgiWkQ9BoDZyxOcAgguFxDlcE7ZDxNTFUywhJc9InAMtvqrwYz8ClsiHHAd_F&_nc_zt=23&_nc_ht=scontent.fmex2-1.fna&_nc_gid=AhuRbaaVmV0ieX9qsDywx1Q&oh=00_AYHYX6uK3Pwy2G7YJlUkKG3KJXo4qp3aYDOIK5ZdqsXLtA&oe=67D84FE6';
image.style.width = '100%';
image.style.height = 'auto';
image.style.mixBlendMode = 'multiply';
image.style.opacity = '100%';
imageContainer.appendChild(image);

// Crear el contenedor del fuego
const fireContainer = document.createElement('div');
fireContainer.style.position = 'absolute';
fireContainer.style.bottom = '10%';
fireContainer.style.left = '50%';
fireContainer.style.transform = 'translateX(-50%)';
fireContainer.style.width = '70px';
fireContainer.style.height = '100px';
fireContainer.style.zIndex = '5';
body.appendChild(fireContainer);

const fireImage = document.createElement('img');
fireImage.src = 'https://usagif.com/wp-content/uploads/gifs/fire-46.gif';
fireImage.style.width = '100%';
fireImage.style.height = '100%';
fireImage.style.mixBlendMode = 'multiply';
fireContainer.appendChild(fireImage);

// Crear estrellas y estrellas fugaces
function createStars(num) {
    for (let i = 0; i < num; i++) {
        let star = document.createElement('div');
        star.className = 'stars';
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'white';
        star.style.boxShadow = '0 0 5px white';
        star.style.animation = 'twinkle 3s infinite';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        body.appendChild(star);
    }
}

function createShootingStar() {
    let star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.position = 'absolute';
    star.style.width = '4px';
    star.style.height = '4px';
    star.style.background = 'yellow';
    star.style.animation = 'shoot 2s infinite linear';
    star.style.top = Math.random() * 50 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    body.appendChild(star);
    setTimeout(() => star.remove(), 2000);
}

createStars(100);
setInterval(createShootingStar, 3000);

// Añadir animaciones
const style = document.createElement('style');
style.innerHTML = `
    @keyframes twinkle {
        50% { opacity: 0.3; }
    }
    @keyframes shoot {
        0% { transform: translate(100vw, -10vh); opacity: 1; }
        100% { transform: translate(-50vw, 50vh); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Función para verificar el código
function checkCode() {
    const code = document.getElementById('codeInput').value;
    const links = {
        "1642": "https://youtu.be/PYQYAUBI8AY?si=amS14rAFp25jjP1W",
        "6359": "https://youtu.be/xMxt2NiXmgs?si=vs9RQVcKDZyRM-t5",
        "5487": "https://youtu.be/Vlb4E9m9S6w?si=wkDnGc47eEOvPcjQ",
        "9621": "https://youtu.be/UAV1dWyjaAU?si=diYAbHYldNhqh_He",
        "8745": "https://youtu.be/5JFfvAUOkGI?si=OQk8L4sCKlqg1otf",
        "7458": "https://youtu.be/xw6yLI-PPgM?si=ktKlhOagyZ1Frtnt"
    };

    if (links[code]) {
        window.location.href = links[code];
    } else {
        alert("Código incorrecto, inténtelo de nuevo.");
    }
}

function checkEnter(event) {
    if (event.key === "Enter") {
        checkCode();
    }
}

input.addEventListener('keydown', checkEnter);
