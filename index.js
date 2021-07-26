var main = document.getElementById('Main');
var content = document.getElementById('content');
  


function getpokemon(){
  var id=Math.floor(Math.random()*500);
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
       method:'GET'})
    .then(response=> { 
    return response.json()  
  })
    .then((data)=>{
      display(data);
  })


function display(data){
  var name=document.createElement('p');
  name.className="name";
  name.innerText=data.name;
    content.innerHTML = `<div><div><img src="${data.sprites.front_default}" class="imgs"> </div>
                      <h3><span>Height:</span>${data.height} ft</h3>
                      <h3><span>Weight:</span>${data.weight} kg's</h3>
                      <h3><span>Forms:</span>${data.forms[0].name}</h3>
                      <h3><span>Abilitues:</span>${data.abilities[0].ability.name}</h3>
                      <h3><span>Species:</span>${data.species.name}</h3>
                      
                      
                      <div class="button"><button class="btn" onclick="refresh()">Next</button></div></div>`;
  content.append(name);
}}

getpokemon();

function refresh(){
      window.location.reload();
}
