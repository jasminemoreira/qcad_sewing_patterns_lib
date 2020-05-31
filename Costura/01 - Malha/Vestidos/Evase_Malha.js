/**
 * Copyright (c) 2020 by Jasmine Moreira. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */
// Evase_Malha.js
//! [include]
// library.js contains some convenience functions like 'isNull':
include("../../_META/base.js");

function Evase_Malha() {
}

Evase_Malha.init = function(formWidget) {
    this.tecido = "malha";
    this.margVest = 0.5;
    setDefaultValues(this,44);
    this.compSaia = this.altJoelho;
    this.modelagem = "folgada";
    this.elasticidade = "média";
    this.elastComp = true;
    ajusteMalha(this,this.modelagem,this.elasticidade,this.elastComp);
    if (!isNull(formWidget)) {
        Evase_Malha.widgets = getWidgets(formWidget);
        setDefaultFormValues(this);
    }
};

Evase_Malha.generate = function(documentInterface, file) {
    readFormValues(this);
    if(this.tamanho !== "Sob Medida"){
       setDefaultValues(this,parseInt(this.tamanho,10));
       setDefaultFormValues(this);
    }
    ajusteMalha(this,this.modelagem,this.elasticidade,this.elastComp);
    return Evase_Malha.criarCorpo(documentInterface);
};


Evase_Malha.generatePreview = function(documentInterface, iconSize) {
    setDefaultValues(this,44);
    this.compSaia = this.altJoelho;
    return Evase_Malha.criarCorpo(documentInterface);
};


Evase_Malha.criarCorpo = function(documentInterface) {

    this.addOp = new RAddObjectsOperation(false);
    this.doc = documentInterface.getDocument();
    // offsets de x e y para posicionamento da parte
    this.xoff = 0;
    this.yoff = 0;
    this.frente();
    //offsets de x e y para posicionamento da parte
    this.xoff = this.busto/4+this.quadril/4+10;
    this.yoff = 0;
    this.costas();

    return this.addOp;
};

Evase_Malha.frente = function(x,y) {
    // linha central
    addLine(this,0,0,0,this.compSaia+this.altCorpo-(this.ombro/2+6));
    // gola
    addSpline(this, 0,this.compSaia+this.altCorpo-(this.ombro/2+6), 
                    (this.ombro/2+2)*4/10,this.compSaia+this.altCorpo-(this.ombro/2+6),
                    this.ombro/2+2,this.compSaia+this.altCorpo-(this.ombro/2+6)*8/10,
                    this.ombro/2+2,this.compSaia+this.altCorpo);
    // ombro
    compX = Math.sqrt(Math.pow(this.ombro-2,2)-Math.pow(3,2));
    addLine(this,this.ombro/2+2,this.compSaia+this.altCorpo,this.ombro/2+2+compX,this.compSaia+this.altCorpo-3);
    // cava 
    addSpline(this, this.ombro/2+2+compX,this.compSaia+this.altCorpo-3, 
                    this.ombro/2+2+compX-1.3,this.compSaia+this.altCorpo-3-(this.largBraco/2+6)/2.2,
                    this.ombro/2+2+compX-4,this.compSaia+this.altCorpo-3-(this.largBraco/2+6)-1,
                    this.busto/4+this.margVest,this.compSaia+this.altCorpo-3-(this.largBraco/2+6));
    // distância lateral cava-cintura
    addLine(this,   this.busto/4+this.margVest,this.compSaia+this.altCorpo-3-(this.largBraco/2+6),
                    this.cintura/4+this.margVest+0.3,this.compSaia+2);
    // curva da cintura
    addSpline(this, this.cintura/4+this.margVest+0.3,this.compSaia+2,
                    this.cintura/4+this.margVest+0.0,this.compSaia+0.8,
                    this.cintura/4+this.margVest-0.2,this.compSaia-0.8, 
                    this.cintura/4+this.margVest+0.3,this.compSaia-2);
    // linha lateral da saia 
    saiaY = Math.sqrt(  Math.pow(this.compSaia,2) - 
                        Math.pow(this.quadril/4+(this.busto/4+this.margVest)-(this.cintura/4+this.margVest),2)); 
    addLine(this,   this.cintura/4+this.margVest+0.3,this.compSaia-2,
                    this.busto/4+this.margVest+this.quadril/4,this.compSaia-saiaY);   
    // linha inferior da saia
    addSpline(this, 0,0, 
                    this.busto/4*(1/2),0,
                    this.busto/4,0,
                    this.busto/4+this.margVest+this.quadril/4,this.compSaia-saiaY);                      
    // tabela de medidas e descrição
    addTable(this,2,20,"VESTIDO EVASÊ - FRENTE"+"\n\n"+this.table());
}


Evase_Malha.costas = function() {
    // linha central
    addLine(this,0,0,0,this.compSaia+this.altCorpo-4);
    // gola
    addSpline(this, 0,this.compSaia+this.altCorpo-4, 
                    (this.ombro/2+2)*4/10,this.compSaia+this.altCorpo-4,
                    this.ombro/2+2,this.compSaia+this.altCorpo-4*8/10,
                    this.ombro/2+2,this.compSaia+this.altCorpo);
    // ombro
    compX = Math.sqrt(Math.pow(this.ombro-2,2)-Math.pow(3,2));
    addLine(this,this.ombro/2+2,this.compSaia+this.altCorpo,this.ombro/2+2+compX,this.compSaia+this.altCorpo-3);
    // cava 
    addSpline(this, this.ombro/2+2+compX,this.compSaia+this.altCorpo-3, 
                    this.ombro/2+2+compX-0.8,this.compSaia+this.altCorpo-3-(this.largBraco/2+6)/2.2,
                    this.ombro/2+2+compX-2.3,this.compSaia+this.altCorpo-3-(this.largBraco/2+6)-1,
                    this.busto/4+this.margVest,this.compSaia+this.altCorpo-3-(this.largBraco/2+6));
    // distância lateral cava-cintura
    addLine(this,   this.busto/4+this.margVest,this.compSaia+this.altCorpo-3-(this.largBraco/2+6),
                    this.cintura/4+this.margVest+0.3,this.compSaia+2);
    // curva da cintura
    addSpline(this, this.cintura/4+this.margVest+0.3,this.compSaia+2,
                    this.cintura/4+this.margVest+0.0,this.compSaia+0.8,
                    this.cintura/4+this.margVest-0.2,this.compSaia-0.8, 
                    this.cintura/4+this.margVest+0.3,this.compSaia-2);
    // linha lateral da saia 
    saiaY = Math.sqrt(  Math.pow(this.compSaia,2) - 
                        Math.pow(this.quadril/4+(this.busto/4+this.margVest)-(this.cintura/4+this.margVest),2)); 
    addLine(this,   this.cintura/4+this.margVest+0.3,this.compSaia-2,
                    this.busto/4+this.margVest+this.quadril/4,this.compSaia-saiaY);    
    // linha inferior da saia
    addSpline(this, 0,0, 
                    this.busto/4*(1/2),0,
                    this.busto/4,0,
                    this.busto/4+this.margVest+this.quadril/4,this.compSaia-saiaY);                      
    // tabela de medidas e descrição
    addTable(this,2,20,"VESTIDO EVASÊ - COSTAS"+"\n\n"+this.table());
}


Evase_Malha.table = function() {
    table = "Tecido: "+this.tecido+"\n";
    table += "Modelagem: "+this.modelagem+"\n";
    table += "Elasticidade: "+this.elasticidade+"\n";
    table += "\nAlt. Corpo: "+this.altCorpo.toFixed(2)+"\n";
    table += "Busto: "+this.busto.toFixed(2)+"\n";
    table += "Cintura: "+this.cintura.toFixed(2)+"\n";
    table += "Comp. Saia: "+this.compSaia.toFixed(2)+"\n";
    table += "Larg. Braço: "+this.largBraco.toFixed(2)+"\n";
    table += "Ombro: "+this.ombro.toFixed(2)+"\n";
    table += "Quadril: "+this.quadril.toFixed(2)+"\n";
    table += "Marg. Vest: "+this.margVest.toFixed(2)+"\n";
    return table;
};

