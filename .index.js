<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto Final</title>
    <style>
        body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: url('https://images.unsplash.com/photo-1518606372020-1b1c1c1c1c1c') no-repeat center center fixed;
            background-size: cover;
            overflow: hidden;
            position: relative;
        }

        .stars {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            overflow: hidden;
        }

        .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle 1.5s infinite;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }

        .container {
            position: relative;
            z-index: 1;
            background: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            text-align: center;
        }

        input {
            padding: 10px;
            border: 2px solid #333;
            border-radius: 5px;
            width: 80%;
            margin: 10px 0;
        }

        button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: #333;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #555;
        }

        .cabin {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 150px;
            background: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0') no-repeat center center;
            background-size: cover;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }
    </style>
</head>
<body>
    <div class="stars"></div>
    <div class="container">
        <h1>Bienvenido al proyecto final</h1>
        <p>Por favor, ingrese el código dado por los representantes:</p>
        <input type="text" id="codeInput" placeholder="Ingrese el código aquí">
        <button onclick="checkCode()">Enviar</button>
    </div>
    <div class="cabin"></div>

    <script>
        const codes = {
            '1642': 'https://enlace1.com',
            '6359': 'https://enlace2.com',
            '5487': 'https://enlace3.com',
            '9621': 'https://enlace4.com',
            '8745': 'https://enlace5.com',
            '7458': 'https://enlace6.com'
        };

        function checkCode() {
            const input = document.getElementById('codeInput').value;
            const url = codes[input];
            if (url) {
                window.location.href = url;
            } else {
                alert('Código incorrecto. Inténtalo de nuevo.');
            }
        }

        // Generar estrellas
        function createStars() {
            const starsContainer = document.querySelector('.stars');
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                const size = Math.random() * 3 + 1; // Tamaño aleatorio
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.top = `${Math.random() * 100}vh`;
                star.style.left = `${Math.random() * 100}vw`;
                star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duración aleatoria
                starsContainer.appendChild(star);
            }
        }

        createStars();
    </script>
</body>
</html>
