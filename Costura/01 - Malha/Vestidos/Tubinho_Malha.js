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
// Tubinho_Malha.js
//! [include]
// library.js contains some convenience functions like 'isNull':
include("../../_META/base.js");

function Tubinho_Malha() {
}

Tubinho_Malha.init = function(formWidget) {
    this.tecido = "malha";
    this.margVest = 0.5;
    setDefaultValues(this,44);
    this.compSaia = this.altJoelho;
    this.modelagem = "folgada";
    this.elasticidade = "média";
    this.elastComp = true;
    ajusteMalha(this,this.modelagem,this.elasticidade,this.elastComp);
    if (!isNull(formWidget)) {
        Tubinho_Malha.widgets = getWidgets(formWidget);
        setDefaultFormValues(this);
    }
};

Tubinho_Malha.generate = function(documentInterface, file) {
    readFormValues(this);
    if(this.tamanho !== "Sob Medida"){
       setDefaultValues(this,parseInt(this.tamanho,10));
       setDefaultFormValues(this);
    }
    ajusteMalha(this,this.modelagem,this.elasticidade,this.elastComp);
    return Tubinho_Malha.criarCorpo(documentInterface);
};

Tubinho_Malha.generatePreview = function(documentInterface, iconSize) {
    setDefaultValues(this,44);
    this.compSaia = this.altJoelho;
    return Tubinho_Malha.criarCorpo(documentInterface);
};


Tubinho_Malha.criarCorpo = function(documentInterface) {

    this.addOp = new RAddObjectsOperation(false);
    this.doc = documentInterface.getDocument();
    // offsets de x e y para posicionamento da parte
    this.xoff = 0;
    this.yoff = 0;
    this.frente();
    //offsets de x e y para posicionamento da parte
    this.xoff = this.quadril/4+10;
    this.yoff = 0;
    this.costas();

    return this.addOp;
};

Tubinho_Malha.frente = function() {
    // linha central
    addLine(this,0,0,0,this.compSaia+this.altCorpo-(this.ombro/2+1));
    // gola
    addSpline(this, 0,this.compSaia+this.altCorpo-(this.ombro/2+1), 
                    (this.ombro/2+1)*4/10,this.compSaia+this.altCorpo-(this.ombro/2+1),
                    this.ombro/2+1,this.compSaia+this.altCorpo-(this.ombro/2+1)*8/10,
                    this.ombro/2+1,this.compSaia+this.altCorpo);
    // ombro
    compX = Math.sqrt(Math.pow(this.ombro-2,2)-Math.pow(3,2));
    addLine(this,this.ombro/2+1,this.compSaia+this.altCorpo,this.ombro/2+1+compX,this.compSaia+this.altCorpo-3);
    // cava 
    addSpline(this, this.ombro/2+1+compX,this.compSaia+this.altCorpo-3, 
                    this.ombro/2+1+compX-1.3,this.compSaia+this.altCorpo-3-(this.largBraco/2+4)/2.2,
                    this.ombro/2+1+compX-4,this.compSaia+this.altCorpo-3-(this.largBraco/2+4)-1,
                    this.busto/4+this.margVest,this.compSaia+this.altCorpo-3-(this.largBraco/2+4));
    // distância lateral cava-cintura
    addLine(this,   this.busto/4+this.margVest,this.compSaia+this.altCorpo-3-(this.largBraco/2+4),
                    this.cintura/4+this.margVest+0.3,this.compSaia+2);
    // curva da cintura
    addSpline(this, this.cintura/4+this.margVest+0.3,this.compSaia+2,
                    this.cintura/4+this.margVest-1.0,this.compSaia-6,
                    this.quadril/4+this.margVest+0.6,this.compSaia-this.altQuadril+6, 
                    this.quadril/4+this.margVest,this.compSaia-this.altQuadril);
    // linha lateral da saia 
    addLine(this,   this.quadril/4+this.margVest,this.compSaia-this.altQuadril,
                    this.quadril/4+this.margVest,0);   
    
    // linha inferior da saia
    addLine(this,   this.quadril/4+this.margVest,0,0,0);                     
    // tabela de medidas e descrição
    addTable(this,2,20,"VESTIDO TUBINHO - FRENTE"+"\n\n"+this.table());
}


Tubinho_Malha.costas = function() {
    // linha central
    addLine(this,0,0,0,this.compSaia+this.altCorpo-2);
    // gola
    addSpline(this, 0,this.compSaia+this.altCorpo-2, 
                    (this.ombro/2+1)*4/10,this.compSaia+this.altCorpo-2,
                    this.ombro/2+1,this.compSaia+this.altCorpo-2*8/10,
                    this.ombro/2+1,this.compSaia+this.altCorpo);
    // ombro
    compX = Math.sqrt(Math.pow(this.ombro-2,2)-Math.pow(3,2));
    addLine(this,this.ombro/2+1,this.compSaia+this.altCorpo,this.ombro/2+1+compX,this.compSaia+this.altCorpo-3);
    // cava 
    addSpline(this, this.ombro/2+1+compX,this.compSaia+this.altCorpo-3, 
                    this.ombro/2+1+compX-0.8,this.compSaia+this.altCorpo-3-(this.largBraco/2+4)/2.2,
                    this.ombro/2+1+compX-2.3,this.compSaia+this.altCorpo-3-(this.largBraco/2+4)-1,
                    this.busto/4+this.margVest,this.compSaia+this.altCorpo-3-(this.largBraco/2+4));
    // distância lateral cava-cintura
    addLine(this,   this.busto/4+this.margVest,this.compSaia+this.altCorpo-3-(this.largBraco/2+4),
                    this.cintura/4+this.margVest+0.3,this.compSaia+2);
    // curva da cintura
    addSpline(this, this.cintura/4+this.margVest+0.3,this.compSaia+2,
                    this.cintura/4+this.margVest-1.0,this.compSaia-6,
                    this.quadril/4+this.margVest+0.6,this.compSaia-this.altQuadril+6, 
                    this.quadril/4+this.margVest,this.compSaia-this.altQuadril);
    // linha lateral da saia 
    addLine(this,   this.quadril/4+this.margVest,this.compSaia-this.altQuadril,
                    this.quadril/4+this.margVest,0);   
    
    // linha inferior da saia
    addLine(this,   this.quadril/4+this.margVest,0,0,0);                     
    // tabela de medidas e descrição
    addTable(this,2,20,"VESTIDO TUBINHO - COSTAS"+"\n\n"+this.table());
}

Tubinho_Malha.table = function() {
    table = "Tecido: "+this.tecido+"\n";
    table += "Modelagem: "+this.modelagem+"\n";
    table += "Elasticidade: "+this.elasticidade+"\n";
    table += "\nAlt. Tubinho_Malha: "+this.altCorpo.toFixed(2)+"\n";
    table += "Busto: "+this.busto.toFixed(2)+"\n";
    table += "Cintura: "+this.cintura.toFixed(2)+"\n";
    table += "Comp. Saia: "+this.compSaia.toFixed(2)+"\n";
    table += "Larg. Braço: "+this.largBraco.toFixed(2)+"\n";
    table += "Ombro: "+this.ombro.toFixed(2)+"\n";
    table += "Quadril: "+this.quadril.toFixed(2)+"\n";
    table += "Marg. Vest: "+this.margVest.toFixed(2)+"\n";
    return table;
};

