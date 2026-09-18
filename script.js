const searchInput = document.getElementById("movieSearch");
const movieCards = document.querySelectorAll(".movie-card");

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    movieCards.forEach(function (card) {
        const movieName = card.querySelector("h3").textContent.toLowerCase();

        if (movieName.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
