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
    }
    opcao.classList.add("selecionado");
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
}