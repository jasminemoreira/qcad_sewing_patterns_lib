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
// Imperio_Malha.js
//! [include]
// library.js contains some convenience functions like 'isNull':
include("../../_META/base.js");

function Imperio_Malha() {
}

Imperio_Malha.init = function(formWidget) {
    this.tecido = "malha";
    this.margVest = 0.5;
    setDefaultValues(this,44);
    this.compSaia = this.altJoelho;
    this.altBaseBusto = this.altBusto*1.2; // 20%
    this.modelagem = "folgada";
    this.elasticidade = "média";
    this.elastComp = true;
    ajusteMalha(this,this.modelagem,this.elasticidade,this.elastComp);
    if (!isNull(formWidget)) {
        Imperio_Malha.widgets = getWidgets(formWidget);
        setDefaultFormValues(this);
    }
};

Imperio_Malha.generate = function(documentInterface, file) {
    readFormValues(this);
    if(this.tamanho !== "Sob Medida"){
       setDefaultValues(this,parseInt(this.tamanho,10));
       setDefaultFormValues(this);
    }
    ajusteMalha(this,this.modelagem,this.elasticidade,this.elastComp);
    return Imperio_Malha.criarCorpo(documentInterface);
};


Imperio_Malha.generatePreview = function(documentInterface, iconSize) {
    setDefaultValues(this,44);
    this.compSaia = this.altJoelho;
    this.altBaseBusto = this.altBusto*1.2;
    return Imperio_Malha.criarCorpo(documentInterface);
};


Imperio_Malha.criarCorpo = function(documentInterface) {

    this.addOp = new RAddObjectsOperation(false);
    this.doc = documentInterface.getDocument();
    // offsets de x e y para posicionamento da parte
    this.xoff = 0;
    this.yoff = 0;
    this.frente();
    //offsets de x e y para posicionamento da parte
    this.xoff = this.busto/4+30;
    this.yoff = 0;
    this.costas();

    return this.addOp;
};

Imperio_Malha.frente = function(x,y) {
    // linha central
    addLine(this,0,0,0,this.compSaia+this.altCorpo-(this.ombro/2+5));
    // gola
    addSpline(this, 0,this.compSaia+this.altCorpo-(this.ombro/2+5), 
                    (this.ombro/2+2)*4/10,this.compSaia+this.altCorpo-(this.ombro/2+5),
                    this.ombro/2+2,this.compSaia+this.altCorpo-(this.ombro/2+5)*8/10,
                    this.ombro/2+2,this.compSaia+this.altCorpo);
    // ombro
    compX = Math.sqrt(Math.pow(this.ombro-2,2)-Math.pow(3,2));
    addLine(this,this.ombro/2+2,this.compSaia+this.altCorpo,this.ombro/2+2+compX,this.compSaia+this.altCorpo-3);
    // cava 
    addSpline(this, this.ombro/2+2+compX,this.compSaia+this.altCorpo-3, 
                    this.ombro/2+2+compX-1.3,this.compSaia+this.altCorpo-3-(this.largBraco/2+4)/2.2,
                    this.ombro/2+2+compX-4,this.compSaia+this.altCorpo-3-(this.largBraco/2+4)-1,
                    this.busto/4+this.margVest,this.compSaia+this.altCorpo-3-(this.largBraco/2+4));
    // distância lateral cava-base.busto
    compY = Math.sqrt(Math.pow(this.altBaseBusto-(3+this.largBraco/2+4),2)-Math.pow(3,2));
    addLine(this,   this.busto/4+this.margVest,this.compSaia+this.altCorpo-3-(this.largBraco/2+4),
                    this.busto/4+this.margVest+3,this.compSaia+this.altCorpo-3-(this.largBraco/2+4)-compY);
    // linha inferior base do busto
    addSpline(this, 0,this.compSaia+this.altCorpo-this.altBaseBusto, 
                    this.busto/4*(1/2),this.compSaia+this.altCorpo-this.altBaseBusto,
                    this.busto/4*(3/4),this.compSaia+this.altCorpo-this.altBaseBusto,
                    this.busto/4+this.margVest+3,this.compSaia+this.altCorpo-3-(this.largBraco/2+4)-compY);  
    // linha superior base do busto
    hipMaior = Math.sqrt(   Math.pow((this.busto/4+this.margVest)-(this.cintura/4+this.margVest),2)+
                            Math.pow(this.altCorpo-3-(this.largBraco/2+4),2)); 
    hipMenor = hipMaior * ((this.altBaseBusto-3-(this.largBraco/2+4))/(this.altCorpo-3-(this.largBraco/2+4)))
    catMaior = (this.busto/4+this.margVest) - (this.cintura/4+this.margVest);
    catMenor = catMaior * (hipMenor/hipMaior);
    addLine(this,   0,this.compSaia+this.altCorpo-this.altBaseBusto,
                    this.busto/4+this.margVest-catMenor,this.compSaia+this.altCorpo-this.altBaseBusto);
    // linha base do busto - cintura
    addLine(this,   this.busto/4+this.margVest-catMenor,this.compSaia+this.altCorpo-this.altBaseBusto,
                    this.cintura/4+this.margVest+0.3,this.compSaia+2);
    // curva da cintura
    addSpline(this, this.cintura/4+this.margVest+0.3,this.compSaia+2,
                    this.cintura/4+this.margVest+0.0,this.compSaia+0.8,
                    this.cintura/4+this.margVest-0.2,this.compSaia-0.8, 
                    this.cintura/4+this.margVest+0.3,this.compSaia-2);
    // linha lateral da saia 
    saiaY = Math.sqrt(  Math.pow(this.compSaia,2) - 
                        Math.pow(20+(this.busto/4+this.margVest)-(this.cintura/4+this.margVest),2)); 
    addLine(this,   this.cintura/4+this.margVest+0.3,this.compSaia-2,
                    this.busto/4+this.margVest+20,this.compSaia-saiaY);   
    // linha inferior da saia
    addSpline(this, 0,0, 
                    this.busto/4*(1/2),0,
                    this.busto/4,0,
                    this.busto/4+this.margVest+20,this.compSaia-saiaY);                      
    // tabela de medidas e descrição
    addTable(this,2,20,"VESTIDO IMPÉRIO - FRENTE"+"\n\n"+this.table());
}


Imperio_Malha.costas = function() {
    // linha central
    addLine(this,0,0,0,this.compSaia+this.altCorpo-2);
    // gola
    addSpline(this, 0,this.compSaia+this.altCorpo-2, 
                    (this.ombro/2+2)*4/10,this.compSaia+this.altCorpo-2,
                    this.ombro/2+2,this.compSaia+this.altCorpo-2*8/10,
                    this.ombro/2+2,this.compSaia+this.altCorpo);
    // ombro
    compX = Math.sqrt(Math.pow(this.ombro-2,2)-Math.pow(3,2));
    addLine(this,this.ombro/2+2,this.compSaia+this.altCorpo,this.ombro/2+2+compX,this.compSaia+this.altCorpo-3);
    // cava 
    addSpline(this, this.ombro/2+2+compX,this.compSaia+this.altCorpo-3, 
                    this.ombro/2+2+compX-0.8,this.compSaia+this.altCorpo-3-(this.largBraco/2+4)/2.2,
                    this.ombro/2+2+compX-2.3,this.compSaia+this.altCorpo-3-(this.largBraco/2+4)-1,
                    this.busto/4+this.margVest,this.compSaia+this.altCorpo-3-(this.largBraco/2+4));
    // distância lateral cava-cintura
    addLine(this,   this.busto/4+this.margVest,this.compSaia+this.altCorpo-3-(this.largBraco/2+4),
                    this.cintura/4+this.margVest+0.3,this.compSaia+2);
    // curva da cintura
    addSpline(this, this.cintura/4+this.margVest+0.3,this.compSaia+2,
                    this.cintura/4+this.margVest+0.0,this.compSaia+0.8,
                    this.cintura/4+this.margVest-0.2,this.compSaia-0.8, 
                    this.cintura/4+this.margVest+0.3,this.compSaia-2);
    // linha lateral da saia 
    saiaY = Math.sqrt(  Math.pow(this.compSaia,2) - 
                        Math.pow(20+(this.busto/4+this.margVest)-(this.cintura/4+this.margVest),2)); 
    addLine(this,   this.cintura/4+this.margVest+0.3,this.compSaia-2,
                    this.busto/4+this.margVest+20,this.compSaia-saiaY); 
    // linha superior base do busto
    hipMaior = Math.sqrt(   Math.pow((this.busto/4+this.margVest)-(this.cintura/4+this.margVest),2)+
                            Math.pow(this.altCorpo-3-(this.largBraco/2+4),2)); 
    hipMenor = hipMaior * ((this.altBaseBusto-3-(this.largBraco/2+4))/(this.altCorpo-3-(this.largBraco/2+4)))
    catMaior = (this.busto/4+this.margVest) - (this.cintura/4+this.margVest);
    catMenor = catMaior * (hipMenor/hipMaior);
    addLine(this,   0,this.compSaia+this.altCorpo-this.altBaseBusto,
                    this.busto/4+this.margVest-catMenor,this.compSaia+this.altCorpo-this.altBaseBusto);
    // linha inferior da saia
    addSpline(this, 0,0, 
                    this.busto/4*(1/2),0,
                    this.busto/4,0,
                    this.busto/4+this.margVest+20,this.compSaia-saiaY);                      
    // tabela de medidas e descrição
    addTable(this,2,20,"VESTIDO IMPÉRIO - COSTAS"+"\n\n"+this.table());
}

Imperio_Malha.table = function() {
    table = "Tecido: "+this.tecido+"\n";
    table += "Modelagem: "+this.modelagem+"\n";
    table += "Elasticidade: "+this.elasticidade+"\n";
    table += "\nAlt. Base Busto: "+this.altBaseBusto.toFixed(2)+"\n";
    table += "Alt. Imperio_Malha: "+this.altCorpo.toFixed(2)+"\n";
    table += "Busto: "+this.busto.toFixed(2)+"\n";
    table += "Cintura: "+this.cintura.toFixed(2)+"\n";
    table += "Comp. Saia: "+this.compSaia.toFixed(2)+"\n";
    table += "Larg. Braço: "+this.largBraco.toFixed(2)+"\n";
    table += "Ombro: "+this.ombro.toFixed(2)+"\n";
    table += "Marg. Vest: "+this.margVest.toFixed(2)+"\n";
    return table;
};

