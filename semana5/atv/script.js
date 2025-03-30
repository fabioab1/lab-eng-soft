document.addEventListener("DOMContentLoaded", function() {
    
    let qtdHomens = 0;
    let qtdMulheres = 0;
    let qtdTotal = 0;


    let div = document.getElementById("contador");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.width = "400px";
    div.style.height = "360px";
    div.style.boxShadow = "1px 1px 20px gray";
 
    /*
    let divCabec = document.createElement("div");
    divCabec.style.display = "flex";
    divCabec.style.flexWrap = "wrap";
    divCabec.style.flexDirection = "row";
    divCabec.style.alignItems = "center";
    */

    let divTitRei = document.createElement("div");
    divTitRei.style.display = "flex";
    divTitRei.style.flexDirection = "row";
    divTitRei.style.alignItems = "center";
    divTitRei.style.height = "57px";


    let titulo = document.createElement("h1");
    let tT = document.createTextNode("Total");
    titulo.style.fontFamily = "Arial, Helvetica, sans-serif";
    titulo.style.position = "relative";
    titulo.style.left = "19px";
    titulo.appendChild(tT);
    divTitRei.appendChild(titulo);

    let reiniciar = document.createElement("img");
    reiniciar.src = "img/reiniciar.png";
    reiniciar.style.maxWidth = "40px";
    reiniciar.style.maxHeight = "40px";
    reiniciar.style.width = "auto";
    reiniciar.style.height = "auto";
    reiniciar.style.position = "relative";
    reiniciar.style.left = "70px";
    reiniciar.style.cursor = "pointer";
    
    reiniciar.addEventListener("click", function(){
        qtdHomens = 0;
        qtdMulheres = 0;
        qtdTotal = 0;
        qHomens.innerText = 0;
        qMulheres.innerText = 0;
        pTotal.innerText = 0; 
    })

    divTitRei.appendChild(reiniciar);

    div.appendChild(divTitRei);

    // Contador total ----------------------------------------------------
    let pTotal = document.createElement("p");
    let tPTotal = document.createTextNode(qtdTotal); 
    let divTotal = document.createElement("div");
    pTotal.style.fontFamily = "Arial, Helvetica, sans-serif";
    pTotal.style.marginTop = "9px";
    pTotal.style.marginBottom = "9px";
    

    divTotal.style.width = "90px";
    divTotal.style.textAlign = "center";
    divTotal.style.borderStyle = "solid";
    divTotal.style.borderWidth = "2px";
    divTotal.style.borderColor = "gray";
    divTotal.style.borderRadius = "15px";
    divTotal.style.display = "block";
    divTotal.style.marginBottom = "25px";
    

    pTotal.appendChild(tPTotal);
    divTotal.appendChild(pTotal);
    div.appendChild(divTotal);
    // -------------------------------------------------------------------



    let divContadores = document.createElement("div");
    divContadores.style.display = "flex";
    divContadores.style.flexDirection = "row";









    let divHomem = document.createElement("div");
    divHomem.style.display = "flex";
    divHomem.style.flexDirection = "column";
    divHomem.style.alignItems = "center";
    divHomem.style.marginRight = "25px";



    // Imagem homem ------------------------------------------------------
    let homem = document.createElement("img");
    homem.src = "img/homem.png";
    homem.style.maxWidth = "80px";
    homem.style.maxHeight = "80px";
    homem.style.width = "auto";
    homem.style.height = "auto";
    homem.style.marginBottom = "13px";
    divHomem.appendChild(homem);
    // -------------------------------------------------------------------
    
    
    
    let divBotoesH = document.createElement("div");



    // Botão de adicionar homens -----------------------------------------
    let bAdd = document.createElement("button");
    let tBAdd = document.createTextNode("+");

    bAdd.style.fontFamily = "Arial, Helvetica, sans-serif"
    bAdd.style.borderRadius = "100%";
    bAdd.style.backgroundColor = "#6eaa5e";
    bAdd.style.color = "white";
    bAdd.style.fontWeight = "900px";
    bAdd.style.fontSize = "33px";
    bAdd.style.paddingRight = "10px";
    bAdd.style.paddingLeft = "10px";
    bAdd.style.border = "0px";
    bAdd.style.marginRight = "10px";
    bAdd.style.userSelect = "none";

    bAdd.appendChild(tBAdd);
    divBotoesH.appendChild(bAdd);

    bAdd.addEventListener("mouseover", function(){
        bAdd.style.backgroundColor = "#3b5d31";
    });

    bAdd.addEventListener("mouseleave", function(){
        bAdd.style.backgroundColor = "#6eaa5e";
    })

    bAdd.addEventListener("click", function(){
        if (qtdHomens >= 0){
            qtdHomens++;
            qHomens.innerText = qtdHomens;
            qtdTotal++;
            pTotal.innerText = qtdTotal;
        }
    })

    // -------------------------------------------------------------------



    // Botão de subtrair homens ------------------------------------------
    let bSub = document.createElement("button");
    let tBSub = document.createTextNode("-");

    bSub.style.fontFamily = "Arial, Helvetica, sans-serif"
    bSub.style.borderRadius = "100%";
    bSub.style.backgroundColor = "#ec2300";
    bSub.style.color = "white";
    bSub.style.fontWeight = "900px";
    bSub.style.fontSize = "17px";
    bSub.style.paddingRight = "8px";
    bSub.style.paddingLeft = "8px";
    bSub.style.border = "0px";
    bSub.style.userSelect = "none";

    bSub.appendChild(tBSub);
    divBotoesH.appendChild(bSub);

    bSub.addEventListener("mouseover", function(){
        bSub.style.backgroundColor = "#8a1400";
    });

    bSub.addEventListener("mouseleave", function(){
        bSub.style.backgroundColor = "#ec2300";
    })

    bSub.addEventListener("click", function(){
        if (qtdHomens > 0){
            qtdHomens--;
            qHomens.innerText = qtdHomens;
            qtdTotal--;
            pTotal.innerText = qtdTotal;
        }
    })
    // -------------------------------------------------------------------
    
    divHomem.appendChild(divBotoesH);




    // Título homens -----------------------------------------------------
    let pHomens = document.createElement("p");
    let tPHomens = document.createTextNode("Homens");
    pHomens.style.fontFamily = "Arial, Helvetica, sans-serif";
    pHomens.style.marginBottom = "4px";
    pHomens.appendChild(tPHomens);
    divHomem.appendChild(pHomens);
    // -------------------------------------------------------------------

    // Contador quantidade de homens -------------------------------------
    let qHomens = document.createElement("p");
    let tQHomens = document.createTextNode(qtdHomens);
    let divQHomens = document.createElement("div");
    qHomens.style.fontFamily = "Arial, Helvetica, sans-serif";
    qHomens.style.marginTop = "9px";
    qHomens.style.marginBottom = "9px";

    divQHomens.style.width = "90px";
    divQHomens.style.textAlign = "center";
    divQHomens.style.borderStyle = "solid";
    divQHomens.style.borderWidth = "2px";
    divQHomens.style.borderColor = "gray";
    divQHomens.style.borderRadius = "15px";

    qHomens.appendChild(tQHomens);
    divQHomens.appendChild(qHomens);
    divHomem.appendChild(divQHomens);
    // -------------------------------------------------------------------
    
    
    
    divContadores.appendChild(divHomem);


















    let divMulher = document.createElement("div");
    divMulher.style.display = "flex";
    divMulher.style.flexDirection = "column";
    divMulher.style.alignItems = "center";



    // Imagem mulher -----------------------------------------------------
    let mulher = document.createElement("img");
    mulher.src = "img/mulher.png";
    mulher.style.maxWidth = "80px";
    mulher.style.maxHeight = "80px";
    mulher.style.width = "auto";
    mulher.style.height = "auto";
    mulher.style.marginBottom = "13px";
    divMulher.appendChild(mulher);
    // -------------------------------------------------------------------



    let divBotoesM = document.createElement("div");

    // Botão de adicionar mulheres ---------------------------------------
    let bAdd2 = document.createElement("button");
    let tBAdd2 = document.createTextNode("+");

    bAdd2.style.fontFamily = "Arial, Helvetica, sans-serif"
    bAdd2.style.borderRadius = "100%";
    bAdd2.style.backgroundColor = "#6eaa5e";
    bAdd2.style.color = "white";
    bAdd2.style.fontWeight = "900px";
    bAdd2.style.fontSize = "33px";
    bAdd2.style.paddingRight = "10px";
    bAdd2.style.paddingLeft = "10px";
    bAdd2.style.border = "0px";
    bAdd2.style.marginRight = "10px";
    bAdd2.style.userSelect = "none";

    bAdd2.appendChild(tBAdd2);
    divBotoesM.appendChild(bAdd2);

    bAdd2.addEventListener("mouseover", function(){
        bAdd2.style.backgroundColor = "#3b5d31";
    });

    bAdd2.addEventListener("mouseleave", function(){
        bAdd2.style.backgroundColor = "#6eaa5e";
    })

    bAdd2.addEventListener("click", function(){
        if (qtdMulheres >= 0){
            qtdMulheres++;
            qMulheres.innerText = qtdMulheres;
            qtdTotal++;
            pTotal.innerText = qtdTotal;
        }
    })
    // -------------------------------------------------------------------


    // Botão de subtrair mulheres ----------------------------------------
    let bSub2 = document.createElement("button");
    let tBSub2 = document.createTextNode("-");

    bSub2.style.fontFamily = "Arial, Helvetica, sans-serif"
    bSub2.style.borderRadius = "100%";
    bSub2.style.backgroundColor = "#ec2300";
    bSub2.style.color = "white";
    bSub2.style.fontWeight = "900px";
    bSub2.style.fontSize = "17px";
    bSub2.style.paddingRight = "8px";
    bSub2.style.paddingLeft = "8px";
    bSub2.style.border = "0px";
    bSub2.style.userSelect = "none";

    bSub2.appendChild(tBSub2);
    divBotoesM.appendChild(bSub2);

    bSub2.addEventListener("mouseover", function(){
        bSub2.style.backgroundColor = "#8a1400";
    });

    bSub2.addEventListener("mouseleave", function(){
        bSub2.style.backgroundColor = "#ec2300";
    })

    bSub2.addEventListener("click", function(){
        if (qtdMulheres > 0){
            qtdMulheres--;
            qMulheres.innerText = qtdMulheres;
            qtdTotal--;
            pTotal.innerText = qtdTotal;
        }
    })
    // -------------------------------------------------------------------


    divMulher.appendChild(divBotoesM);



    // Título mulheres ---------------------------------------------------
    let pMulheres = document.createElement("p");
    let tPMulheres = document.createTextNode("Mulheres");
    pMulheres.style.fontFamily = "Arial, Helvetica, sans-serif";
    pMulheres.style.marginBottom = "4px";
    pMulheres.appendChild(tPMulheres);
    divMulher.appendChild(pMulheres);
    // -------------------------------------------------------------------


    // Contador quantidade de mulheres -----------------------------------
    let qMulheres = document.createElement("p");
    let tQMulheres = document.createTextNode(qtdMulheres);
    let divQMulheres = document.createElement("div");

    qMulheres.style.fontFamily = "Arial, Helvetica, sans-serif";
    qMulheres.appendChild(tQMulheres);
    divQMulheres.appendChild(qMulheres);
    divMulher.appendChild(divQMulheres);

    qMulheres.style.marginTop = "9px";
    qMulheres.style.marginBottom = "9px";

    divQMulheres.style.width = "90px";
    divQMulheres.style.textAlign = "center";
    divQMulheres.style.borderStyle = "solid";
    divQMulheres.style.borderWidth = "2px";
    divQMulheres.style.borderColor = "gray";
    divQMulheres.style.borderRadius = "15px";
    // -------------------------------------------------------------------

    divContadores.appendChild(divMulher);


    div.appendChild(divContadores);

})