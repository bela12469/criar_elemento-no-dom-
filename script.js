const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
  {
    titulo: "Japan Time",
    subtitulo: " Um sabor do oriente",
    data: "05/09/2022",
    texto: "Para os amantes de comida japonesa, essa é uma ótima opção com temakis especiais!! "
  },
]



//criar o elemento
const newarticle = document.createElement('article')

// inserindo ID no novo elemento 
  newarticle.id= "post-2"


//inserir dados no elemento
  newarticle.innerHTML= 
  `<h3> "Pop Vegan" </h3>
  <p class="subtitulo"> "Comida vegana para todos!" </p>
  <div class="data">"06/07/2022"</div>
  <p>"Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :) "</p>`
 

//colocar na dom 
  const main = document.querySelector('main')
  main.appendChild(newarticle);





// laço de repetição de um array 

for (let i=0; i < arrayPostagens.length; i++){
  const newarticle = document.createElement('article')

  newarticle.innerHTML=`
  <h3>${arrayPostagens[i].titulo}</h3>
  <p class="subtitulo"> ${arrayPostagens[i].subtitulo}</p>
  <div class="data"> ${arrayPostagens[i].data}</div>
  <p> ${arrayPostagens[i].texto}</p>
  `
  const main = document.querySelector('main')
  main.appendChild(newarticle);
}

