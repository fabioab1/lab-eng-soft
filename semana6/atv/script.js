document.addEventListener("DOMContentLoaded", function(){
   
    let calc = document.getElementById("calculadora");
    calc.style.backgroundColor = "black";
    calc.style.padding = "10px";
    calc.style.width = "270px";
    // ------------------------------------------------
    let linha1 = document.createElement("div");
    linha1.style.marginBottom = "10px";
    // ------------------------------------------------
    let linha2 = document.createElement("div");
    linha2.style.marginBottom = "10px";
    // ------------------------------------------------
    let linha3 = document.createElement("div");
    linha3.style.marginBottom = "10px";
    // ------------------------------------------------
    let linha4 = document.createElement("div");
    linha4.style.marginBottom = "10px";
    // ------------------------------------------------
    let linha5 = document.createElement("div");
    
    // ------------------------------------------------
    let res = document.createElement("p");
    let tRes = document.createTextNode("0");

    res.style.color = "white";
    res.style.fontSize = "70px";
    res.style.fontFamily = "Arial, Helvetica, sans-serif";
    res.style.marginTop = "0px";
    res.style.marginBottom = "0px";
    res.style.textAlign = "end";

    res.appendChild(tRes);
    calc.appendChild(res);
    // ------------------------------------------------
    let ac = document.createElement("button");
    let tAc = document.createTextNode("AC");

    ac.style.backgroundColor = "silver";
    ac.style.borderRadius = "100%";
    ac.style.boxSizing = "border-box";
    ac.style.height = "60px";
    ac.style.width = "60px";
    ac.style.fontSize = "25px";
    ac.style.border = "0px";
    ac.style.marginRight = "10px";
    ac.style.userSelect = "none";

    ac.addEventListener("mouseover", function(){
        ac.style.backgroundColor = "gray";
    })
    ac.addEventListener("mouseleave", function(){
        ac.style.backgroundColor = "silver";
    })
    ac.addEventListener("click", function(){
        res.innerText = "0";
    })
    
    ac.appendChild(tAc);
    linha1.appendChild(ac);
    // -------------------------------------------------
    let pN = document.createElement("button");
    let tPn = document.createTextNode("+/-");
    
    pN.style.backgroundColor = "silver";
    pN.style.borderRadius = "100%";
    pN.style.boxSizing = "border-box";
    pN.style.height = "60px";
    pN.style.width = "60px";
    pN.style.fontSize = "25px";
    pN.style.border = "0px";
    pN.style.marginRight = "10px";
    pN.style.userSelect = "none";

    pN.addEventListener("mouseover", function(){
        pN.style.backgroundColor = "gray";
    });
    pN.addEventListener("mouseleave", function(){
        pN.style.backgroundColor = "silver";
    });
    pN.addEventListener("click", function(){
        let valor = parseFloat(res.innerText.replace(",", "."), 10);
        let valorTex = 0;
        if (valor > 0)
            valorTex = -valor;
        else if (valor < 0)
            valorTex = Math.abs(valor);    
        valorTex = valorTex.toString().replace(".", ",");
        res.innerText = valorTex;
        });

    pN.appendChild(tPn);
    linha1.appendChild(pN);
    // -------------------------------------------------
    let porc = document.createElement("button");
    let tPorc = document.createTextNode("%");
    
    porc.style.backgroundColor = "silver";
    porc.style.borderRadius = "100%";
    porc.style.boxSizing = "border-box";
    porc.style.height = "60px";
    porc.style.width = "60px";
    porc.style.fontSize = "25px";
    porc.style.border = "0px";
    porc.style.marginRight = "10px";
    porc.style.userSelect = "none";

    porc.addEventListener("mouseover", function(){
        porc.style.backgroundColor = "gray";
    })
    porc.addEventListener("mouseleave", function(){
        porc.style.backgroundColor = "silver";
    })

    porc.appendChild(tPorc);
    linha1.appendChild(porc);
    // -------------------------------------------------
    let divis = document.createElement("button");
    let tDivis = document.createTextNode("/");
    
    divis.style.backgroundColor = "orange";
    divis.style.color = "white";
    divis.style.fontWeight = "bold";
    divis.style.borderRadius = "100%";
    divis.style.boxSizing = "border-box";
    divis.style.height = "60px";
    divis.style.width = "60px";
    divis.style.fontSize = "25px";
    divis.style.border = "0px";
    divis.style.userSelect = "none";

    divis.addEventListener("mouseover", function(){
        divis.style.backgroundColor = "darkorange";
    })
    divis.addEventListener("mouseleave", function(){
        divis.style.backgroundColor = "orange";
    })
    divis.addEventListener("click", function(){
        if (res.innerText != "0" && res.innerText != "0," && res.innerText.length < 6 && !res.innerText.includes("/")){
            res.innerText += "/";
        }
    })

    divis.appendChild(tDivis);
    linha1.appendChild(divis);
    // -------------------------------------------------
    calc.appendChild(linha1);

    // -------------------------------------------------
    let sete = document.createElement("button");
    let tSete = document.createTextNode("7");
    
    sete.style.backgroundColor = "#2D2D2D";
    sete.style.color = "white";
    sete.style.borderRadius = "100%";
    sete.style.boxSizing = "border-box";
    sete.style.height = "60px";
    sete.style.width = "60px";
    sete.style.fontSize = "25px";
    sete.style.border = "0px";
    sete.style.marginRight = "10px";
    sete.style.userSelect = "none";

    sete.addEventListener("mouseover", function(){
        sete.style.backgroundColor = "#141414";
    });
    sete.addEventListener("mouseleave", function(){
        sete.style.backgroundColor = "#2D2D2D";
    });
    sete.addEventListener("click", function(){
        if (res.innerText.length < 6)
            {
                if (res.innerText == "0")
                    res.innerText = "7";
                else
                    res.innerText += "7";
            }
    });
    
    sete.appendChild(tSete);
    linha2.appendChild(sete);
    // -------------------------------------------------
    let oito = document.createElement("button");
    let tOito = document.createTextNode("8");
    
    oito.style.backgroundColor = "#2D2D2D";
    oito.style.color = "white";
    oito.style.borderRadius = "100%";
    oito.style.boxSizing = "border-box";
    oito.style.height = "60px";
    oito.style.width = "60px";
    oito.style.fontSize = "25px";
    oito.style.border = "0px";
    oito.style.marginRight = "10px";
    oito.style.userSelect = "none";

    oito.addEventListener("mouseover", function(){
        oito.style.backgroundColor = "#141414";
    });
    oito.addEventListener("mouseleave", function(){
        oito.style.backgroundColor = "#2D2D2D";
    });
    oito.addEventListener("click", function(){
        if (res.innerText.length < 6)
            {
                if (res.innerText == "0")
                    res.innerText = "8";
                else
                    res.innerText += "8";
            }
    })

    oito.appendChild(tOito);
    linha2.appendChild(oito);
    // -------------------------------------------------
    let nove = document.createElement("button");
    let tNove = document.createTextNode("9");
    
    nove.style.backgroundColor = "#2D2D2D";
    nove.style.color = "white";
    nove.style.borderRadius = "100%";
    nove.style.boxSizing = "border-box";
    nove.style.height = "60px";
    nove.style.width = "60px";
    nove.style.fontSize = "25px";
    nove.style.border = "0px";
    nove.style.marginRight = "10px";
    nove.style.userSelect = "none";

    nove.addEventListener("mouseover", function(){
        nove.style.backgroundColor = "#141414";
    })
    nove.addEventListener("mouseleave", function(){
        nove.style.backgroundColor = "#2D2D2D";
    })
    nove.addEventListener("click", function(){
        if (res.innerText.length < 6)
        {
            if (res.innerText == "0")
                res.innerText = "9";
            else
                res.innerText += "9";
        }
    })

    nove.appendChild(tNove);
    linha2.appendChild(nove);
    // -------------------------------------------------
    let multi = document.createElement("button");
    let tMulti = document.createTextNode("*");
    
    multi.style.backgroundColor = "orange";
    multi.style.color = "white";
    multi.style.fontWeight = "bold";
    multi.style.borderRadius = "100%";
    multi.style.boxSizing = "border-box";
    multi.style.height = "60px";
    multi.style.width = "60px";
    multi.style.fontSize = "25px";
    multi.style.border = "0px";
    multi.style.userSelect = "none";

    multi.addEventListener("mouseover", function(){
        multi.style.backgroundColor = "darkorange";
    })
    multi.addEventListener("mouseleave", function(){
        multi.style.backgroundColor = "orange";
    })

    multi.appendChild(tMulti);
    linha2.appendChild(multi);
    // -------------------------------------------------
    calc.appendChild(linha2);    

    // -------------------------------------------------
    let quatro = document.createElement("button");
    let tQuatro = document.createTextNode("4");
    
    quatro.style.backgroundColor = "#2D2D2D";
    quatro.style.color = "white";
    quatro.style.borderRadius = "100%";
    quatro.style.boxSizing = "border-box";
    quatro.style.height = "60px";
    quatro.style.width = "60px";
    quatro.style.fontSize = "25px";
    quatro.style.border = "0px";
    quatro.style.marginRight = "10px";
    quatro.style.userSelect = "none";

    quatro.addEventListener("mouseover", function(){
        quatro.style.backgroundColor = "#141414";
    })
    quatro.addEventListener("mouseleave", function(){
        quatro.style.backgroundColor = "#2D2D2D";
    })
    quatro.addEventListener("click", function(){
        if (res.innerText.length < 6)
        {
            if (res.innerText == "0")
                res.innerText = "4";
            else
                res.innerText += "4";
        }
    })

    quatro.appendChild(tQuatro);
    linha3.appendChild(quatro);
    // -------------------------------------------------
    let cinco = document.createElement("button");
    let tCinco = document.createTextNode("5");
    
    cinco.style.backgroundColor = "#2D2D2D";
    cinco.style.color = "white";
    cinco.style.borderRadius = "100%";
    cinco.style.boxSizing = "border-box";
    cinco.style.height = "60px";
    cinco.style.width = "60px";
    cinco.style.fontSize = "25px";
    cinco.style.border = "0px";
    cinco.style.marginRight = "10px";
    cinco.style.userSelect = "none";

    cinco.addEventListener("mouseover", function(){
        cinco.style.backgroundColor = "#141414";
    })
    cinco.addEventListener("mouseleave", function(){
        cinco.style.backgroundColor = "#2D2D2D";
    })
    cinco.addEventListener("click", function(){
        if (res.innerText.length < 6)
        {
            if (res.innerText == "0")
                res.innerText = "5";
            else
                res.innerText += "5";
        }
    })

    cinco.appendChild(tCinco);
    linha3.appendChild(cinco);
    // -------------------------------------------------
    let seis = document.createElement("button");
    let tSeis = document.createTextNode("6");
    
    seis.style.backgroundColor = "#2D2D2D";
    seis.style.color = "white";
    seis.style.borderRadius = "100%";
    seis.style.boxSizing = "border-box";
    seis.style.height = "60px";
    seis.style.width = "60px";
    seis.style.fontSize = "25px";
    seis.style.border = "0px";
    seis.style.marginRight = "10px";
    seis.style.userSelect = "none";

    seis.addEventListener("mouseover", function(){
        seis.style.backgroundColor = "#141414";
    })
    seis.addEventListener("mouseleave", function(){
        seis.style.backgroundColor = "#2D2D2D";
    })
    seis.addEventListener("click", function(){
        if (res.innerText.length < 6)
        {
            if (res.innerText == "0")
                res.innerText = "6";
            else
                res.innerText += "6";
        }
    })

    seis.appendChild(tSeis);
    linha3.appendChild(seis);
    // -------------------------------------------------
    let sub = document.createElement("button");
    let tSub = document.createTextNode("-");
    
    sub.style.backgroundColor = "orange";
    sub.style.color = "white";
    sub.style.fontWeight = "bold";
    sub.style.borderRadius = "100%";
    sub.style.boxSizing = "border-box";
    sub.style.height = "60px";
    sub.style.width = "60px";
    sub.style.fontSize = "25px";
    sub.style.border = "0px";
    sub.style.userSelect = "none";

    sub.addEventListener("mouseover", function(){
        sub.style.backgroundColor = "darkorange";
    })
    sub.addEventListener("mouseleave", function(){
        sub.style.backgroundColor = "orange";
    })
    
    sub.appendChild(tSub);
    linha3.appendChild(sub);
    // -------------------------------------------------
    calc.appendChild(linha3);

    // -------------------------------------------------
    let um = document.createElement("button");
    let tUm = document.createTextNode("1");
    
    um.style.backgroundColor = "#2D2D2D";
    um.style.color = "white";
    um.style.borderRadius = "100%";
    um.style.boxSizing = "border-box";
    um.style.height = "60px";
    um.style.width = "60px";
    um.style.fontSize = "25px";
    um.style.border = "0px";
    um.style.marginRight = "10px";
    um.style.userSelect = "none";

    um.addEventListener("mouseover", function(){
        um.style.backgroundColor = "#141414";
    })
    um.addEventListener("mouseleave", function(){
        um.style.backgroundColor = "#2D2D2D";
    })
    um.addEventListener("click", function(){
        if (res.innerText.length < 6)
        {
            if (res.innerText == "0")
                res.innerText = "1";
            else
                res.innerText += "1";
        }
    })

    um.appendChild(tUm);
    linha4.appendChild(um);
    // -------------------------------------------------
    let dois = document.createElement("button");
    let tDois = document.createTextNode("2");
    
    dois.style.backgroundColor = "#2D2D2D";
    dois.style.color = "white";
    dois.style.borderRadius = "100%";
    dois.style.boxSizing = "border-box";
    dois.style.height = "60px";
    dois.style.width = "60px";
    dois.style.fontSize = "25px";
    dois.style.border = "0px";
    dois.style.marginRight = "10px";
    dois.style.userSelect = "none";

    dois.addEventListener("mouseover", function(){
        dois.style.backgroundColor = "#141414";
    })
    dois.addEventListener("mouseleave", function(){
        dois.style.backgroundColor = "#2D2D2D";
    })
    dois.addEventListener("click", function(){
        if (res.innerText.length < 6)
        {
            if (res.innerText == "0")
                res.innerText = "2";
            else
                res.innerText += "2";
        }
    })

    dois.appendChild(tDois);
    linha4.appendChild(dois);
    // -------------------------------------------------
    let tres = document.createElement("button");
    let tTres = document.createTextNode("3");
    
    tres.style.backgroundColor = "#2D2D2D";
    tres.style.color = "white";
    tres.style.borderRadius = "100%";
    tres.style.boxSizing = "border-box";
    tres.style.height = "60px";
    tres.style.width = "60px";
    tres.style.fontSize = "25px";
    tres.style.border = "0px";
    tres.style.marginRight = "10px";
    tres.style.userSelect = "none";

    tres.addEventListener("mouseover", function(){
        tres.style.backgroundColor = "#141414";
    })
    tres.addEventListener("mouseleave", function(){
        tres.style.backgroundColor = "#2D2D2D";
    })
    tres.addEventListener("click", function(){
        if (res.innerText.length < 6)
        {
            if (res.innerText == "0")
                res.innerText = "3";
            else
                res.innerText += "3";
        }
    })

    tres.appendChild(tTres);
    linha4.appendChild(tres);
    // -------------------------------------------------
    let soma = document.createElement("button");
    let tSoma = document.createTextNode("+");
    
    soma.style.backgroundColor = "orange";
    soma.style.color = "white";
    soma.style.fontWeight = "bold";
    soma.style.borderRadius = "100%";
    soma.style.boxSizing = "border-box";
    soma.style.height = "60px";
    soma.style.width = "60px";
    soma.style.fontSize = "25px";
    soma.style.border = "0px";
    soma.style.userSelect = "none";

    soma.addEventListener("mouseover", function(){
        soma.style.backgroundColor = "darkorange";
    })
    soma.addEventListener("mouseleave", function(){
        soma.style.backgroundColor = "orange";
    })

    soma.appendChild(tSoma);
    linha4.appendChild(soma);
    // -------------------------------------------------
    calc.appendChild(linha4);

    // -------------------------------------------------
    let zero = document.createElement("button");
    let tZero = document.createTextNode("0");
    
    zero.style.backgroundColor = "#2D2D2D";
    zero.style.color = "white";
    zero.style.textAlign = "start";
    zero.style.paddingLeft = "22px";
    zero.style.borderRadius = "50px";
    zero.style.boxSizing = "border-box";
    zero.style.height = "60px";
    zero.style.width = "130px";
    zero.style.fontSize = "25px";
    zero.style.border = "0px";
    zero.style.marginRight = "10px";
    zero.style.userSelect = "none";

    zero.addEventListener("mouseover", function(){
        zero.style.backgroundColor = "#141414";
    })
    zero.addEventListener("mouseleave", function(){
        zero.style.backgroundColor = "#2D2D2D";
    })
    zero.addEventListener("click", function(){
        if (res.innerText.length < 6 && res.innerText != "0")
            res.innerText += "0";
    })

    zero.appendChild(tZero);
    linha5.appendChild(zero);
    // -------------------------------------------------
    let virgula = document.createElement("button");
    let tVirgula = document.createTextNode(",");
    
    virgula.style.backgroundColor = "#2D2D2D";
    virgula.style.color = "white";
    virgula.style.borderRadius = "100%";
    virgula.style.boxSizing = "border-box";
    virgula.style.height = "60px";
    virgula.style.width = "60px";
    virgula.style.fontSize = "25px";
    virgula.style.border = "0px";
    virgula.style.marginRight = "10px";
    virgula.style.userSelect = "none";

    virgula.addEventListener("mouseover", function(){
        virgula.style.backgroundColor = "#141414";
    });
    virgula.addEventListener("mouseleave", function(){
        virgula.style.backgroundColor = "#2D2D2D";
    });
    virgula.addEventListener("click", function(){
        if (res.innerText.length < 6)
            if (res.innerText.charAt(res.innerText.length-1) != ",")
                if (!res.innerText.includes(","))
                    res.innerText += ",";
    });

    virgula.appendChild(tVirgula);
    linha5.appendChild(virgula);
    // -------------------------------------------------
    let igual = document.createElement("button");
    let tIgual = document.createTextNode("=");
    
    igual.style.backgroundColor = "orange";
    igual.style.color = "white";
    igual.style.fontWeight = "bold";
    igual.style.borderRadius = "100%";
    igual.style.boxSizing = "border-box";
    igual.style.height = "60px";
    igual.style.width = "60px";
    igual.style.fontSize = "25px";
    igual.style.border = "0px";
    igual.style.userSelect = "none";

    igual.addEventListener("mouseover", function(){
        igual.style.backgroundColor = "darkorange";
    })
    igual.addEventListener("mouseleave", function(){
        igual.style.backgroundColor = "orange";
    })
    igual.addEventListener("click", function(){
        let partes;
        let num1;
        let num2;
        let resultado;
        let resultadoCmprt // Resultado comparativo

        if (res.innerText.includes("/"))
            partes = res.innerText.split("/");
            num1 = parseFloat(partes[0]);
            num2 = parseFloat(partes[1]);
            resultado = num1/num2;


            if (!Number.isInteger(resultado))
                resultado = resultado.toFixed(1);


            if (resultado.toString().length > 6)
                resultado = resultado.toFixed(0);
                resultado = resultado.toString();
                resultado = resultado.slice(0, 6);
            resultado.toString();

            res.innerText = resultado.replace(".", ",");

    })

    igual.appendChild(tIgual);
    linha5.appendChild(igual);
    // -------------------------------------------------
    calc.appendChild(linha5);
    // -------------------------------------------------
});