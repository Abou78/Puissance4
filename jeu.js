// const toolbox = require("./toolbox");
var jeu = {
    puissance4: [],
    nbColonne: 7,
    nbLigne: 6,
    joueur1car: "x",
    joueur2car: "o",

    initialisation : function(){
        this.puissance4 = toolbox.initialiserTableauVide(this.nbLigne, this.nbColonne,0);
    },

    /**
     * Permet d'affiche un tableau de puissance 4
     * @param {Array <String>}joueur1car tableau de car
     * @param {String} joueur1car le car de j1
     * @param {String} joueur2car le car de j2
     */
    afficherPuissance4: function () {
        const jeu = document.querySelector("#jeu");
        jeu.innerHTML = "";

        var content = "<table>";
            for (var i = 0; i < this.nbLigne; i++) {
                content += "<tr>";
                for (var j = 0; j < this.nbColonne; j++) {
                    content += "<td class='border text-center' style='width: 100px; height: 100px'>";
                    if (this.puissance4[i][j] === 0) {
                        content += "";
                    } else if (this.puissance4[i][j] === 1) {
                        content += "<img src='./images/J1.png' class='bg-danger rounded-circle'/>";
                    } else if (this.puissance4[i][j] === 2){
                        content += "<img src='./images/J2.png' class='bg-info rounded-circle'/>";
                    }
                    content += "</td>";
                }
                content += "</tr>";
            }
            content += "<tr>";
                content += '<td><button type="button" class="btn btn-secondary" onclick="jouer(0)">Colonne 1</button></td>';
                content += '<td><button type="button" class="btn btn-secondary" onclick="jouer(1)">Colonne 2</button></td>';
                content += '<td><button type="button" class="btn btn-secondary" onclick="jouer(2)">Colonne 3</button></td>';
                content += '<td><button type="button" class="btn btn-secondary" onclick="jouer(3)">Colonne 4</button></td>';
                content += '<td><button type="button" class="btn btn-secondary" onclick="jouer(4)">Colonne 5</button></td>';
                content += '<td><button type="button" class="btn btn-secondary" onclick="jouer(5)">Colonne 6</button></td>';
                content += '<td><button type="button" class="btn btn-secondary" onclick="jouer(6)">Colonne 7</button></td>';
            content += "</tr>";
        content += "</table>";

        jeu.innerHTML = content;
    },

    jouerCase : function (joueur, ligne, colonne){
        this.puissance4[ligne][colonne] = joueur;
    },

    /**
     * Fonction permettant de retourner la premi??re ligne vide d'une colonne
     * @param {Number} colonne
     * @returns {number} return -1 si la colonne est pleine
     */
    retournerLigneCaseVideColonne : function(colonne){
        for (var i = this.nbLigne-1; i>=0; i--){
            if(this.verifCaseVide(i,colonne)) return i
        }
    return -1;
    },

    /**
     * Fonction permettant de retourner si une cellule est vide
     * @param {Number} ligne
     * @param {Number} colonne
     * @returns {boolean}
     */
    verifCaseVide : function (ligne, colonne){
        return this.puissance4[ligne][colonne] === 0;
    },

    /**
     * Fonction permettant de v??rifier si un joueur a gagn??
     * @param {Number}joueur
     * @returns {boolean}
     */
    verificationFinJeu : function(joueur){
        if (this.verificationLigneFinJeu(joueur) || this.verificationColonneFinJeu(joueur) || this.verificationDiagonaleFinJeu(joueur)){
            return true;
        }
        return false;
    },

    /**
     * Fonction permettant de v??rifier si un joueur ?? gagn?? sur une ligne
     * @param {Number}joueur
     * @returns {boolean}
     */
    verificationLigneFinJeu : function(joueur){
        for(var i=this.nbLigne-1; i>=0; i--){
            for (var j=0; j<this.nbColonne-3; j++){
                if (this.puissance4[i][j] === joueur &&
                    this.puissance4[i][j+1] === joueur &&
                    this.puissance4[i][j+2] === joueur &&
                    this.puissance4[i][j+3] === joueur
                ) return true;
            }
        }
        return false;
    },

    /**
     * Fonction permettant de v??rifier si un joueur a gagn?? en colonne
     * @param {Number}joueur
     * @returns {boolean}
     */
    verificationColonneFinJeu : function(joueur){
        for(var i=0; i<this.nbColonne;i++){
            for (var j=this.nbLigne-4;j>=0;j--){
                if (this.puissance4[j][i] === joueur &&
                    this.puissance4[j+1][i] === joueur &&
                    this.puissance4[j+2][i] === joueur &&
                    this.puissance4[j+3][i] === joueur
                ) return true;
            }
        }
    },

    /**
     * Fonction permettant de v??rifier si un joueur a gagn?? en diagonale
     * @param {Number} joueur
     * @returns {boolean}
     */
    verificationDiagonaleFinJeu : function(joueur){
        for(var i=this.nbLigne-1; i>=3; i--){
            for (var j=0; j<this.nbColonne; j++){
                if (this.puissance4[i][j] === joueur &&
                    this.puissance4[i-1][j+1] === joueur &&
                    this.puissance4[i-2][j+2] === joueur &&
                    this.puissance4[i-3][j+3] === joueur
                ) return true;
                if (this.puissance4[i][j] === joueur &&
                    this.puissance4[i-1][j-1] === joueur &&
                    this.puissance4[i-2][j-2] === joueur &&
                    this.puissance4[i-3][j-3] === joueur
                ) return true;
            }
        }
        return false;

    },

    /**
     * fonction permettant de saisir une colonne
     * @returns {*}
     */
    saisirColonne : function(){
    return parseInt(toolbox.saisieString("Quelle colonne ?"));
    }

}

