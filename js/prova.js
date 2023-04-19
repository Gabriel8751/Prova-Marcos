function botao(){
    nome = document.getElementsByName('nome')[0].value
    sobrenome = document.getElementsByName('sobrenome')[0].value

    let completeName = `${nome} ${sobrenome}`
    
    const createH1 = document.createElement("h1");
    createH1.innerText = completeName;
    document.body.appendChild(createH1);
}