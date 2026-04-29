
document.querySelector("#calcularDesc").addEventListener('click',calcularDesc);
function calcularDesc(){
    let valorLanche=Number(document.querySelector("#lanches").value);
    let valorAdicionais = calcularAdicionais();
    let formaReceber= calcularFormaReceber();
    let valorTotal= valorLanche + valorAdicionais;
    document.querySelector("#valorPagarDesc").textContent= valorTotal;
}

function calcularAdicionais(){
    soma=0;
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
    let formaReceber= document.querySelector("input[name='metodoReceber']");
    for (i=0; i<formaReceber.length; i++){
        if(formaReceber[i].checked=='Retirada')
        {
            soma+= 10;
            break
        }
    }
    return soma;
}
function Calcular(){
    let valorLanche=Number(document.querySelector("#lanches").value);
    let valorAdicionais = calcularAdicionais();
    let valorTotal= valorLanche + valorAdicionais;
    document.querySelector("#valorPagar").textContent= valorTotal;
}