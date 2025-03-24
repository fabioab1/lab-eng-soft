document.addEventListener("DOMContentLoaded", function () {
    let prof = document.getElementById("prof");
    let aluno = document.getElementById("aluno");
    
    let form = document.getElementById("form");
    
    let prParte = document.getElementById("pr-parte");

    let dados = document.getElementById("dados");

    function Pessoa() {
        let nome;
        let email;
        let dataN;
        let telF;
        let telC;
        let matric;

        this.setNome = function(vNome){
            this.nome = vNome;
        }
        this.getNome = function(){
            return this.nome;
        }

        this.setEmail = function(vEmail){
            this.email = vEmail;
        }
        this.getEmail = function(){
            return this.email;
        }

        this.setDataN = function(vDataN){
            this.dataN = vDataN;
        }
        this.getDataN = function(){
            return this.dataN;
        }

        this.setTelF = function(vTelF){
            this.telF = vTelF;
        }
        this.getTelF = function(){
            return this.telF;
        }

        this.setTelC = function(vTelC){
            this.telC = vTelC;
        }
        this.getTelC = function(){
            return this.telC;
        }

        this.setMatric = function(vMatric){
            this.matric = vMatric;
        }
        this.getMatric = function(){
            return this.matric;
        }
    }

    function Professor() {
        Pessoa.call(this);
        let area;
        let lattes;

        this.setArea = function(vArea){
            this.area = vArea;
        }
        this.getArea = function(){
            return this.area;
        }

        this.setLattes = function(vLattes){
            this.lattes = vLattes;
        }
        this.getLattes = function(){
            return this.lattes;
        }
    }

    function Aluno() {
        Pessoa.call(this);
        let curso;

        this.setCurso = function(vCurso){
            this.curso = vCurso;
        }
        this.getCurso = function() {
            return this.curso;
        }
    }

    function exibirDadosProf(prof){

        dados.innerHTML = "";

        let titulo = document.createElement("h3");
        let tT = document.createTextNode("Professor");
        titulo.appendChild(tT);
        dados.appendChild(titulo);
        
        let p6 = document.createElement("p");
        let tP6 = document.createTextNode("Matrícula: "+prof.getMatric());
        p6.appendChild(tP6);
        dados.appendChild(p6);

        let p1 = document.createElement("p");
        let tP1 = document.createTextNode("Nome: "+prof.getNome());
        p1.appendChild(tP1);
        dados.appendChild(p1);

        let p2 = document.createElement("p");
        let tP2 = document.createTextNode("E-mail: "+prof.getEmail());
        p2.appendChild(tP2);
        dados.appendChild(p2);
        
        let p3 = document.createElement("p");
        let ano = prof.getDataN().substring(0,4);
        let mes = prof.getDataN().substring(5,7);
        let dia = prof.getDataN().substring(8,10);
        let DataN = dia+"/"+mes+"/"+ano;
        let tP3 = document.createTextNode("Data de nascimento: "+DataN);
        p3.appendChild(tP3);
        dados.appendChild(p3);
        
        let p4 = document.createElement("p");
        let tP4 = document.createTextNode("Telefone fixo: "+prof.getTelF());
        p4.appendChild(tP4);
        dados.appendChild(p4);
        
        let p5 = document.createElement("p");
        let tP5 = document.createTextNode("Telefone celular: "+prof.getTelC());
        p5.appendChild(tP5);
        dados.appendChild(p5);

        let p7 = document.createElement("p");
        let tP7 = document.createTextNode("Área: "+prof.getArea());
        p7.appendChild(tP7);
        dados.appendChild(p7);

        let a = document.createElement("a");
        let tA = document.createTextNode("Lattes");
        a.appendChild(tA);
        a.href = prof.getLattes();
        dados.appendChild(a);

    }   

    function exibirDadosAluno(aluno){

        dados.innerHTML = "";

        let titulo = document.createElement("h3");
        let tT = document.createTextNode("Aluno");
        titulo.appendChild(tT);
        dados.appendChild(titulo);
        
        let p6 = document.createElement("p");
        let tP6 = document.createTextNode("Matrícula: "+aluno.getMatric());
        p6.appendChild(tP6);
        dados.appendChild(p6);

        let p1 = document.createElement("p");
        let tP1 = document.createTextNode("Nome: "+aluno.getNome());
        p1.appendChild(tP1);
        dados.appendChild(p1);

        let p2 = document.createElement("p");
        let tP2 = document.createTextNode("E-mail: "+aluno.getEmail());
        p2.appendChild(tP2);
        dados.appendChild(p2);
        
        let p3 = document.createElement("p");
        let ano = aluno.getDataN().substring(0,4);
        let mes = aluno.getDataN().substring(5,7);
        let dia = aluno.getDataN().substring(8,10);
        let DataN = dia+"/"+mes+"/"+ano;
        let tP3 = document.createTextNode("Data de nascimento: "+DataN);
        p3.appendChild(tP3);
        dados.appendChild(p3);
        
        let p4 = document.createElement("p");
        let tP4 = document.createTextNode("Telefone fixo: "+aluno.getTelF());
        p4.appendChild(tP4);
        dados.appendChild(p4);
        
        let p5 = document.createElement("p");
        let tP5 = document.createTextNode("Telefone celular: "+aluno.getTelC());
        p5.appendChild(tP5);
        dados.appendChild(p5);

        let p7 = document.createElement("p");
        let tP7 = document.createTextNode("Curso: "+aluno.getCurso());
        p7.appendChild(tP7);
        dados.appendChild(p7);

    }   

    prof.addEventListener("click", function () {

        prParte.innerHTML = "";

        let divCmpArea = document.createElement("div");
        divCmpArea.className = "campo";

        let areaL = document.createElement("label");
        let tAL = document.createTextNode("Área:");
        areaL.style.marginRight = "5px";
        areaL.appendChild(tAL);
        divCmpArea.appendChild(areaL);

        let areaI = document.createElement("input");
        areaI.id = "area";
        areaI.placeholder = "Digite sua área de atuação";
        areaI.style.width = "180px";
        divCmpArea.appendChild(areaI);

        prParte.appendChild(divCmpArea);
        
        /* ---------------------------------------------- */

        let divCmpLatt = document.createElement("div");
        divCmpLatt.className = "campo";

        let lattL = document.createElement("label");
        let tLL = document.createTextNode("Lattes:");
        lattL.style.marginRight = "5px";
        lattL.appendChild(tLL);
        divCmpLatt.appendChild(lattL);

        let lattI = document.createElement("input");
        lattI.id = "lattes";
        lattI.placeholder = "Digite aqui o endereço para seu Lattes";
        lattI.style.width = "250px";
        divCmpLatt.appendChild(lattI);

        prParte.appendChild(divCmpLatt);

    })

    aluno.addEventListener("click", function () {

        prParte.innerHTML = "";

        let divCmpCurso = document.createElement("div");
        divCmpCurso.className = "campo";

        let cursoL = document.createElement("label");
        let tCL = document.createTextNode("Curso:");
        cursoL.style.marginRight = "5px";
        cursoL.appendChild(tCL);
        divCmpCurso.appendChild(cursoL);

        let cursoI = document.createElement("input");
        cursoI.id = "curso";
        cursoI.placeholder = "Digite seu curso";
        divCmpCurso.appendChild(cursoI);

        prParte.appendChild(divCmpCurso);

    })
    
    let cNome = document.getElementById("nome");
    let cEmail = document.getElementById("email");
    let cDnasc = document.getElementById("dnasc");
    let cTelF = document.getElementById("telefonef");
    let cTelC = document.getElementById("telefonec");
    let cMatric = document.getElementById("matric");

    form.addEventListener("submit", function (e) {

        if (prof.checked){
            let professor = new Professor();
            
            let cArea = document.getElementById("area");
            let cLattes = document.getElementById("lattes");
            
            professor.setNome(cNome.value);
            professor.setEmail(cEmail.value);
            professor.setDataN(cDnasc.value);
            professor.setTelF(cTelF.value);
            professor.setTelC(cTelC.value);
            professor.setMatric(cMatric.value);
            
            professor.setArea(cArea.value);
            professor.setLattes(cLattes.value);
            
            exibirDadosProf(professor);

            cArea.value = "";
            cLattes.value = "";
        }
        else if (aluno.checked){
            let aluno = new Aluno();
            
            let cCurso = document.getElementById("curso");

            aluno.setNome(cNome.value);
            aluno.setEmail(cEmail.value);
            aluno.setDataN(cDnasc.value);
            aluno.setTelF(cTelF.value);
            aluno.setTelC(cTelC.value);
            aluno.setMatric(cMatric.value);

            aluno.setCurso(cCurso.value);

            exibirDadosAluno(aluno);

            cCurso.value = "";
        }
        
        cNome.value = "";
        cEmail.value = "";
        cDnasc.value = "";
        cTelF.value = "";
        cTelC.value = "";
        cMatric.value = "";
        cNome.focus();
        e.preventDefault();
    })
})