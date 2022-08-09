My hero App:

Proyecto de SPA realizado en ReactJS donde el usuario puede buscar sus superheroes favoritos y agregarlos a un equipo de 6 integrantes (3 de orientación buena, 3 de orientación mala). Posee un display con los integrantes que el usuario comienza a agregar, mostrando cada stat individual, así como un acumulativo por equipo. También tiene la posibilidad de acceder a la información detallada de cada uno. El display calcula y expone el stat o habilidad que se destaca en el equipo (Ej: Fuerza, Rapidez, etc.)

Login:

Para acceder, es necesario ingresar con un mail y password válidos. En este caso estan predefinidos: Email--> alkemy@challenge.org / Pass: react
Si el usuario no se encuentra logeado, no podrá acceder a ninguna ruta provista por la app. 

Requerimientos:

El proyecto debe hacer correr el servidor dispuesto en la carpeta Backend, que funciona como proxy server, para sortear el problema CORS (Cross Origin Resource Sharing) puesto que el server posee un middleware especifico para ello. 

Para iniciar el servidor, el usuario debe ubicarse en la carpeta Backend y acceder a la consola. Desde allí, correr el comando --> npm run dev

Para acceder al sitio, ingresar en: https://cesarc87.github.io/Alkemy-Challenge-Heroes/home
