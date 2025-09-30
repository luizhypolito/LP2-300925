
function alterarMSG(nome){

    const elemento = document.getElementById("msg")
    elemento.innerHTML = `Boa Tarde ${nome}`

}

let elementoBotao = document.getElementById("btnConfirmar")

elementoBotao.addEventListener( "click", function(){

    const elemento = document.getElementById("msg")
    const nome = document.getElementById("nome").value
    
    elemento.innerHTML = `Boa Tarde ${nome}`

})

 