function fazerCalculo(){


let ra = parseInt(document.getElementById("ra").value);
let nomeAluno = document.getElementById("nomeAluno").value;
let mediaExercicio = parseFloat(document.getElementById("mediaNotaExercicio").value);
let n1 = parseFloat(document.getElementById("nota1").value);
let n2 = parseFloat(document.getElementById("nota2").value);
let n3 = parseFloat(document.getElementById("nota3").value);
let n4 = parseFloat(document.getElementById("nota4").value);

let resp = ((n1 + (n2 * 2) + (n3 * 3) + (n4 * 4) + mediaExercicio) / 11);

if(resp < 4){
    document.getElementById("resposta").innerHTML = "Média de Aproveitamento: " + resp + "<br>" + "Conceito: E" + "<br>" + "Reprovado"
} else if(resp >= 4 && resp < 6){
    document.getElementById("resposta").innerHTML = "Média de Aproveitamento: " + resp + "<br>" + "Conceito: D" + "<br>" + "Reprovado"
} else if(resp >= 6 && resp < 7.5){
    document.getElementById("resposta").innerHTML = "Média de Aproveitamento: " + resp + "<br>" + "Conceito: C" + "<br>" + "Aprovado"
} else if(resp >= 7.5 && resp < 9){
    document.getElementById("resposta").innerHTML = "Média de Aproveitamento: " + resp + "<br>" + "Conceito: B" + "<br>" + "Aprovado"
} else if(resp >= 9){
    document.getElementById("resposta").innerHTML = "Média de Aproveitamento: " + resp + "<br>" + "Conceito: A" + "<br>" + "Aprovado"
} 
document.getElementById("resposta").innerHTML += "<br>" + "RA: " + ra + "<br>" + "Nome do Aluno: " + nomeAluno;
}