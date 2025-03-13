const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const newsBox = document.getElementById("newsBox");
const spinner = document.getElementById("spinner");

const newsCategory = [
  "national",
  "business",
  "sports",
  "world",
  "politics",
  "technology",
  "startup",
  "entertainment",
  "miscellaneous",
  "hatke",
  "science",
  "automobile",
];

// Toggle Dark Mode
function toggleDarkMode() {
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}

darkModeToggle.addEventListener("change", toggleDarkMode);

// Initial Dark Mode Setting
function setInitialDarkMode() {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDarkMode) {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }
}

setInitialDarkMode();

// Fetch News Using Fetch API and CORS Proxy
function getNews(newsCategoryName = "all") {
  // Show Spinner
  spinner.style.visibility = "visible";
  newsBox.style.visibility = "hidden";

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = `https://inshortsapi.vercel.app/news?category=${newsCategoryName}`;

  fetch(proxyUrl + apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(json => {
      const data = json.data;
      let newsHTML = "";

      data.forEach(newsItem => {
        const news = `
          <div class="newsCard">
            <div class="imageWrapper">
              <img src="${newsItem.imageUrl}" class="thumbnail" alt="Image">
            </div>
            <div class="card-body">
              <div class="card-date">${newsItem.date}</div>
              <h5 class="card-title">${newsItem.title}</h5>
              <h5 class="card-author">Author: ${newsItem.author}</h5>
              <p class="card-text">${newsItem.content}</p>
              <a target="_blank" href="${newsItem.readMoreUrl}" class="btn btn-primary">Read more..</a>
            </div>
          </div>`;
        newsHTML += news;
      });

      newsBox.innerHTML = newsHTML;

      // Hide Spinner and Show Content
      spinner.style.visibility = "hidden";
      newsBox.style.visibility = "visible";
    })
    .catch(error => {
      console.error("Fetch error:", error);
      spinner.style.visibility = "hidden";
    });
}

// Call to load initial news
getNews();

// Function to send selected category
function sendCategory(index) {
  getNews(newsCategory[index]);
}

