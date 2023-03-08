const QTD_PARA_UM_ADULTO = 400 //gramas
const QTD_PARA_UMA_CRIANCA = 150 //gramas
const QTD_BEBIDA_PARA_UM_ADULTO = 5 //latas

function calcular() {
 //1 - Ler o número de adultos
 var numeroAdultos = document.getElementById("numeroAdultos").value

 //2 - Ler o número de crianças
 var numeroCriancas = document.getElementById("numeroCriancas").value

 //3 - Calcular a quantidade de carne p/ adultos
 var qtdCarneParaAdultos = QTD_PARA_UM_ADULTO * parseInt(numeroAdultos) 

 //4 - Calcular a quantidade de carne p/ crianças
 var qtdCarneParaCrianca = QTD_PARA_UMA_CRIANCA * parseInt(numeroCriancas)

 //5 - Calcular quantidade de bebida p/ adultos
 var qtdBebidaParaAdulto = QTD_BEBIDA_PARA_UM_ADULTO * parseInt(numeroAdultos)

 //6 - Mostrar o resultado
 document.getElementById("resultado").innerHTML = `  
 <ul>
 <li>QTD Carne Adultos: ${qtdCarneParaAdultos} gramas</li>
 <li>QTD Carne Crianças: ${qtdCarneParaCrianca} gramas</li>
 <li>QTD Bebida p/ Adultos: ${qtdBebidaParaAdulto} latas de 350ml</li>
 </ul>
`
 //alert(qtdCarneParaAdultos)
}
