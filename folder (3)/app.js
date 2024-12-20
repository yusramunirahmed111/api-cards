let data = fetch("https://dummyapi.online/api/movies");

        data.then((res) => {
            return res.json();
        })
        .then((res) => {
            const container = document.getElementById("movieContainer");

            res.map((movie) => {
                // Create a card div
                const card = document.createElement("div");
                card.classList.add("card");

                // Add card content (Image, Title, and Rating)
                card.innerHTML = `
                    <div class="card-content">
                        <h2>${movie.movie}</h2>
                        <p>Rating: ${movie.rating}</p>
                    </div>
                `;

                // Append the card to the container
                container.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });