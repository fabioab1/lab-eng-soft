document.addEventListener("DOMContentLoaded", function() {
    let campoAno = document.getElementById("ano");

    let data = new Date();
    let anoAtual = data.getYear() + 1900;
    campoAno.max = anoAtual;

    function Carro() {
        let marca;
        let modelo;
        let ano;
        let cor;
        let km;
        let valorFipe;

        this.setMarca = function (cMarca) {
            this.marca = cMarca;
        }
        this.getMarca = function() {
            return this.marca;
        }
        
        this.setModelo = function (cModelo) {
            this.modelo = cModelo;
        }
        this.getModelo = function() {
            return this.modelo;
        }

        this.setAno = function (cAno) {
            this.ano = parseInt(cAno);
        }
        this.getAno = function() {
            return this.ano;
        }
        
        this.setCor = function (cCor) {
            this.cor = cCor;
        }
        this.getCor = function() {
            return this.cor;
        }
        
        this.setKm = function (cKm) {
            this.km = parseInt(cKm);
        }
        this.getKm = function() {
            return this.km;
        }
        
        this.setValorFipe = function (cValorFipe) {
            this.valorFipe = parseInt(cValorFipe);
        }
        this.getValorFipe = function() {
            return this.valorFipe;
        }

        this.anosUtilizacao = function() {
            anosU = anoAtual - this.getAno();
            return anosU;
        }

        this.valorMercado = function() {
            let kmAno = this.getKm() / this.anosUtilizacao();
            if (kmAno = 30000)
                return 110 * this.getValorFipe() / 100;
            else if (kmAno > 30000 && kmAno <= 50000)
                return this.getValorFipe();
            return 90 * this.getValorFipe() / 100;
        }

    }

    function exibirMsgAnos(anosU) {
        let p = document.createElement("p");
        let t = document.createTextNode("O carro possui "+ anosU + " ano(s) de utilização.");
        p.appendChild(t);
        document.body.appendChild(p);
    }

    function exibirValorMer(valorM) {
        let p = document.createElement("p");
        let t = document.createTextNode("O seu valor de mercado é de R$ "+ valorM.toFixed(2) + ".");
        p.appendChild(t);
        document.body.appendChild(p);
    }

    let form = document.getElementById("formulario");
    let iMarca = document.getElementById("marca");
    let iModelo = document.getElementById("modelo");
    let iAno = document.getElementById("ano");
    let iCor = document.getElementById("cor");
    let iKm = document.getElementById("km");
    let iFipe = document.getElementById("fipe");

    form.addEventListener("submit", function (e) {

        let carro = new Carro();

        carro.setMarca(iMarca.value);
        carro.setModelo(iModelo.value);
        carro.setAno(iAno.value);
        carro.setCor(iCor.value);
        carro.setKm(iKm.value);
        carro.setValorFipe(iFipe.value);
    
        exibirMsgAnos(carro.anosUtilizacao());
        exibirValorMer(carro.valorMercado());

        iMarca.value = "";
        iModelo.value = "";
        iAno.value = "";
        iCor.value = "";
        iKm.value = "";
        iFipe.value = "";
        iMarca.focus();

        e.preventDefault();
    });
    
});