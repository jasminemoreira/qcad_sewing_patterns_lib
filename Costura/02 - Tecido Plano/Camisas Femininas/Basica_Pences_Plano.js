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
// Basica_Pences_Plano.js
include("../../_META/base.js");

function Basica_Pences_Plano() {
};

Basica_Pences_Plano.init = function(formWidget) {
    this.tecido = "plano";
    this.margVest = 2; 
    setDefaultValues(this,44);
    if (!isNull(formWidget)) {
        Basica_Pences_Plano.widgets = getWidgets(formWidget);
        setDefaultFormValues(this);
    }
};

Basica_Pences_Plano.generate = function(documentInterface, file) {
    readFormValues(this);
    if(this.tamanho !== "Sob Medida"){
       setDefaultValues(this,parseInt(this.tamanho,10));
       setDefaultFormValues(this);
    }
    return Basica_Pences_Plano.criarCorpo(documentInterface);
};


Basica_Pences_Plano.generatePreview = function(documentInterface, iconSize) {
    setDefaultValues(this,44);
    return Basica_Pences_Plano.criarCorpo(documentInterface);
};


Basica_Pences_Plano.criarCorpo = function(documentInterface) {

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

Basica_Pences_Plano.frente = function() {
    cinturaX = this.cintura/4+this.margVest+3-1; // 3cm de pence e -1 para grudar ao corpo
    cinturaY = this.altQuadril;
    quadrilX = this.quadril/4+this.margVest;
    quadrilY = 0;
    largura = this.busto/4+this.margVest;
    ombro = this.ombro;
    golaH = ombro/2+2;
    golaV = ombro/2;
    cavaV = this.largBraco/2+4;
    comprimento = this.altQuadril+this.altCorpo+3;
    lcV = comprimento-golaV;

    // linha central
    addLine(this,-2,0,-2,lcV);
    // gola
    addSpline( this,-2,lcV, 
                    golaH*4/10,lcV,
                    golaH,comprimento-golaV*8/10,
                    golaH,comprimento);
    // ombro
    compX = Math.sqrt(Math.pow(ombro,2)-Math.pow(4,2));
    addLine(this,golaH,comprimento,golaH+compX,comprimento-4);
    // cava 
    addSpline( this,golaH+compX,comprimento-4, 
                    golaH+compX-1.3,comprimento-cavaV/2.2,
                    golaH+compX-4,comprimento-4-cavaV-1,
                    largura,comprimento-4-cavaV);
    // pence lateral
    vx = this.sepBusto/2+2.5;
    vy = comprimento-(this.altBusto+2.5);
    sx = largura;
    sy = comprimento-4-cavaV;
    ix = cinturaX+0.3;
    iy = this.altQuadril+2;
    m1 = (sy-iy)/(sx-ix);
    m2 = -(sx-ix)/(sy-iy);
    cx = (m1*ix-m2*vx+vy-iy)/(m1-m2)+1; // 1cm de compensação da pence
    cy = m2*(cx-vx)+vy;
    addLine(this,vx,vy,cx,cy);
    vux = (cx-ix)/Math.sqrt(Math.pow(cx-ix,2)+Math.pow(cy-iy,2));
    vuy = (cy-iy)/Math.sqrt(Math.pow(cx-ix,2)+Math.pow(cy-iy,2));
    tix = cx-vux*1.5;
    tiy = cy-vuy*1.5;
    addLine(this,vx,vy,tix,tiy);
    vux = (cx-sx)/Math.sqrt(Math.pow(cx-sx,2)+Math.pow(cy-sy,2));
    vuy = (cy-sy)/Math.sqrt(Math.pow(cx-sx,2)+Math.pow(cy-sy,2));
    tix = cx-vux*1.5;
    tiy = cy-vuy*1.5;
    addLine(this,vx,vy,tix,tiy);
    // pence-cava e pence-cintura
    addLine(this,cx,cy,sx,sy);
    addLine(this,cx,cy,ix,iy);
    //pence vertical
    vertSupX = this.sepBusto/2;
    vertSupY = comprimento-(this.altBusto+4); // 
    vertInfX = this.sepBusto/2;
    vertInfY = cinturaY-(vertSupY-cinturaY);
    addLine(this,vertSupX,vertSupY,vertInfX,vertInfY);
    addLine(this,vertSupX,vertSupY,(vertSupX+vertInfX)/2-1.5,(vertSupY+vertInfY)/2);
    addLine(this,vertSupX,vertSupY,(vertSupX+vertInfX)/2+1.5,(vertSupY+vertInfY)/2);
    addLine(this,vertInfX,vertInfY,(vertSupX+vertInfX)/2-1.5,(vertSupY+vertInfY)/2);
    addLine(this,vertInfX,vertInfY,(vertSupX+vertInfX)/2+1.5,(vertSupY+vertInfY)/2);

    // curva da cintura
    addSpline( this,cinturaX+0.3,cinturaY+2,
                    cinturaX-1.0,cinturaY-6,
                    quadrilX+0.6,6, 
                    quadrilX,0);  
    // linha inferior da camisa
    addLine(this,   quadrilX,0,-2,0);                     
    // tabela de medidas e descrição
    addTable(this,2,20,"CAMISA - FRENTE"+"\n\n"+this.table());

}

Basica_Pences_Plano.costas = function() {

    cinturaX = this.cintura/4+this.margVest+3-1; // 3cm de pence e -1 para grudar ao corpo
    cinturaY = this.altQuadril;
    quadrilX = this.quadril/4+this.margVest;
    quadrilY = 0;
    largura = this.busto/4+this.margVest;
    ombro = this.ombro;
    golaH = ombro/2+2;
    golaV = 2;
    cavaV = this.largBraco/2+4;
    comprimento = this.altQuadril+this.altCorpo;
    lcV = comprimento-golaV;

    // linha central
    addLine(this,0,0,0,lcV);
    // gola
    addSpline( this,0,lcV, 
                    golaH*4/10,lcV,
                    golaH,comprimento-golaV*8/10,
                    golaH,comprimento);
    // ombro
    compX = Math.sqrt(Math.pow(ombro,2)-Math.pow(4,2));
    addLine(this,golaH,comprimento,golaH+compX,comprimento-4);
    // cava 
    addSpline( this,golaH+compX,comprimento-4, 
                    golaH+compX-0.8,comprimento-cavaV/2.2,
                    golaH+compX-2.3,comprimento-4-cavaV-1,
                    largura,comprimento-4-cavaV);
    //pence vertical
    vertSupX = this.sepBusto/2;
    vertSupY = comprimento-(cavaV+4)-2; // 
    vertInfX = this.sepBusto/2;
    vertInfY = cinturaY-(vertSupY-cinturaY);
    addLine(this,vertSupX,vertSupY,vertInfX,vertInfY);
    addLine(this,vertSupX,vertSupY,(vertSupX+vertInfX)/2-1.5,(vertSupY+vertInfY)/2);
    addLine(this,vertSupX,vertSupY,(vertSupX+vertInfX)/2+1.5,(vertSupY+vertInfY)/2);
    addLine(this,vertInfX,vertInfY,(vertSupX+vertInfX)/2-1.5,(vertSupY+vertInfY)/2);
    addLine(this,vertInfX,vertInfY,(vertSupX+vertInfX)/2+1.5,(vertSupY+vertInfY)/2);
    // cava-cintura
    addLine(this,largura,comprimento-4-cavaV,cinturaX+0.3,cinturaY+2);
    // curva da cintura
    addSpline( this,cinturaX+0.3,cinturaY+2,
                    cinturaX-1.0,cinturaY-6,
                    quadrilX+0.6,6, 
                    quadrilX,0);   
    // linha inferior da camisa
    addLine(this,   quadrilX,0,0,0);                     
    // tabela de medidas e descrição
    addTable(this,2,20,"CAMISA - COSTAS"+"\n\n"+this.table());
}

Basica_Pences_Plano.table = function(){
    table = "Tecido: "+this.tecido+"\n";
    table += "Modelagem: feminina\n";
    table += "\nAlt. Corpo: "+this.altCorpo.toFixed(2)+"\n";
    table += "Alt. Busto: "+this.altBusto.toFixed(2)+"\n";
    table += "Busto: "+this.busto.toFixed(2)+"\n";
    table += "Cintura: "+this.cintura.toFixed(2)+"\n";
    table += "Larg. Braço: "+this.largBraco.toFixed(2)+"\n";
    table += "Ombro: "+this.ombro.toFixed(2)+"\n";
    table += "Quadril: "+this.quadril.toFixed(2)+"\n";
    table += "Marg. Vest: "+this.margVest.toFixed(2)+"\n";
    return table;
}







