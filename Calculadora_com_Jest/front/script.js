window.receberValor = receberValor;
window.receberSinal = receberSinal;
window.somar = somar;
window.limpar = limpar;
 
const url = "http://localhost:5000/"
const resp = await fetch(url) 
const retorno = await resp.json()
console.log(retorno)


const options = {
     headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
     },

     method: "POST",
     body: JSON.stringify({a: 1, b: 2})
}


// calculadora

let visor = document.getElementById("conta");
let valores = "";
let sinal = "";


function receberValor(value) {
    //Inclementar valor
    valores += value;
    visor.textContent = valores;
    
}

function receberSinal(value) {
    if (valores === "" && value !== ",") {
        return "";
    }

    if(value === "%") {
        valores = valores / 100;
        visor.textContent = valores;
        return valores.substring(0, valores.length-1);
    }

    if (value === "apagar") {
        valores = valores.slice(0, -1); // Remover o último digíto
    } else {
        //Inclementar valor
        valores += value;
    }

    visor.textContent = valores;
}


async function somar() {
    try {
        console.log(valores);

        let response = await fetch("http://localhost:5000/calcular", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ expressao: valores })
        });

        let data = await response.json();

        if (data.resultado !== undefined) {
            valores = data.resultado;
            visor.textContent = valores;
            expressao = valores;
            console.log("Resultado:" , data.resultado); // Log no navegador
        } else {
            visor.textContent = "Erro";
            valores = "";
        }
    } catch (error) {
        console.error("Erro ao conectar com o backend:", error);
        visor.textContent = "Erro";
        valores = "";
    }
}



function limpar() {
    valores = "";
    return visor.textContent = "";
}

