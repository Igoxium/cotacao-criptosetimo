var numberUm = Number(document.getElementById("firstNo").value);

 function calcular() {
    numberUm = Number(document.getElementById("firstNo").value);
    
    var perimetro  = 0.15 * numberUm;

    document.getElementById("reais").innerHTML = perimetro;
    }