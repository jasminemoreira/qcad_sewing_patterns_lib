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
// BaseCorpo.js
//! [include]
// library.js contains some convenience functions like 'isNull':
include("scripts/library.js");
//! [include]

function BaseCorpo() {

}
//! [init]
BaseCorpo.init = function(formWidget) {
    if (!isNull(formWidget)) {
        BaseCorpo.widgets = getWidgets(formWidget);
    }
};
//! [init]
//! [generate]
BaseCorpo.generate = function(documentInterface, file) {
    BaseCorpo.factor = 1;
    BaseCorpo.ombro = parseFloat(BaseCorpo.widgets["Ombro"].text);
    if (isNaN(BaseCorpo.ombro)) {
        BaseCorpo.busto = 13;
    }
    BaseCorpo.busto = parseFloat(BaseCorpo.widgets["Busto"].text);
    if (isNaN(BaseCorpo.busto)) {
        BaseCorpo.busto = 123;
    }
    BaseCorpo.cintura = parseFloat(BaseCorpo.widgets["Cintura"].text);
    if (isNaN(BaseCorpo.cintura)) {
        BaseCorpo.cintura = 106;
    }
    BaseCorpo.quadril = parseFloat(BaseCorpo.widgets["Quadril"].text);
    if (isNaN(BaseCorpo.quadril)) {
        BaseCorpo.quadril = 116;
    }
    BaseCorpo.altCorpo = parseFloat(BaseCorpo.widgets["AltCorpo"].text);
    if (isNaN(BaseCorpo.altCorpo)) {
        BaseCorpo.altCorpo = 41;
    }
    BaseCorpo.altQuadril = parseFloat(BaseCorpo.widgets["AltQuadril"].text);
    if (isNaN(BaseCorpo.altQuadril)) {
        BaseCorpo.altQuadril = 29;
    }
    BaseCorpo.compSaia = parseFloat(BaseCorpo.widgets["CompSaia"].text);
    if (isNaN(BaseCorpo.compSaia)) {
        BaseCorpo.compSaia = 71;
    }
    BaseCorpo.largBraco = parseFloat(BaseCorpo.widgets["LargBraco"].text);
    if (isNaN(BaseCorpo.largBraco)) {
        BaseCorpo.largBraco = 34.5;
    }
    BaseCorpo.altBusto = parseFloat(BaseCorpo.widgets["AltBusto"].text);
    if (isNaN(BaseCorpo.altBusto)) {
        BaseCorpo.altBusto = 28;
    }
    BaseCorpo.sepBusto = parseFloat(BaseCorpo.widgets["SepBusto"].text);
    if (isNaN(BaseCorpo.sepBusto)) {
        BaseCorpo.sepBusto = 30;
    }
    // Tecido Plano
    if(BaseCorpo.widgets["Plano"].checked){
        BaseCorpo.tecido = "tecido plano";
        BaseCorpo.widgets["Modelagem"].enabled = false;
        BaseCorpo.widgets["Elasticidade"].enabled = false;
        BaseCorpo.margVest = 2.0;
    }
    // Compensação de malha
    if(BaseCorpo.widgets["Malha"].checked){
        BaseCorpo.tecido = "malha";
        BaseCorpo.widgets["Modelagem"].enabled = true;
        BaseCorpo.widgets["Elasticidade"].enabled = true;
        BaseCorpo.margVest = 0.5;

        if(BaseCorpo.widgets["Justa"].checked){
            BaseCorpo.modelagem = "justa";
            if(BaseCorpo.widgets["Baixa"].checked){
                BaseCorpo.elasticidade = "baixa";
                BaseCorpo.ombro  = BaseCorpo.ombro*0.9;
                BaseCorpo.busto  = BaseCorpo.busto*0.9;
                BaseCorpo.cintura  = BaseCorpo.cintura*0.9;
                BaseCorpo.quadril  = BaseCorpo.quadril*0.9;
                BaseCorpo.altCorpo = BaseCorpo.altCorpo-1;
                BaseCorpo.altQuadril = BaseCorpo.altQuadril-0.5;
                BaseCorpo.compSaia = BaseCorpo.compSaia-1;
                BaseCorpo.largBraco = BaseCorpo.largBraco-1;
                BaseCorpo.altBusto = BaseCorpo.altBusto-0.5;
                BaseCorpo.sepBusto = BaseCorpo.sepBusto*0.9;
            }
            if(BaseCorpo.widgets["Media"].checked){
                BaseCorpo.elasticidade = "média";
                BaseCorpo.ombro  = BaseCorpo.ombro*0.8;
                BaseCorpo.busto  = BaseCorpo.busto*0.8;
                BaseCorpo.cintura  = BaseCorpo.cintura*0.8;
                BaseCorpo.quadril  = BaseCorpo.quadril*0.8;
                BaseCorpo.altCorpo = BaseCorpo.altCorpo-2;
                BaseCorpo.altQuadril = BaseCorpo.altQuadril-1;
                BaseCorpo.compSaia = BaseCorpo.compSaia-2;
                BaseCorpo.largBraco = BaseCorpo.largBraco-2;
                BaseCorpo.altBusto = BaseCorpo.altBusto-1;
                BaseCorpo.sepBusto = BaseCorpo.sepBusto*0.8;
            }
            if(BaseCorpo.widgets["Alta"].checked){
                BaseCorpo.elasticidade = "alta";
                BaseCorpo.ombro  = BaseCorpo.ombro*0.7;
                BaseCorpo.busto  = BaseCorpo.busto*0.7;
                BaseCorpo.cintura  = BaseCorpo.cintura*0.7;
                BaseCorpo.quadril  = BaseCorpo.quadril*0.7;
                BaseCorpo.altCorpo = BaseCorpo.altCorpo-3.5;
                BaseCorpo.altQuadril = BaseCorpo.altQuadril-1.5;
                BaseCorpo.compSaia = BaseCorpo.compSaia-3;
                BaseCorpo.largBraco = BaseCorpo.largBraco-3;
                BaseCorpo.altBusto = BaseCorpo.altBusto-1.5;
                BaseCorpo.sepBusto = BaseCorpo.sepBusto*0.7;
            }
        }
        if(BaseCorpo.widgets["Folgada"].checked){
            BaseCorpo.modelagem = "folgada";
            if(BaseCorpo.widgets["Baixa"].checked){
                BaseCorpo.elasticidade = "baixa";
                BaseCorpo.ombro  = BaseCorpo.ombro*0.95;
                BaseCorpo.busto  = BaseCorpo.busto*0.95;
                BaseCorpo.cintura  = BaseCorpo.cintura*0.95;
                BaseCorpo.quadril  = BaseCorpo.quadril*0.95;
                BaseCorpo.altCorpo = BaseCorpo.altCorpo-1;
                BaseCorpo.altQuadril = BaseCorpo.altQuadril-0.5;
                BaseCorpo.compSaia = BaseCorpo.compSaia-1;
                BaseCorpo.largBraco = BaseCorpo.largBraco-1;
                BaseCorpo.altBusto = BaseCorpo.altBusto-0.5;
                BaseCorpo.sepBusto = BaseCorpo.sepBusto*0.95;
            }
            if(BaseCorpo.widgets["Media"].checked){
                BaseCorpo.elasticidade = "média";
                BaseCorpo.ombro  = BaseCorpo.ombro*0.9;
                BaseCorpo.busto  = BaseCorpo.busto*0.9;
                BaseCorpo.cintura  = BaseCorpo.cintura*0.9;
                BaseCorpo.quadril  = BaseCorpo.quadril*0.9;
                BaseCorpo.altCorpo = BaseCorpo.altCorpo-2;
                BaseCorpo.altQuadril = BaseCorpo.altQuadril-1;
                BaseCorpo.compSaia = BaseCorpo.compSaia-2;
                BaseCorpo.largBraco = BaseCorpo.largBraco-2;
                BaseCorpo.altBusto = BaseCorpo.altBusto-1;
                BaseCorpo.sepBusto = BaseCorpo.sepBusto*0.9;
            }
            if(BaseCorpo.widgets["Alta"].checked){
                BaseCorpo.elasticidade = "alta";
                BaseCorpo.ombro  = BaseCorpo.ombro*0.85;
                BaseCorpo.busto  = BaseCorpo.busto*0.85;
                BaseCorpo.cintura  = BaseCorpo.cintura*0.85;
                BaseCorpo.quadril  = BaseCorpo.quadril*0.85;
                BaseCorpo.altCorpo = BaseCorpo.altCorpo-3.5;
                BaseCorpo.altQuadril = BaseCorpo.altQuadril-1.5;
                BaseCorpo.compSaia = BaseCorpo.compSaia-3;
                BaseCorpo.largBraco = BaseCorpo.largBraco-3;
                BaseCorpo.altBusto = BaseCorpo.altBusto-1.5;
                BaseCorpo.sepBusto = BaseCorpo.sepBusto*0.85;
            }
        }
    }
    return BaseCorpo.criarCorpo(documentInterface);
};
//! [generate]
//! [generatePreview]
BaseCorpo.generatePreview = function(documentInterface, iconSize) {
    BaseCorpo.ombro  = 13;
    BaseCorpo.busto  = 123;
    BaseCorpo.cintura  = 106;
    BaseCorpo.quadril  = 116;
    BaseCorpo.altCorpo = 41;
    BaseCorpo.altQuadril = 29;
    BaseCorpo.compSaia = 71;
    BaseCorpo.largBraco = 34.5;
    BaseCorpo.altBusto = 28;
    BaseCorpo.sepBusto = 30;
    BaseCorpo.margVest  = 0.5;
    BaseCorpo.factor = iconSize/(BaseCorpo.altCorpo+BaseCorpo.compSaia);
    return BaseCorpo.criarCorpo(documentInterface);
};
//! [generatePreview]
//! [createCuttingOut]
BaseCorpo.criarCorpo = function(documentInterface) {
    var addOperation = new RAddObjectsOperation(false);
    var doc = documentInterface.getDocument()
    // Quadro básico
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(0, 0), new RVector(0, (BaseCorpo.altCorpo+BaseCorpo.compSaia)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(0, 0), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor, 0))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(0, (BaseCorpo.compSaia+BaseCorpo.altCorpo)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor, (BaseCorpo.compSaia+BaseCorpo.altCorpo)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor, (BaseCorpo.compSaia+BaseCorpo.altCorpo)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor, 0))));
    // Cintura
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(0, BaseCorpo.compSaia*BaseCorpo.factor), new RVector((BaseCorpo.cintura/4+BaseCorpo.margVest)*BaseCorpo.factor, BaseCorpo.compSaia*BaseCorpo.factor)))); 
    // Quadril
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(0, (BaseCorpo.compSaia-BaseCorpo.altQuadril)*BaseCorpo.factor), new RVector((BaseCorpo.quadril/4+BaseCorpo.margVest)*BaseCorpo.factor, (BaseCorpo.compSaia-BaseCorpo.altQuadril)*BaseCorpo.factor))));     
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.quadril/4+BaseCorpo.margVest)*BaseCorpo.factor, 0), new RVector((BaseCorpo.quadril/4+BaseCorpo.margVest)*BaseCorpo.factor, 1))));     
    // Gola largura
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(BaseCorpo.ombro/2, (BaseCorpo.altCorpo+BaseCorpo.compSaia-0.5)*BaseCorpo.factor), new RVector(BaseCorpo.ombro/2, (BaseCorpo.altCorpo+BaseCorpo.compSaia+0.5)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(BaseCorpo.ombro/2+1, (BaseCorpo.altCorpo+BaseCorpo.compSaia-0.5)*BaseCorpo.factor), new RVector(BaseCorpo.ombro/2+1, (BaseCorpo.altCorpo+BaseCorpo.compSaia+0.5)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(BaseCorpo.ombro/2+2, (BaseCorpo.altCorpo+BaseCorpo.compSaia-0.5)*BaseCorpo.factor), new RVector(BaseCorpo.ombro/2+2, (BaseCorpo.altCorpo+BaseCorpo.compSaia+0.5)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(BaseCorpo.ombro/2+3, (BaseCorpo.altCorpo+BaseCorpo.compSaia-0.5)*BaseCorpo.factor), new RVector(BaseCorpo.ombro/2+3, (BaseCorpo.altCorpo+BaseCorpo.compSaia+0.5)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(BaseCorpo.ombro/2+4, (BaseCorpo.altCorpo+BaseCorpo.compSaia-0.5)*BaseCorpo.factor), new RVector(BaseCorpo.ombro/2+4, (BaseCorpo.altCorpo+BaseCorpo.compSaia+0.5)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(BaseCorpo.ombro/2+5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-0.5)*BaseCorpo.factor), new RVector(BaseCorpo.ombro/2+5, (BaseCorpo.altCorpo+BaseCorpo.compSaia+0.5)*BaseCorpo.factor))));
    // Gola altura
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(-0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-2)*BaseCorpo.factor), new RVector(0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-2)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(-0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2)*BaseCorpo.factor), new RVector(0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(-0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2-1)*BaseCorpo.factor), new RVector(0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2-1)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(-0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2-2)*BaseCorpo.factor), new RVector(0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2-2)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(-0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2-3)*BaseCorpo.factor), new RVector(0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2-3)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(-0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2-4)*BaseCorpo.factor), new RVector(0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2-4)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(-0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2-5)*BaseCorpo.factor), new RVector(0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2-5)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector(-0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2-6)*BaseCorpo.factor), new RVector(0.5, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.ombro/2-6)*BaseCorpo.factor))));
    // Cava referência superior
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.8, (BaseCorpo.compSaia+BaseCorpo.altCorpo)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.8, (BaseCorpo.compSaia+BaseCorpo.altCorpo)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-1)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-1)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-2)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-2)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-3)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-3)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-4)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-4)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.8, (BaseCorpo.compSaia+BaseCorpo.altCorpo-5)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.8, (BaseCorpo.compSaia+BaseCorpo.altCorpo-5)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-6)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-6)*BaseCorpo.factor))));
    //addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-7)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-7)*BaseCorpo.factor))));
    //addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-8)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-8)*BaseCorpo.factor))));
    //addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-9)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-9)*BaseCorpo.factor))));
    //addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-10)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-10)*BaseCorpo.factor))));

    // Cava referência inferior (soma 1/2 larg. braço)
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.8, (BaseCorpo.compSaia+BaseCorpo.altCorpo-BaseCorpo.largBraco/2)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.8, (BaseCorpo.compSaia+BaseCorpo.altCorpo-BaseCorpo.largBraco/2)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-1-BaseCorpo.largBraco/2)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-1-BaseCorpo.largBraco/2)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-2-BaseCorpo.largBraco/2)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-2-BaseCorpo.largBraco/2)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-3-BaseCorpo.largBraco/2)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-3-BaseCorpo.largBraco/2)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-4-BaseCorpo.largBraco/2)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-4-BaseCorpo.largBraco/2)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.8, (BaseCorpo.compSaia+BaseCorpo.altCorpo-5-BaseCorpo.largBraco/2)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.8, (BaseCorpo.compSaia+BaseCorpo.altCorpo-5-BaseCorpo.largBraco/2)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-6-BaseCorpo.largBraco/2)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-6-BaseCorpo.largBraco/2)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-7-BaseCorpo.largBraco/2)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-7-BaseCorpo.largBraco/2)*BaseCorpo.factor))));   
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-8-BaseCorpo.largBraco/2)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-8-BaseCorpo.largBraco/2)*BaseCorpo.factor)))); 
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-9-BaseCorpo.largBraco/2)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.5, (BaseCorpo.compSaia+BaseCorpo.altCorpo-9-BaseCorpo.largBraco/2)*BaseCorpo.factor))));     
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor-0.8, (BaseCorpo.compSaia+BaseCorpo.altCorpo-10-BaseCorpo.largBraco/2)*BaseCorpo.factor), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest)*BaseCorpo.factor+0.8, (BaseCorpo.compSaia+BaseCorpo.altCorpo-10-BaseCorpo.largBraco/2)*BaseCorpo.factor))));     
    // Linhas auxiliares para volume 15cm, 20cm, 1/4 Quadril
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest+15)*BaseCorpo.factor, 0), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest+15)*BaseCorpo.factor, 10*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest+20)*BaseCorpo.factor, 0), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest+20)*BaseCorpo.factor, 10*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.busto/4+BaseCorpo.margVest+BaseCorpo.quadril/4)*BaseCorpo.factor, 0), new RVector((BaseCorpo.busto/4+BaseCorpo.margVest+BaseCorpo.quadril/4)*BaseCorpo.factor, 12*BaseCorpo.factor))));
    // Referência do seio
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.sepBusto/2-0.5)*BaseCorpo.factor, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.altBusto)*BaseCorpo.factor), new RVector((BaseCorpo.sepBusto/2+0.5)*BaseCorpo.factor, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.altBusto)*BaseCorpo.factor))));
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.sepBusto/2)*BaseCorpo.factor, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.altBusto-0.5)*BaseCorpo.factor), new RVector((BaseCorpo.sepBusto/2)*BaseCorpo.factor, (BaseCorpo.altCorpo+BaseCorpo.compSaia-BaseCorpo.altBusto+0.5)*BaseCorpo.factor))));    
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.sepBusto/2)*BaseCorpo.factor, (BaseCorpo.compSaia-0.5)*BaseCorpo.factor), new RVector((BaseCorpo.sepBusto/2)*BaseCorpo.factor, (BaseCorpo.compSaia+0.5)*BaseCorpo.factor)))); 
    addOperation.addObject(new RLineEntity(doc, new RLineData(new RVector((BaseCorpo.sepBusto/2)*BaseCorpo.factor, (BaseCorpo.compSaia-BaseCorpo.altQuadril-0.5)*BaseCorpo.factor), new RVector((BaseCorpo.sepBusto/2)*BaseCorpo.factor, (BaseCorpo.compSaia-BaseCorpo.altQuadril+0.5)*BaseCorpo.factor))));    
    // Tabela de medidas
    table  = "Tecido: "+BaseCorpo.tecido+"\n";
    if(BaseCorpo.tecido=="malha"){
        table += "Modelagem: "+BaseCorpo.modelagem+"\n";
        table += "Elasticidade: "+BaseCorpo.elasticidade+"\n";
    }
    table += "\nAlt. Busto: "+BaseCorpo.altBusto.toFixed(2)+"\n";
    table += "Alt. Corpo: "+BaseCorpo.altCorpo.toFixed(2)+"\n";
    table += "Alt. Quadril: "+BaseCorpo.altQuadril.toFixed(2)+"\n";
    table += "Busto: "+BaseCorpo.busto.toFixed(2)+"\n";
    table += "Cintura: "+BaseCorpo.cintura.toFixed(2)+"\n";
    table += "Comp. Saia: "+BaseCorpo.compSaia.toFixed(2)+"\n";
    table += "Larg. Braço: "+BaseCorpo.largBraco.toFixed(2)+"\n";
    table += "Ombro: "+BaseCorpo.ombro.toFixed(2)+"\n";
    table += "Quadril: "+BaseCorpo.quadril.toFixed(2)+"\n";
    table += "Sep. Busto: "+BaseCorpo.sepBusto.toFixed(2)+"\n";
    table += "Marg. Vest: "+BaseCorpo.margVest.toFixed(2)+"\n";
    var textData = new RTextData(new RVector(2,10),new RVector(2,10),0.4,0.4,0,0,0,0,1,table,"Arial",false,false,0,false);
    addOperation.addObject(new RTextEntity(doc,textData));

    return addOperation;
};
//! [createCuttingOut]

