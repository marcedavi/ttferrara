const axios = require('axios').default;
import './simple-lightbox.min.js';

import Swiper, {Navigation, Pagination, Autoplay} from './swiper-bundle.min.js';

Swiper.use([Navigation, Pagination, Autoplay]);

window.addEventListener('load', function () {
    let lightbox = new SimpleLightbox('#gallery a');

    // Menu
    document.getElementById('primary-menu-toggle').addEventListener('click', function () {
        document.getElementById('main-menu').classList.toggle('max-h-0');
        document.getElementById('main-menu').classList.toggle('max-h-96');
    });

    // Carousel
    let swiper = new Swiper(".swiper", {
        loop: true,
        speed: 700,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Next Matches Table
    axios.get("http://213.136.73.71:3000/next-matches")
        .then(function (response) {
            console.log(response.data)
            let nextMatches = response.data

            let tbody = document.querySelector("#next-matches-table > tbody")

            for (let i = 0; i < nextMatches.length; i++) {
                let nextMatch = nextMatches[i]["nextMatch"]

                let newRow = tbody.insertRow();
                
                // Serie
                newRow.insertCell().appendChild(document.createTextNode(nextMatches[i]['league']));

                // Home Squad
                if(nextMatch["homeSquad"] === nextMatches[i]["name"]) {
                    let span = document.createElement('span')
                    span.classList.add('font-medium')
                    span.appendChild(document.createTextNode(nextMatches[i]['displayName']))
                    newRow.insertCell().appendChild(
                        span
                    )
                } else {
                    newRow.insertCell().appendChild(document.createTextNode(nextMatch["homeSquad"]))
                }

                // Guest Squad
                if(nextMatch["guestSquad"] === nextMatches[i]["name"]) {
                    let span = document.createElement('span')
                    span.classList.add('font-medium')
                    span.appendChild(document.createTextNode(nextMatches[i]['displayName']))
                    newRow.insertCell().appendChild(
                        span
                    )
                } else {
                    newRow.insertCell().appendChild(document.createTextNode(nextMatch["guestSquad"]))
                }

                // Date Time
                newRow.insertCell().appendChild(document.createTextNode(nextMatch["date"] + " - " + nextMatch["time"]))
            }
        })
});