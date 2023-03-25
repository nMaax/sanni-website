# Sanni Website Update Guide

## Introduction

This guide is intended to help future developers make updates to the Sanni website. It includes information about the website's structure, content, and design, as well as instructions for making common updates.

## Website Structure

The Sanni website is built using the following technologies:

    HTML
    CSS
    JavaScript
    Bootstrap

The website consists of the following pages:

    Home
    About (Containing both history of the company and contat info)
    Catalgo
    Terms

Each page has its own HTML file located in the ```dist/``` directory.

The website's CSS files are located in the ```css/``` directory, and the JavaScript files are located in the ```js/``` directory.

## Content

The content for each page is located in its respective HTML file. To make updates to the content, simply edit the HTML file and save your changes.

The website's images are located in the ```assests/img/``` directory. To add a new image to the website, simply add the image file to the img/ directory and reference it in the HTML file using the appropriate img tag.

## Design

The website's design is controlled by the CSS files located in the ```css/``` directory. To make updates to the design, simply edit the appropriate CSS file and save your changes.

The website uses Bootstrap as its CSS framework. To learn more about how Bootstrap works, visit the official Bootstrap website.

## Common Updates

### Adding a New Product or Service

To add a new product, edit the ```dist/catalog.html``` file adding the following code in the appropriate section.

```html
<div class="col mb-5 product">
    <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="..." alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder product-name">Product Name</h5>
                <!-- Product price-->
                <p class="product-brand">Product Brand</p>
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer text-muted p-4 pt-0 border-top-0 bg-transparent">
            Product brief description
        </div>
    </div>
</div>
```

The catalog is divided in two sections, one for Agriculture and Enology products, the other for Gardening products. Here is an example on where to put a new Gardening product

```html
<div class="row" id="gardening-section-title">
    <h2 class="section-title fw-bold">Giardinaggio</h2>
    <hr class="section-line">
</div>
<div class="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-left" id="gardening-section">
    <div class="col mb-5 product">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder product-name">Spaccalegna Fenix 10</h5>
                    <!-- Product price-->
                    <p class="product-brand">Rosselli </p>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer text-muted p-4 pt-0 border-top-0 bg-transparent">
                Descrizione
            </div>
        </div>
    </div>

    <!-- Other products ... -->

    <!-- YOUR NEW PRODUCT HERE -->
    <div class="col mb-5 product">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="..." alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder product-name">New Product Name</h5>
                    <!-- Product price-->
                    <p class="product-brand">New Product Brand</p>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer text-muted p-4 pt-0 border-top-0 bg-transparent">
                New Product brief description
            </div>
        </div>
    </div>

    <!-- Other products... -->

</div>

```

The same goes for Agriculture and Enology product, in their appropriate section.

### Updating Contact Information

To update the contact information, edit the ```dist/about.html``` file and the ```terms.html``` file and make changes to the appropriate tags.

## Useful prompt for AI assistance (_in italian_)

Il seguente testo è da utilizzarsi come prompt di comportamento qual'ora si volesse apportare modifiche al sito con l'assistenza di un IA, quale ChatGPT, GPT-4, BingAI, Bard o simili.

### Prompt

```text
Da ora in poi sei un esperto in copywriting e scrittura efficace per il marketing per le PMI italiane, in particolare sei specializzato nella comunicazione per aziende del settore primario: agricoltura, enologia, giardinaggio e simili.

Il tuo compito è quello di assistere il sottoscritto, un webdeveloper, per conto di una azienda chiamata Sanni. Sanni vende, noleggia e fornisce assistenza e riparazione in macchine leggere e pesanti in Agricoltura, Enologia e Giardinaggio. 

Di seguito ti riporto alcuni dati che riguardano Sanni direttamente scritti da loro per darti un po' di dati. 

"
Il suo fondatore Sanni Dino, iniziò l’attività negli anni ’70 riparando attrezzatura agricola e vendendo motoseghe, motozappe e piccola attrezzatura. La sua passione per l’attrezzatura agricola lo porta ad espandere la tipologia dei prodotti venduti ed ad allargare lo spazio espositivo ed a spostarsi appena fuori paese in via Delle Regioni, nell’attuale sede. Da qui sono subentrati i suoi tre figli che tutt’oggi lavorano insieme per offrire la loro esperienza e competenza al servizio dei clienti. 
Nel tempo è diventata rivenditore ufficiale di svariati marchi tra i quali: 
FERRARI, PELLENC, CASTELGARDEN, STIGA, HUSQVARNA

L’azienda è dotata di un’ampia e attrezzata officina ed un magazzino ricambi per la riparazione delle attrezzature ed un servizio di assistenza anche a domicilio. Si occupa di vendita di macchine destinate all’agricoltura, attrezzi per la raccolta e la lavorazione del terreno, attrezzature per la cura del giardino, con le marche più prestigiose sia nel settore professionale che in quello dell’hobbista.
Sanni srl è dotata di un officina interna attrezzata per ogni tipo di intervento anche sul posto.
Effettua riparazioni e assistenza su : Macchinari, attrezzature agricole e da giardino, motoseghe, 
decespugliatori, raserba, ecc. garantendo un servizio post-vendita completo.

Consegne a domicilio

Preventivi gratuiti

Assistenza tecnica

Finanziamenti personalizzati

Sanni srl mette a disposizione della sua clientela un ampia gamma di attrezzature agricole e da giardino per soddisfare le esigenze di noleggio sia del professionista che del privato.
Le atterzzature possono essere ritirate direttamente dal cliente nella nostra sede o consegnate a domicilio con i nostri mezzi

Sanni srl è specializzata nel settore giardinaggio con un vasto assortimento di macchine e attrezzature delle migliori marche per il professionista e l' hobbista.
Forniamo inoltre l'assistenza in caso di guasto sempre rapidi grazie alla nostra officina attrezzata

Sanni srl si occupa della vendita di attrezzatura per l'enologia:
Serbatoi
Pompe
Contenitori inox per vino e olio
Bottiglie in vetro
Bag in box
Valvole, raccorderie e accessori in acciao inox
filtri cartone
tubi per travaso
"

Se hai capito tutto rispondi con "Si Massimiliano, vediamo di fare il miglior sito che Sanni potrebbe mai immaginare!"

```

## Conclusion

This guide should provide enough information to help future developers make updates to the Sanni website. If you have any questions or run into any issues, please refer to the documentation for the technologies used.
