const url="https://pokeapi.co/api/v2/pokemon/";

let btn=document.querySelector("button");
let input=document.querySelector("input");
const front=document.querySelector("#front");
const back=document.querySelector("#back");


const  abilility_main=document.querySelector("#ability_main");
const ability_heading=document.querySelector("#ability_heading");
const ability=document.querySelector("#ability");

const  moves_main=document.querySelector("#moves_main");
const  moves_heading=document.querySelector("#moves_heading");
const  moves=document.querySelector("#moves");

const  type_main=document.querySelector("#type_main");
const  type_heading=document.querySelector("#type_heading");
const  type=document.querySelector("#type");


btn.addEventListener("click",async()=>{
    let poke=input.value;
    const info =await axios.get(url+poke);
    front.src=await info.data.sprites.front_default;
    back.src=await info.data.sprites.back_default;
    //Type
    let len=info.data.types.length;
    if(len>0){
        type.innerHTML="";
        type_main.innerText="Type :";
       type_heading.appendChild(type_main);
        for(let i=0;i<len;i++){
            type.innerHTML=`${type.innerHTML}`+`${i} ${info.data.types[i].type.name}<br><br>`;
        }
    }
   

    //ability

    len =info.data.abilities.length ;
    if(len>0){
        ability.innerHTML="";
      
        ability_main.innerText="Abilities :";
        ability_heading.appendChild(abilility_main);
for(let i=0;i<len;i++){
    ability.innerHTML=`${ability.innerHTML}`+`${i} ${info.data.abilities[i].ability.name}<br><br>`;
}    
    }
//Moves
len=info.data.moves.length;
if(len>0){
    moves.innerHTML="";
    moves_main.innerText="Moves :";;
    moves_heading.appendChild(moves_main);
    for(let i=0;i<len;i++){
moves.innerHTML=`${moves.innerHTML}`+`<br><br>${i} ${info.data.moves[i].move.name}`;
}
    }

    
  console.log(info);


})
