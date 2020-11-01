'use strict';
const body = document.querySelector('body');
const nappi = document.querySelector('#hakunappi');
const haku = document.querySelector('#hakuteksti');


nappi.addEventListener('click', hae);

function hae() {
    const hakut = 'https://api.tvmaze.com/search/shows?q=' + haku.value;

    console.log(hakut);
    fetch(hakut)
        .then(function (vastaus) {
            return vastaus.json();
        }).then(function (json) {
        naytaTeksti(json);
    }).catch(function (error) {
        console.log(error);
    });
}

function naytaTeksti(teksti) {
    teksti.forEach(testi => {
        const nimi = testi.show.name;
        let link;
        if (testi.show.officialSite === null) {
            link = 'No official site';
        } else {
            link = (testi.show.officialSite);
        }
        let kuva;
        if (testi.show.image === null) {
            kuva = 'https://via.placeholder.com/210x295?text=No+image';
        } else {
            kuva = (testi.show.image.medium);
        }
        const yht = testi.show.summary;
        const genre = testi.show.genres;
        document.write('<link href="style.css" rel="stylesheet">');
        document.write('<ul>');
        document.write('<h3>');
        document.write(nimi);
        document.write('</h3>');
        document.write('<p>');
        document.write('<a href='+link+'>'+link+'</a>');
        document.write('</p>');
        document.write('<img src='+kuva+'>');
        document.write('<p>');
        document.write(genre);
        document.write(yht);
        document.write('</ul>');
    });

}