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
// Camisa_Plano.js
//! [include]
// library.js contains some convenience functions like 'isNull':
include("../../_META/base.js");

function Camisa_Plano() {
}

Camisa_Plano.init = function(formWidget) {
    this.tecido = "plano";
    setDefaultValues(this,44);
    // ATENÇÃO: form não está disponível no preview
    if (!isNull(formWidget)) {
        Camisa_Plano.widgets = getWidgets(formWidget);
        setDefaultFormValues(this); 
    }
};

Camisa_Plano.generate = function(documentInterface, file) {
    readFormValues(this);
    if(this.tamanho !== "Sob Medida"){
       setDefaultValues(this,parseInt(this.tamanho,10));
       setDefaultFormValues(this);
    }
    return Camisa_Plano.criarManga(documentInterface);
};


Camisa_Plano.generatePreview = function(documentInterface, iconSize) {
    setDefaultValues(this,44);
    return Camisa_Plano.criarManga(documentInterface);
};

Camisa_Plano.criarManga = function(documentInterface) {
    this.addOp = new RAddObjectsOperation(false);
    this.doc = documentInterface.getDocument();
    //offsets de x e y para posicionamento da parte
    this.xoff = 0;
    this.yoff = 0;
    this.manga();
    this.xoff = 2*this.altCava+1;
    this.yoff = 0;
    this.punhoPeca();
    this.xoff = 2*this.altCava+3;
    this.yoff = 10;
    this.carcela();
    return this.addOp;
};

Camisa_Plano.manga = function() {
    altCava = this.altCava;
    largura = 2*altCava-2; 
    ombro = this.ombro+2;
    punho = this.punhoCamisa+4;
    comprimento = this.compMangaComprida;
    altCurva = comprimento-ombro;

    delta = (largura-punho)/2;
    addLine(this,delta,0,largura-delta,0);
    addLine(this,delta,0,0,altCurva);
    addLine(this,largura-delta,0,largura,altCurva);
    addLine(this,largura/2+punho/4,0,largura/2+punho/4,12);
    addLine(this,largura/2+punho/8-1,0,largura/2+punho/8-1,1);
    addLine(this,largura/2+punho/8+1,0,largura/2+punho/8+1,1);
    addLine(this,largura/2+3*punho/8-1,0,largura/2+3*punho/8-1,1);
    addLine(this,largura/2+3*punho/8+1,0,largura/2+3*punho/8+1,1);

    //curva frente
    addSpline(this, 0,comprimento-ombro, 
                    largura*1/8+0.5,comprimento-ombro*3/4-1.3,
                    largura*1/8+0.7,comprimento-ombro*3/4-1.1,
                    largura*2/8,comprimento-ombro/2);

    addSpline(this, largura*2/8,comprimento-ombro/2, 
                    largura*3/8-1.3,comprimento-ombro*1/4+1.3,
                    largura*3/8-1.1,comprimento-ombro*1/4+1.9,
                    largura*4/8,comprimento);
    // curva costas
    addSpline(this, largura*4/8,comprimento, 
                    largura*5/8+1.4,comprimento-ombro*1/4+2.4,
                    largura*5/8+1.6,comprimento-ombro*1/4+2.0,
                    largura*6/8,comprimento-ombro/2);

    addSpline(this, largura*6/8,comprimento-ombro/2, 
                    largura*7/8-0.6,comprimento-ombro*3/4-0.4,
                    largura*7/8-0.0,comprimento-ombro*3/4-0.8,
                    largura,comprimento-ombro); 
    // legendas frente e costas
    p1 = new RVector(3,altCurva-2);
    var textData = new RTextData(p1,p1,0.4,0.4,0,0,0,0,1,"FRENTE","Arial",false,false,0,false);
    this.addOp.addObject(new RTextEntity(this.doc,textData));
    p1 = new RVector(largura-6,altCurva-2);
    var textData = new RTextData(p1,p1,0.4,0.4,0,0,0,0,1,"COSTAS","Arial",false,false,0,false);
    this.addOp.addObject(new RTextEntity(this.doc,textData));
    // tabela de medidas e descrição
    addTable(this,largura/2-2,8,"MANGA"+"\n\n"+this.table());
}

Camisa_Plano.punhoPeca = function(){
    largura = this.punhoCamisa+4
    addLine(this,0,0,largura,0);
    addLine(this,0,6,largura,6);
    addLine(this,0,0,0,6);
    addLine(this,largura,0,largura,6);
    addLine(this,1.5,3,2.5,3); // casa
    addCircle(this,largura-1.5,3,0.5);
}

Camisa_Plano.carcela = function(){
    addLine(this,0,0,3,0);
    addLine(this,3,0,3,14.25);
    addLine(this,3,14.25,2.25,15);
    addLine(this,2.25,15,1.5,14.25);
    addLine(this,1.5,14.25,1.5,0);
    addLine(this,0,0,0,12);
    addLine(this,0,12,3,12); 
}

Camisa_Plano.table = function() {
    table = "Tecido: "+this.tecido+"\n";
    table += "\nComp. Manga: "+this.compMangaComprida.toFixed(2)+"\n";
    table += "Diag. Cava: "+this.altCava.toFixed(2)+"\n";
    table += "Ombro: "+this.ombro.toFixed(2)+"\n";
    if(this.longa){
        table += "Punho: "+this.punhoCamisa.toFixed(2)+"\n";
    }
    return table;
};
