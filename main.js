const botaoSortear = document.querySelector("div.container button")
let nuemroSorteado = document.querySelector("div.container h1")
let roleta = []

for(i=1; i<=20000; i++){
    roleta.push(i)
}

botaoSortear.addEventListener("click",()=>{

nuemroSorteado.innerHTML= "O numero sorteado é " + roleta[Math.floor(Math.random()*roleta.length)]

})

botaoSortear.addEventListener("click",()=>{

 botaoSortear.setAttribute('disabled','')
    
})





