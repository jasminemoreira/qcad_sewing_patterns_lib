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
// Simples_Malha.js
//! [include]
// library.js contains some convenience functions like 'isNull':
include("scripts/library.js");

function Simples_Malha() {
}

Simples_Malha.init = function(formWidget) {
    if (!isNull(formWidget)) {
        Simples_Malha.widgets = getWidgets(formWidget);
    }
};

Simples_Malha.generate = function(documentInterface, file) {

    this.compManga = parseFloat(this.widgets["CompManga"].text);
    if (isNaN(this.compManga)) {
        this.compManga = 26;
    }
    this.largBraco = parseFloat(this.widgets["LargBraco"].text);
    if (isNaN(this.largBraco)) {
        this.largBraco = 34.5;
    }
    this.ombro = parseFloat(this.widgets["Ombro"].text);
    if (isNaN(this.ombro)) {
        this.ombro = 13;
    }
    this.punho = parseFloat(this.widgets["Punho"].text);
    if (isNaN(this.punho)) {
        this.punho = 20;
    }
    // Simples longa ou curta
    if (this.widgets["Curta"].checked) {
        this.widgets["Punho"].enabled = false;
        this.fatorManga = 1;
        this.longa = false;
    }else{
        this.widgets["Punho"].enabled = true;
        this.fatorManga = 2;
        this.longa = true;
    }    

    // Compensação de malha
    this.tecido = "malha";
    this.margVest = 0.5;

    if(this.widgets["Baixa"].checked){
        this.elasticidade = "baixa";
        this.compManga  = this.compManga-0.5*this.fatorManga;
        this.punho = this.punho*0.9;
        this.ombro  = this.ombro*0.9;
        this.largBraco = this.largBraco-1;
    }
    if(this.widgets["Media"].checked){
        this.elasticidade = "média";
        this.compManga  = this.compManga-1*this.fatorManga;
        this.punho = this.punho*0.8;
        this.ombro  = this.ombro*0.8;
        this.largBraco = this.largBraco-2;
    }
    if(this.widgets["Alta"].checked){
        this.elasticidade = "alta";
        this.compManga  = this.compManga-1.5*this.fatorManga;
        this.punho = this.punho*0.7;
        this.ombro  = this.ombro*0.7;
        this.largBraco = this.largBraco-3;
    }
    return Simples_Malha.criarManga(documentInterface);
};


Simples_Malha.generatePreview = function(documentInterface, iconSize) {
    this.tecido = "malha";
    this.elasticidade = "média";
    this.compManga = 26;
    this.punho = 20;
    this.ombro  = 13;
    this.largBraco = 34.5;
    this.longa = false;
    this.fatorManga = 1;
    this.margVest = 0.5;
    return Simples_Malha.criarManga(documentInterface);
};

Simples_Malha.criarManga = function(documentInterface) {
    this.addOp = new RAddObjectsOperation(false);
    this.doc = documentInterface.getDocument();
    // offsets de x e y para posicionamento da parte
    this.xoff = 0;
    this.yoff = 0;
    this.manga(this.xoff,this.yoff);
    return this.addOp;
};

Simples_Malha.manga = function(x,y) {
    //linha de base
    if(this.longa){
        delta = (this.largBraco+3-this.punho)/2;
        this.addLine(delta,0,this.largBraco+3-delta,0);
        this.addLine(delta,0,0,this.compManga-this.ombro);
        this.addLine(this.largBraco+3-delta,0,this.largBraco+3,this.compManga-this.ombro);
    }else{
        this.addLine(1,0,this.largBraco+3-1,0);
        this.addLine(1,0,0,this.compManga-this.ombro);
        this.addLine(this.largBraco+3-1,0,this.largBraco+3,this.compManga-this.ombro);
    }
    // curva frente
    this.addSpline( 0,this.compManga-this.ombro, 
                    (this.largBraco+3)*1/8+0.5,this.compManga-this.ombro*3/4-1.3,
                    (this.largBraco+3)*1/8+0.7,this.compManga-this.ombro*3/4-1.1,
                    (this.largBraco+3)*2/8,this.compManga-this.ombro/2);

    this.addSpline( (this.largBraco+3)*2/8,this.compManga-this.ombro/2, 
                    (this.largBraco+3)*3/8-1.3,this.compManga-this.ombro*1/4+1.3,
                    (this.largBraco+3)*3/8-1.1,this.compManga-this.ombro*1/4+1.9,
                    (this.largBraco+3)*4/8,this.compManga);
    // curva costas
    this.addSpline( (this.largBraco+3)*4/8,this.compManga, 
                    (this.largBraco+3)*5/8+1.4,this.compManga-this.ombro*1/4+2.4,
                    (this.largBraco+3)*5/8+1.6,this.compManga-this.ombro*1/4+2.0,
                    (this.largBraco+3)*6/8,this.compManga-this.ombro/2);

    this.addSpline( (this.largBraco+3)*6/8,this.compManga-this.ombro/2, 
                    (this.largBraco+3)*7/8-0.6,this.compManga-this.ombro*3/4-0.4,
                    (this.largBraco+3)*7/8-0.0,this.compManga-this.ombro*3/4-0.8,
                    this.largBraco+3,this.compManga-this.ombro); 
    // legendas frente e costas
    p1 = new RVector(3,this.compManga-this.ombro-2);
    var textData = new RTextData(p1,p1,0.4,0.4,0,0,0,0,1,"FRENTE","Arial",false,false,0,false);
    this.addOp.addObject(new RTextEntity(this.doc,textData));
    p1 = new RVector((this.largBraco+3)-6,this.compManga-this.ombro-2);
    var textData = new RTextData(p1,p1,0.4,0.4,0,0,0,0,1,"COSTAS","Arial",false,false,0,false);
    this.addOp.addObject(new RTextEntity(this.doc,textData));
    // tabela de medidas e descrição
    this.addTable((this.largBraco+3)/2-2,8,"MANGA");
}


Simples_Malha.addLine = function(x1,y1,x2,y2) {
    p1 = new RVector(x1, y1);
    p2 = new RVector(x2, y2);
    p1 = p1.operator_add(new RVector(this.xoff, this.yoff));
    p2 = p2.operator_add(new RVector(this.xoff, this.yoff));
    this.addOp.addObject(new RLineEntity(this.doc, new RLineData(p1, p2)));
};

Simples_Malha.addSpline = function(x1,y1,x2,y2,x3,y3,x4,y4) {
    p1 = new RVector(x1, y1);
    p2 = new RVector(x2, y2);
    p3 = new RVector(x3, y3);
    p4 = new RVector(x4, y4);
    p1 = p1.operator_add(new RVector(this.xoff, this.yoff));
    p2 = p2.operator_add(new RVector(this.xoff, this.yoff));  
    p3 = p3.operator_add(new RVector(this.xoff, this.yoff));
    p4 = p4.operator_add(new RVector(this.xoff, this.yoff));      
    var cavaData = new RSplineData();
    cavaData.appendControlPoint(p1);
    cavaData.appendControlPoint(p2);
    cavaData.appendControlPoint(p3);
    cavaData.appendControlPoint(p4);
    cavaData.isClosed = false;
    var cava = new RSplineEntity(this.doc,cavaData);
    this.addOp.addObject(cava);
};
Simples_Malha.addTable = function(x,y,desc) {
    table  = desc+"\n\n";
    table += "Tecido: "+this.tecido+"\n";
    table += "Elasticidade: "+this.elasticidade+"\n";
    table += "\nComp. Manga: "+this.compManga.toFixed(2)+"\n";
    table += "Larg. Braço: "+this.largBraco.toFixed(2)+"\n";
    table += "Ombro: "+this.ombro.toFixed(2)+"\n";
    table += "Punho: "+this.punho.toFixed(2)+"\n";
    table += "Marg. Vest: "+this.margVest.toFixed(2)+"\n";
    p1 = new RVector(x, y);
    p1 = p1.operator_add(new RVector(this.xoff, this.yoff));
    var textData = new RTextData(p1,p1,0.4,0.4,0,0,0,0,1,table,"Arial",false,false,0,false);
    this.addOp.addObject(new RTextEntity(this.doc,textData));
};

