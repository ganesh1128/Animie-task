var main = document.getElementById('Main');
var content = document.getElementById('content');
  


function getpokemon(){
  var num=Math.floor(Math.random()*500);
  fetch(`https://pokeapi.co/api/v2/pokemon/${num}`,{
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
  content.innerHTML=`<div><div><img src="${data.sprites.front_default}" class="imgs">
                          <img src="${data.sprites.back_default}" class="imgs"></div>
                      <h3><span>Height</span>:${data.height}ft</h3>
                      <h3><span>Weight</span>:${data.weight}kgs</h3>
                      <h3><span>Power</span>:${num+150}</h3>
                      <div class="button"><button class="btn" onclick="refresh()">Next</button></div></div>`;
  content.append(name);
}}

getpokemon();

function refresh(){
      window.location.reload();
}