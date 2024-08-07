//declarando variaveis, o valor de cada variavel é definido de acordo com o id
let input=document.getElementById("add");
let lista=document.getElementById("list");

//função para adicionar tarefas na lista
function addtarefa(){
    if(input.value===''){
        alert("insira uma tarefa")
    }else{
//criando um elemento "linha" com o valor do input
        let li=document.createElement("li");
        li.innerHTML=input.value;
//inserindo o elemento lista no html
        lista.appendChild(li);
//criando um elemento "span" com o valor do input
        let span=document.createElement("span");
//adicionando span (x) na linha 
        span.innerHTML="x";
        li.appendChild(span);
    }
//manter o input limpo após a utilização do buttom
    input.value="";
}

//adiconar um evento através do click
lista.addEventListener("click",function(e){
//se a tag do evento for li, adiiona a classe checked
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
//se a tag do elemento for span, revome a linha (parent.Element é um elemento que contem outro elemento (no caso, a linha contem o span))
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
});