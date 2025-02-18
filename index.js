const play_button = document.querySelector("#play_button");

const mePoint = document.querySelector("#mePoint");
const compPoint = document.querySelector("#compPoint");

const meStatus = document.querySelector("#meStatus");
const compStatus = document.querySelector("#compStatus");

const meImage = document.querySelector("#meImage");
const compImage = document.querySelector("#compImage");



let point1 = 0;
let point2 = 0;

const pokemons = ["e","f","w"];

const images = {
    e:"https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png",
    f:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
    w:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/134.png",
};

function randomPokemon(){
    const randomNum = Math.random() * pokemons.length;
    const randomIndex = Math.floor(randomNum);
    return pokemons[randomIndex];
}


function playGame(){
    const userMe = randomPokemon();
    const userComp = randomPokemon();


    const userImagee = images[userMe];
    const compImagee = images[userComp];

    meStatus.className = "";
    compStatus.className = "";

    if (userMe == "w" && userComp == "f"){
        point1+=1;
        mePoint.innerHTML = point1;

        meStatus.innerHTML = "WIN";
        compStatus.innerHTML = "LOSE";

        meStatus.classList.add("green");
        compStatus.classList.add("red");

        meImage.setAttribute("src",userImagee);
        compImage.setAttribute("src",compImagee);

        
    } else if(userMe == "e" && userComp == "w"){
        point1+=1;
        mePoint.innerHTML = point1;
        
        meStatus.innerHTML = "WIN";
        compStatus.innerHTML = "LOSE";

        meStatus.classList.add("green");
        compStatus.classList.add("red");

        meImage.setAttribute("src",userImagee);
        compImage.setAttribute("src",compImagee);

    }else if(userMe == "f" && userComp == "e"){
        point1+=1;
        mePoint.innerHTML = point1;
       
        meStatus.innerHTML = "WIN";
        compStatus.innerHTML = "LOSE"; 
        
        meStatus.classList.add("green");
        compStatus.classList.add("red");

        meImage.setAttribute("src",userImagee);
        compImage.setAttribute("src",compImagee);
    
    }else if(userMe == userComp){
        meStatus.innerHTML = "DRAW";
        compStatus.innerHTML = "DRAW";

        meStatus.classList.add("black");
        compStatus.classList.add("black");

        meImage.setAttribute("src",userImagee);
        compImage.setAttribute("src",compImagee);
        
    }else{
        point2+=1;
        compPoint.innerHTML = point2
        
        compStatus.innerHTML = "WIN";
        meStatus.innerHTML = "LOSE";

        meStatus.classList.add("red");
        compStatus.classList.add("green");

        meImage.setAttribute("src",userImagee);
        compImage.setAttribute("src",compImagee);
    }
     
}

play_button.onclick = function(){
    playGame();  
}