movieBtns = document.getElementsByName("movie");
const movieList = document.getElementById("movie-list");

/*tussen deze twee comments geloof ik niet dat ik dit stuk code nodig heb*/
let addMoviesToDom = function(movies){
    const movieArray = movies.map(movie => {
        let li = document.createElement("li");
        li.innerHTML=movie.title;
        /*movieList.appendChild(li);*/
        let img = document.createElement("img");
        img.src= movie.poster;
        /*li.appendChild(img);*/
    });
};

addMoviesToDom(movies);
/*tussen deze twee comments geloof ik niet dat ik dit stuk code nodig heb*/


const movieListByType = function(movies){
    movies.forEach((movies)=> {
        let listLink = document.createElement("a");
        let listPoster = document.createElement("img");
        listLink.href = "https://www.imdb.com/title/" + movies.imdbID;
       /* listPoster.classList.add("movie-posters"); */
        listPoster.src = movies.poster;
        movieList.appendChild(listLink);
        listLink.appendChild(listPoster)
        listPoster.className= "movie-posters";

    });
};

const resetMovies = function(){
    console.log("This works");
    let nodes = document.getElementById("movie-list").getElementsByTagName("a");
    for (let n = 0, len = nodes.length; n != len; ++n) {
        nodes[0].parentNode.removeChild(nodes[0]);
    };
};


for (let i of movieBtns) {
    i.addEventListener('click', function (clickEvent){
        target = clickEvent.target;
        selector = target.id;
        HandleOnChangeEvent(target, selector);
    })
};

let HandleOnChangeEvent = function(event){
    switch(selector){
        case "latest":
            latestMovies = movies.filter((movies) => movies.year >= "2014").map((movies)=> movies);
            resetMovies();
            movieListByType(latestMovies);
            break;
        case "x-men":
            Xmen = movies.filter((movies) => movies.title.includes ("X-Men")).map((movies)=> movies);
            resetMovies();
            movieListByType(Xmen);
            break;
        case "Avengers":
            Avengers = movies.filter((movies) => movies.title.includes ("Avengers")).map((movies)=> movies);
            resetMovies();
            movieListByType(Avengers);
            break;
        case "Batman":
            Batman = movies.filter((movies) => movies.title.includes ("Batman")).map((movies)=> movies);
            resetMovies();
            movieListByType(Batman);
            break;
        case "Princess":
            Princess = movies.filter((movies) => movies.title.includes ("Princess")).map((movies)=> movies);
            resetMovies();
            movieListByType(Princess);
            break;
    };
};

