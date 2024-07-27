document.addEventListener('DOMContentLoaded', function () {
    const genreLinks = document.querySelectorAll('.nav-item.dropdown .dropdown-item');
    const movieCards = document.querySelectorAll('[data-genre]');
    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('suggestions');
    const searchButton = document.querySelector('.d-flex button');


    const movieNames = [
        "Touch",
        "Despicable Me 4",
        "The Garfield Movie",
        "A Quiet Place: Day One",
        "Longlegs",
        "Twisters",
        "Deadpool And Wolverine",
        "Alien: Romulus",
        "Inside Out 2",
        "Civil War",
        "Kalki 2898 AD",
        "Hijack 1971",
        "Kill",
        "Escape",
        "Project Silence"
    ];

    const movieLinks = {
         "Touch": "http://localhost:52330/touch.html",
         "Despicable Me 4": "http://localhost:52330/phase2.html",
         "The Garfield Movie": "http://localhost:52330/garfeild.html",
         "A Quiet Place: Day One": "http://localhost:52330/A_quite_place_dayone.html",
         "Longlegs": "http://localhost:52330/longlegs.html",
         "Twisters": "http://localhost:52330/twisters.html",
         "Deadpool And Wolverine": "http://localhost:52330/Deadpool3.html",
         "Alien: Romulus": "http://localhost:52330/Alien_%20Romulus.html",
         "Inside Out 2": "http://localhost:52330/InsideOut2.html",
         "Civil War": "http://localhost:52330/civilwar.html",
         "Kalki 2898 AD": "http://localhost:52330/Kalki2898AD.html",
         "Hijack 1971": "http://localhost:52330/hijack1971.html",
         "Kill": "http://localhost:52330/kill.html",
         "Escape": "http://localhost:52330/escape.html",
         "Project Silence": "http://localhost:52330/projectsilence.html"
    }

    genreLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const genre = this.getAttribute('data-genre');
            filterMovies(genre);
        });
    });

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        suggestionsContainer.innerHTML = '';
        if (query) {
            const filteredMovies = movieNames.filter(movie => movie.toLowerCase().includes(query));
            filteredMovies.forEach(movie => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.innerHTML = `<a href="${movieLinks[movie]}" target="_blank">${movie}</a>`;
                suggestionItem.addEventListener('click', function () {
                    searchInput.value = movie;
                    suggestionsContainer.innerHTML = '';
                });
                suggestionsContainer.appendChild(suggestionItem);
            });
        }
    });

    searchButton.addEventListener('click', function (event) {
        event.preventDefault();
        const query = searchInput.value;
        if (movieLinks[query]) {
            window.location.href = movieLinks[query];
        } else {
            alert('Movie not found!');
        }
    });    

    function filterMovies(genre) {
        movieCards.forEach(card => {
            if (card.getAttribute('data-genre') === genre || genre === 'all') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});

function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

// Show the popup after 3 seconds
window.onload = function() {
    setTimeout(showPopup, 1000);
}
