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
// Simples_Plano.js
//! [include]
// library.js contains some convenience functions like 'isNull':
include("../../_META/base.js");

function Simples_Plano() {
}

Simples_Plano.init = function(formWidget) {
    setDefaultValues(this,44);
    this.tecido = "plano";
    this.longa = false;
    this.compManga = this.compMangaCurta;
    // ATENÇÃO: form não está disponível no preview
    if (!isNull(formWidget)) {
        Simples_Plano.widgets = getWidgets(formWidget);
        setDefaultFormValues(this); 
    }
};

Simples_Plano.generate = function(documentInterface, file) {
    readFormValues(this);
    this.longa = false; 
    if(this.widgets["Longa"].checked){
        this.longa = true;
    }  
    if(this.tamanho !== "Sob Medida"){
        setDefaultValues(this,parseInt(this.tamanho,10));
        this.compManga = this.longa?this.compMangaComprida:this.compMangaCurta;   
    }
    setDefaultFormValues(this);
    return Simples_Plano.criarManga(documentInterface);
};


Simples_Plano.generatePreview = function(documentInterface, iconSize) {
    setDefaultValues(this,44);
    return Simples_Plano.criarManga(documentInterface);
};

Simples_Plano.criarManga = function(documentInterface) {
    this.addOp = new RAddObjectsOperation(false);
    this.doc = documentInterface.getDocument();
    // offsets de x e y para posicionamento da parte
    this.xoff = 0;
    this.yoff = 0;
    this.manga();
    return this.addOp;
};

Simples_Plano.manga = function() {
    altCava = this.altCava;
    largura = 2*altCava-2; 
    ombro = this.ombro+2;
    punho = this.punhoCamisa+4;
    comprimento = this.compManga;
    altCurva = comprimento-ombro;

    if(this.longa){
        delta = (largura-punho)/2;
        addLine(this,delta,0,largura-delta,0);
        addLine(this,delta,0,0,altCurva);
        addLine(this,largura-delta,0,largura,altCurva);
    }else{
        addLine(this,1,0,largura-1,0);
        addLine(this,1,0,0,altCurva);
        addLine(this,largura-1,0,largura,altCurva);
    }
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
    //legendas frente e costas
    p1 = new RVector(3,altCurva-2);
    var textData = new RTextData(p1,p1,0.4,0.4,0,0,0,0,1,"FRENTE","Arial",false,false,0,false);
    this.addOp.addObject(new RTextEntity(this.doc,textData));
    p1 = new RVector(largura-6,altCurva-2);
    var textData = new RTextData(p1,p1,0.4,0.4,0,0,0,0,1,"COSTAS","Arial",false,false,0,false);
    this.addOp.addObject(new RTextEntity(this.doc,textData));
    // tabela de medidas e descrição
    addTable(this,largura/2-2,8,"MANGA"+"\n\n"+this.table());
}

Simples_Plano.table = function() {
    table = "Tecido: "+this.tecido+"\n";
    table += "\nComp. Manga: "+this.compManga.toFixed(2)+"\n";
    table += "Diag. Cava: "+this.altCava.toFixed(2)+"\n";
    table += "Ombro: "+this.ombro.toFixed(2)+"\n";
    table += "Punho: "+this.punhoCamisa.toFixed(2)+"\n";
    return table;
};

