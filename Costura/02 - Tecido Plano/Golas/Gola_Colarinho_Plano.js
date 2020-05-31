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
// Gola_Colarinho_Plano.js
//! [include]
// library.js contains some convenience functions like 'isNull':
include("../../_META/base.js");

function Gola_Colarinho_Plano() {
}

Gola_Colarinho_Plano.init = function(formWidget) {
    if (!isNull(formWidget)) {
        Gola_Colarinho_Plano.widgets = getWidgets(formWidget);
    }
};

Gola_Colarinho_Plano.generate = function(documentInterface, file) {

    this.decoteFrente = parseFloat(this.widgets["DecoteFrente"].text);
    if (isNaN(this.decoteFrente)) {
        this.decoteFrente = 14;
    }
    this.decoteCostas = parseFloat(this.widgets["DecoteCostas"].text);
    if (isNaN(this.decoteCostas)) {
        this.decoteCostas = 9.1;
    }
    // Modelagem 
    if (this.widgets["Feminina"].checked) {
        this.feminina = true;
    }else{
        this.feminina = false;
    }    
    this.tecido = "plano";
    return Gola_Colarinho_Plano.criarGola(documentInterface);
};


Gola_Colarinho_Plano.generatePreview = function(documentInterface, iconSize) {
    this.tecido = "plano";
    this.decoteFrente = 14;
    this.decoteCostas = 9.1;
    this.feminina = true;
    this.modelagem = "feminina";
    return Gola_Colarinho_Plano.criarGola(documentInterface);
};

Gola_Colarinho_Plano.criarGola = function(documentInterface) {
    this.addOp = new RAddObjectsOperation(false);
    this.doc = documentInterface.getDocument();
    // offsets de x e y para posicionamento da parte
    this.xoff = 0;
    this.yoff = 0;
    this.gola();
    this.xoff = 0;
    this.yoff = (this.feminina?5:6)+4;
    this.colarinho();
    return this.addOp;
};

Gola_Colarinho_Plano.gola = function() {
    //linha de base
    comprimento = this.decoteFrente+this.decoteCostas;
    if(this.feminina){
        largura = 5;
        this.modelagem = "feminina";
        addLine(this,0,0,0,largura);
        addLine(this,0,largura,comprimento,largura);
        addLine(this,comprimento,largura,comprimento,-1.5);
        addLine(this,0,0,comprimento/2,0);
        addSpline(this, comprimento/2,0,
                        4/6*comprimento,-0.2,
                        5/6*comprimento,-0.5,
                        comprimento,-1.5);
        
    }else{
        largura = 6;
        this.modelagem = "masculina";
        addLine(this,0,0,0,largura);
        addLine(this,0,largura,comprimento/2,largura);
        addLine(this,0,0,comprimento/2,0);
        addSpline(this, comprimento/2,0,
                        4/6*comprimento,-0.2,
                        5/6*comprimento,-0.5,
                        comprimento,-1.5);
        addLine(this,comprimento,-1.5,comprimento+1.5,largura+1.5);
        addSpline(this, comprimento/2,largura,
                        4/6*comprimento,largura+0.2,
                        5/6*comprimento,largura+0.5,
                        comprimento+1.5,largura+1.5);
    }
    // tabela de medidas e descrição
    this.addTable(1,4,"GOLA");
}

Gola_Colarinho_Plano.colarinho = function() {
    //linha de base
    comprimento = this.decoteFrente+this.decoteCostas+2;
    largura = 3;
    addLine(this,0,0,0,largura);
    addLine(this,0,largura,comprimento/2,largura);
    addLine(this,0,0,comprimento/2,0);
    addSpline(this, comprimento/2,0,
                    0.75*comprimento,0.2,
                    0.90*comprimento,0.2,
                    comprimento,1.5);
    addSpline(this, comprimento/2,largura,
                    comprimento-3,largura,
                    comprimento-1,largura+2,
                    comprimento,1.5);

    // tabela de medidas e descrição
    this.addTable(1,2.5,"COLARINHO");
}

Gola_Colarinho_Plano.addTable = function(x,y,desc) {
    table  = desc+"\n";
    table += "Tecido: "+this.tecido+"\n";
    table += "Modelagem: "+this.modelagem+"\n";
    table += "Decote Frente: "+this.decoteFrente.toFixed(2)+"\n";
    table += "Decote Costas: "+this.decoteCostas.toFixed(2);
    p1 = new RVector(x, y);
    p1 = p1.operator_add(new RVector(this.xoff, this.yoff));
    var textData = new RTextData(p1,p1,0.3,0.3,0,0,0,0,1,table,"Arial",false,false,0,false);
    this.addOp.addObject(new RTextEntity(this.doc,textData));
};

