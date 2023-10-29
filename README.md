SPRINT # 1 Digital Pleasure Es una tienda para adultos donde se ofrecen productos sexuales, nuestro publico son personas mayores de 18 años.

Integrantes:. 
1.Santiago Castillo
 2.Matias Kiesel (Tengo 24 años y me gusta el Tenis) 
 3.Manuel Villalva (Tomo 1 mate cada 20 minutos y si el proyecto va bien me armaré el Sexshop al costado de la peluqueria) 
 4.Kathrin llias Solano 
 5.Melisa Bernal(tengo 30 años, soy de colombia, actualmente soy auxiliar administrativa y me gustaria cambiar mi futuro con la programacion)

Fuentes: https://www.buttman.com.ar/?gclid=EAIaIQobChMI7IOYkZbI_wIVzTrUAR04vQkuEAMYASAAEgLvg_D_BwE (Estetica visual) 
https://eshop.sexshopargentino.com.ar/?gclid=EAIaIQobChMI2La40JXI_wIVtDfUAR2cNAwuEAAYASAAEgLai_D_BwE (Pagina con mejor Estructura y Mejor Exhibidor de productos) 
https://www.intimelovestore.com.ar/ (Pagina con mejor LogIn / Registro y carrito) 
https://tsmayorista.com.ar/ (mejor exhibidor de productos en el Index) 
https://tiendacereza.com/collections/vendors?q=guiacereza&utm_source=googleads&utm_medium=cpc&utm_id=dinamicos&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH3MNNSjfEnbPGnftcoenCfM5xiV76WpMUb1tK6l9ku6wON0gCLQbdMaAmFgEALw_wcB https://sexosentido.co/

TABLERO TRELLO.
https://trello.com/b/QBcFSCed/


## - Docker Integration
This project has Docker support, to be able to run *digital-pleasures* using this runtime, run the following commands on
the terminal:

```sh
$ docker build . --tag selik:main
$ docker run --rm -p 3000:3000 selik:main
```

Then enter the main site by curling `localhost:3000` or using your browser.

### - Running it with Docker Compose
Docker Compose makes things easier by orchestrating the docker containers defined in `docker-compose.yml` in such a way
that running a command is going to *build* and *run* the entire project, all you have to do is run the following command
in your shell:

```sh
$ docker-compose up
```

Enjoy!
