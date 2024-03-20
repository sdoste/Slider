const left = document.getElementById("left");
const right = document.getElementById("right");

const animals = [
    ["Orcas", "orcas.jpg"],
    ["Gato", "gato.jpg"],
    ["Tigre", "Tigre.jpg"],
    ["Zorro", "Zorro.webp"],
    ["Pingüinos", "Pinguinos.jpg"],
    ["Loro", "Loro.jpg"],
    ["Lagarto", "Lagarto.jpg"],
    ["Girafa", "Girafa.jpg"],
    ["Mapache", "Mapache.png"],
    ["Puercoespín", "PuercoEspín.jpg"],
    ["Pangolin", "Pangolin.jpg"],
    ["Oso hormiguero", "Anteater.jpg"], 
    ["Tardigrado", "Tardigrado.webp"]
];

let currentIndex = 0;

function findCurrentIndex (){
    let currentAnimal = document.getElementById("nombre").value;
    let currentIndex = 0
    //Search for the index of the animal currently being displayed
    for (let i = 0; i < animals.length; i++) {
        if (animals[i][0] === currentAnimal) {
            currentIndex = i;
        }
    }
}

function goLeft(){
    findCurrentIndex();
        //Restale 1 para el siguiente animal
    currentIndex--;
    //Si es menos de los que hay en la lista, vuelve a 0
    if ((currentIndex) < 0){
        currentIndex = animals.length - 1;
        console.log("entra en es menor que 0");
    }
    //Display the animal
    console.log(currentIndex);
    document.getElementById("nombre").innerHTML = animals[currentIndex][0];
    document.getElementById("foto").style.backgroundImage = "url(imagenes/" + animals[currentIndex][1] + ")";
}

function goRight(){
    findCurrentIndex();
    //Sumale 1 para el siguiente animal
    currentIndex++;
    //Si es más que los que hay en la lista, vuelve a 0
    if (currentIndex >= animals.length){
        currentIndex = 0;
    }
    //Display the animal
    document.getElementById("nombre").innerHTML = animals[currentIndex][0];
    document.getElementById("foto").style.backgroundImage = "url(imagenes/" + animals[currentIndex][1] + ")";
}


left.addEventListener('click', goLeft);
right.addEventListener('click', goRight);