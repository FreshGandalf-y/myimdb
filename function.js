

function init() {
    console.log("Hello World")

}

const Series = {
    "LaCasaDePapel": {
        title: "La Casa de Papel",
        img: "Images/lacasadepapel.jpg",
        description: "La Casa de Papel is a spanish Series over a..."
    },

    "Andor": {
        title: "Andor",
        img: "Images/andor.jpg",
        description: "Andor is a Starwars-Series..."
    },

    "Lupin": {
        title: "Lupin",
        img: "Images/lupin.jpg",
        description: "Lupin is a french Series about a genious jung Thief in Paris. ..."
    },

    "PrisonBreak": {
        title: "Prison Break",
        img: "Images/prsonbreak.jpg",
        description: "Prison Break is a Series about a very inteligent Man, who whants to "
    },

    "ControlZ": {
        title: "Control Z",
        img: "Images/controlZ.jpg",
        description: "Control Z is a Mexican Series about a School in Mexicociy..."
    },

    "Mandalorian": {
        title: "Mandalorian",
        img: "Images/Mandalorian.jpg",
        description: "Mandalorian is a Starwars Series..."
    },

    "MrRobot": {
        title: "Mr. Robot",
        img: "Images/MisterRobot.jpg",
        description: "Mr. Robot is a Hackingseries..."
    },

    "RingsOfPower": {
        title: "Rings of Power",
        img: "Images/RingederMacht.jpg",
        description: ""
    },

    "Heartstopper": {
        title: "Heartstopper",
        img: "Images/heartstopper.jpg",
        description: "heartstopper is a Series about"
    },
}

const Movies = {

    "Dune": {
        title: "Dune",
        img: "Images/Dune.jpg",
        description: "Dune is a Movie about Paul Atreides, ",
    },

    "LordoftheRings": {
        title: "Lord of the Rings",
        img: "Images/tLotR.jpg",
        description: "The Lord of the Rings is a movie about the book from J.R.R Tolkin...",
    },

    "Interstelar": {
        title: "Interstelar",
        img: "Images/Interstelar.png",
        description: "Interstelar is a American Movie about a Astronaut and his Doughter",
    },

    "HarryPotter": {
        title: "Harry Potter",
        img: "Images/HarryPotter.jpg",
        description: "Harry Potter is...",
    },

    "RougeOne": {
        title: "Rouge One",
        img: "Images/rougeOne.jpg",
        description: "Rouge One is a Starwars Movie about some Rebbels in a galaxy far far away...",
    },

}

function webid() {
    document.getElementById
}


function handleClick(e) {
    console.log(e);
    console.log("does funktion");
    let url = "seriesIndex.html?" + e.src
    window.location.assign(url);
}

// URL des Filmes /der Serie ermitteln und bestimmen
function initSeriesIndex() {
   
    console.log(Series);
    
    var source = new URLSearchParams(window.location.search);
    console.log(source);
    const series = source.get("Series");
    console.log(series)
}

// Name des Filmes
function picSource() {
    var source = new URLSearchParams(window.location.search);
    const series = source.get("Series");
    console.log(series);

    var Name = document.getElementById(filmname).innerHTML = series; 
}

function textdescription() {
    var source = new URLSearchParams(window.location.search);
    const text = source.get("Series")
    console.log("jetzt kommt der Text Teil?")
    console.log(text);

}