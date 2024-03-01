document.addEventListener('DOMContentLoaded', function() {
    const movieList = document.getElementById('movieList');
    const searchInput = document.getElementById('searchInput');
    const yearFilter = document.getElementById('yearFilter');
    const addMovieForm = document.getElementById('addMovieForm');

    let movies = [
        { title: 'Blade Runner 2049', description: 'Un oficial de policía llamado K, quien descubre un secreto que pone en peligro la sociedad.', releaseYear: 2017 },
        { title: 'The Matrix', description: 'Thomas Anderson, un programador de software, descubre la verdad sobre su realidad y su papel en la guerra contra las máquinas.', releaseYear: 1999 },
        { title: 'Elysium', description: 'En un futuro distópico, la sociedad se divide entre los ricos que viven en una estación espacial y los pobres que luchan por sobrevivir en la Tierra.', releaseYear: 2013 },
        { title: 'Her', description: 'Un escritor solitario desarrolla una relación romántica con un sistema operativo con inteligencia artificial.', releaseYear: 2013 }
    ];

    function renderMovies(moviesToRender) {
        movieList.innerHTML = '';
        moviesToRender.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.innerHTML = `
                <h2>${movie.title}</h2>
                <p>Descripción: ${movie.description}</p>
                <p>Año de lanzamiento: ${movie.releaseYear}</p>
            `;
            movieList.appendChild(movieItem);
        });
    }

    renderMovies(movies);

    const years = movies.map(movie => movie.releaseYear);
    const uniqueYears = [...new Set(years)];
    uniqueYears.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        renderMovies(filteredMovies);
    });


    yearFilter.addEventListener('change', function() {
        const selectedYear = parseInt(yearFilter.value);
        if (selectedYear) {
            const filteredMovies = movies.filter(movie => movie.releaseYear === selectedYear);
            renderMovies(filteredMovies);
        } else {
            renderMovies(movies);
        }
    });

    addMovieForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const releaseYear = parseInt(document.getElementById('releaseYear').value);
        if (title && description && releaseYear) {
            const newMovie = { title, description, releaseYear };
            movies.push(newMovie);
            renderMovies(movies);
            addMovieForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});
