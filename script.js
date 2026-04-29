function Calcular(){
    let nome = document.getElementById("nome").value;
    let mesa= document.getElementById("mesa").value;
    let nomeLanche = document.querySelector("#lanches option:checked").text;
    let adicionais= pegarAdcionais();
    let nomeBebidas = document.querySelector("#bebidas option:checked").text;
    let metodoReceber= escolherFormaReceber();
    let valorLanche=Number(document.querySelector("#lanches").value);
    let valorAdicionais = calcularAdicionais();
    let valorBebidas= Number(document.querySelector("#bebidas").value);
    let formaReceber= calcularFormaReceber();
    let valorTotal= valorLanche + valorAdicionais + valorBebidas + formaReceber;
    document.querySelector("#valorPagar").textContent= `Valor da Conta: ${valorTotal} R$`;
    document.getElementById("ResumoCompra").innerHTML=`Resumo do pedido de ${nome}, mesa: ${mesa}<br>
    Lanche: ${nomeLanche}<br>
    Adicionais: ${adicionais}<br>
    Bebidas: ${nomeBebidas}<br>
    ${metodoReceber}`;
    return valorTotal;
    
}
document.querySelector("#calcularDesc").addEventListener('click',calcularDesc);
function calcularDesc(){
    let valorTotal= Calcular();
    let desconto= 0.1*valorTotal;
    let valorDescontado= valorTotal-desconto; 
    document.querySelector("#valorPagarDesc").textContent= `Valor da conta com desconto: ${valorDescontado} R$. Desconto: ${desconto} R$.`;
}

function calcularAdicionais(){
    let soma=0;
    let listaAdicionais= document.querySelectorAll("input[name='adicionais']");
    for (i=0; i<listaAdicionais.length; i++){
        if (listaAdicionais[i].checked)
        {
           soma += Number(listaAdicionais[i].value);
        }
    }
    return soma;
}

function calcularFormaReceber(){
    let soma=0;
    let formaReceber= document.querySelectorAll("input[name='metodoReceber']");
    for (i=0; i<formaReceber.length; i++){
        if(formaReceber[i].checked && formaReceber[i].id=="radioDelivery" ){
            soma+=10;
        
        }
    }
    return soma;
}

function pegarAdcionais(){
    let listaAdicionais= document.querySelectorAll("input[name='adicionais']");
    let nomeAdicionais="";

    if (listaAdicionais[0].checked){
        nomeAdicionais += "Bacon ";
    }
    if (listaAdicionais[1].checked){
        nomeAdicionais += "Picles ";
    }
    if (listaAdicionais[2].checked){
        nomeAdicionais += "Queijo ";
    }

    if (nomeAdicionais == ""){
        nomeAdicionais = "Sem adicionais";
    }

    return nomeAdicionais;
}

function escolherFormaReceber(){
    let formaReceber= document.querySelector("input[name='metodoReceber']:checked");

    if (formaReceber.id == "radioBalcao"){
        return "Balcão";
    } else if (formaReceber.id == "radioDelivery"){
        return "Delivery";
    } else {
        return "Retirada";
    }
    
}
document.querySelector("form").addEventListener("submit", enviarFormulario);
function enviarFormulario(event){
    event.preventDefault();
    Calcular();

}            