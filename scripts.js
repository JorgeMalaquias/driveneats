let item1;
let item2;
let item3;
let preco1;
let preco2;
let preco3;
let precoTotal;

function selecionarOpcao(opcao){
    if(!(opcao.parentNode.parentNode.classList.contains("secaoMarcada"))){
        opcao.parentNode.parentNode.classList.add("secaoMarcada");
    }
    opcao.parentNode.parentNode.classList.add("secaoSelecionada");
    let opcaoJaSelecionada = document.querySelector(" .secaoSelecionada .selecionado");
    if(opcaoJaSelecionada!==null){
        let icon = document.querySelector(" .secaoSelecionada .selecionado ion-icon");
        icon.classList.add("hidden");
        opcaoJaSelecionada.classList.remove("selecionado");
        opcaoJaSelecionada.classList.remove("fecharPedido");
    }
    opcao.classList.add("selecionado");
    opcao.classList.add("fecharPedido");
    let icon = document.querySelector(" .secaoSelecionada .selecionado ion-icon");
    icon.classList.remove("hidden");
    opcao.parentNode.parentNode.classList.remove("secaoSelecionada");

    let secao1 = document.querySelector(".foodSections > div:nth-child(1)");
    let secao2 = document.querySelector(".foodSections > div:nth-child(2)");
    let secao3 = document.querySelector(".foodSections > div:nth-child(3)");
    
    
    
    if(secao1.classList.contains("secaoMarcada") && secao2.classList.contains("secaoMarcada") && secao3.classList.contains("secaoMarcada")){
        document.querySelector(".orderConditionNegative").classList.add("hidden");
        document.querySelector(".orderConditionPositive").classList.remove("hidden");
    }
    
}

function confirmarPedido(){
    document.querySelector(".confirmingOrder").classList.remove("hidden");

    item1 = document.querySelector(".fecharPedido > div:nth-child(2)");
    preco1 = document.querySelector(".fecharPedido > div:nth-child(4)");
    document.querySelector(".fecharPedido").classList.remove("fecharPedido");

    item2 = document.querySelector(" .fecharPedido > div:nth-child(2)");
    preco2 = document.querySelector(" .fecharPedido > div:nth-child(4)");
    document.querySelector(".fecharPedido").classList.remove("fecharPedido");

    item3 = document.querySelector(" .fecharPedido > div:nth-child(2)");
    preco3 = document.querySelector(" .fecharPedido > div:nth-child(4)");

    resumoPedido();
    
}
function voltarPedido(){
    document.querySelector(".confirmingOrder").classList.add("hidden");
    item1.parentNode.classList.add("fecharPedido");
    item2.parentNode.classList.add("fecharPedido");
}
function resumoPedido(){
    document.querySelector(".item1").innerHTML = item1.innerHTML;
    document.querySelector(".item2").innerHTML = item2.innerHTML;
    document.querySelector(".item3").innerHTML = item3.innerHTML;
    document.querySelector(".preco1").innerHTML = preco1.innerHTML;
    document.querySelector(".preco2").innerHTML = preco2.innerHTML;
    document.querySelector(".preco3").innerHTML = preco3.innerHTML;
    //document.querySelector(".precoTotal").innerHTML = precoTotal;
}
