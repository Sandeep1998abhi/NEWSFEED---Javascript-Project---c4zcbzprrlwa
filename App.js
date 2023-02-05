
const businessBtn = document.getElementById("business");
const allBtn = document.getElementById("all");
const sportsBtn = document.getElementById("sport");
const worldBtn = document.getElementById("world");
const politicsBtn = document.getElementById("politics");
const hatkeBtn = document.getElementById("hatke");
const scienceBtn = document.getElementById("science");
const automobileBtn = document.getElementById("automobile");


const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

var newsDataArr = [];

const BUSINESS_NEWS = "https://inshorts.deta.dev/news?category=business";
const ALL_NEWS = "https://inshorts.deta.dev/news?category=all";
const SPORTS_NEWS = "https://inshorts.deta.dev/news?category=sports";
const WORLD_NEWS = "https://inshorts.deta.dev/news?category=world";
const POLITICS_NEWS = "https://inshorts.deta.dev/news?category=politics";
const HATKE_NEWS = "https://inshorts.deta.dev/news?category=hatke";
const SCIENCE_NEWS = "https://inshorts.deta.dev/news?category=science";
const AUTOMOBILE_NEWS = "https://inshorts.deta.dev/news?category=automobile";

businessBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Business</h4>";
    fetchBusinessNews();
});

allBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>All</h4>";
    fetchAllNews();
});

sportsBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Sports</h4>";
    fetchSportsNews();
});

worldBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>World</h4>";
    fetchWorldNews();
});

politicsBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Politics</h4>";
    fetchPoliticsNews();
});

hatkeBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Hatke</h4>";
    fetchHatkeNews();
});

scienceBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Science</h4>";
    fetchScienceNews();
});

automobileBtn.addEventListener("click", function () {
    newsType.innerHTML = "<h4>Automobile</h4>";
    fetchAutomobileNews();
});


const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.data;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


const fetchAllNews = async () => {
    const response = await fetch(ALL_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.data;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.data;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchWorldNews = async () => {
    const response = await fetch(WORLD_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.data;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchPoliticsNews = async () => {
    const response = await fetch(POLITICS_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.data;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchHatkeNews = async () => {
    const response = await fetch(HATKE_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.data;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchScienceNews = async () => {
    const response = await fetch(SCIENCE_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.data;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchAutomobileNews = async () => {
    const response = await fetch(AUTOMOBILE_NEWS);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.data;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}




function displayNews() {

    newsdetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        var date = news.date;

        var col = document.createElement('div');
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";
        col.innerHTML = ('<button id="T-btn"class="like-button" onclick="likeToggle()"><i class="fa-solid fa-heart"></i></button>');
        // var likeBtn = document.getElementById("T-btn");
        // function likeToggle(e){
        //     if(likeBtn.style.color == "red"){
        //         likeBtn.style.color  = 'grey'
        //     }
        //     else{
        //         likeBtn.style.color="red";
        //     }
        //    }


        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height", "matchparent");
        image.setAttribute("width", "100%");
        image.src = news.imageUrl;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = news.date;

        var discription = document.createElement('p');
        discription.className = "text-muted";
        discription.innerHTML = news.content;

        var link = document.createElement('a');
        link.className = "btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML = "Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });
    
}

function myFunction() {
    var x = document.getElementById("Select-Button");
    if (x.style.display === "none") {
        x.style.display = "";
    } else {
        x.style.display = "none";
    }
}

window.onload = function () {
    document.getElementById("Select-Button").style.display = 'none';
}

document.querySelector("#relode")
    .addEventListener('click', () => {
        window.location.reload(true);
    });




