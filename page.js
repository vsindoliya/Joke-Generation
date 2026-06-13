function getJoke() {
  const jokeBox = document.getElementById("joke-box");

  jokeBox.textContent = "Loading...";
  jokeBox.classList.add("loading");

  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  })
    .then(response => response.json())
    .then(data => {
      jokeBox.textContent = data.joke;
      jokeBox.classList.remove("loading");
    });
}