setDefaultValues = function(obj,num){
    // medidas padrão 
    idx = (num-36)/2;
    obj.busto =             medidas[idx][ 1][1];
    obj.cintura =           medidas[idx][ 2][1]; 
    obj.quadril =           medidas[idx][ 3][1];
    obj.altCorpo =          medidas[idx][ 4][1];
    obj.largBraco =         medidas[idx][ 5][1];
    obj.largCostas =        medidas[idx][ 6][1]; 
    obj.ombro  =            medidas[idx][ 7][1];
    obj.altCava =           medidas[idx][ 8][1];
    obj.altBusto =          medidas[idx][ 9][1];
    obj.sepBusto =          medidas[idx][10][1];
    obj.compMangaComprida = medidas[idx][11][1];
    obj.compMangaCurta =    medidas[idx][12][1];
    obj.punhoCamisa =       medidas[idx][13][1];
    obj.punhoBlazer =       medidas[idx][14][1];
    obj.altQuadril =        medidas[idx][15][1];
    obj.altGancho =         medidas[idx][16][1];
    obj.altJoelho =         medidas[idx][17][1];
    obj.altCalca =          medidas[idx][18][1];
    obj.largJoelho =        medidas[idx][19][1];
    obj.largTornozelo =     medidas[idx][20][1];
}

setDefaultFormValues = function(obj){

    if (typeof obj.widgets["Busto"] !== 'undefined') {
        obj.widgets["Busto"].text = obj.busto.toFixed(2);
    }
    if (typeof obj.widgets["Cintura"] !== 'undefined') {
        obj.widgets["Cintura"].text = obj.cintura.toFixed(2);
    }
    if (typeof obj.widgets["Quadril"] !== 'undefined') {
        obj.widgets["Quadril"].text = obj.quadril.toFixed(2);
    }
    if (typeof obj.widgets["AltCorpo"] !== 'undefined') {
        obj.widgets["AltCorpo"].text = obj.altCorpo.toFixed(2);
    }
    if (typeof obj.widgets["LargBraco"] !== 'undefined') {
        obj.widgets["LargBraco"].text = obj.largBraco.toFixed(2);
    } 
    if (typeof obj.widgets["LargCostas"] !== 'undefined') {
        obj.widgets["LargCostas"].text = obj.largCostas.toFixed(2);
    } 
    if (typeof obj.widgets["Ombro"] !== 'undefined') {
        obj.widgets["Ombro"].text = obj.ombro.toFixed(2);
    } 
    if (typeof obj.widgets["AltCava"] !== 'undefined') {
        obj.widgets["AltCava"].text = obj.altCava.toFixed(2);
    }
    if (typeof obj.widgets["AltBusto"] !== 'undefined') {
        obj.widgets["AltBusto"].text = obj.altBusto.toFixed(2);
    }
    if (typeof obj.widgets["SepBusto"] !== 'undefined') {
        obj.widgets["SepBusto"].text = obj.sepBusto.toFixed(2);
    }  
    if (typeof obj.widgets["CompMangaComprida"] !== 'undefined') {
        obj.widgets["CompMangaComprida"].text = obj.compMangaComprida.toFixed(2);
    }
    if (typeof obj.widgets["CompMangaCurta"] !== 'undefined') {
        obj.widgets["CompMangaCurta"].text = obj.compMangaCurta.toFixed(2);
    } 
    // casos nos quais a manga pode ser curta ou comprida
    if (typeof obj.widgets["CompManga"] !== 'undefined') {
        obj.widgets["CompManga"].text = obj.compManga.toFixed(2);
    } 
    if (typeof obj.widgets["PunhoCamisa"] !== 'undefined') {
        obj.widgets["PunhoCamisa"].text = obj.punhoCamisa.toFixed(2);
    }
    if (typeof obj.widgets["PunhoBlazer"] !== 'undefined') {
        obj.widgets["PunhoBlazer"].text = obj.punhoBlazer.toFixed(2);
    }
    if (typeof obj.widgets["AltQuadril"] !== 'undefined') {
        obj.widgets["AltQuadril"].text = obj.altQuadril.toFixed(2);
    }
    if (typeof obj.widgets["AltGancho"] !== 'undefined') {
        obj.widgets["AltGancho"].text = obj.altGancho.toFixed(2);
    }
    if (typeof obj.widgets["AltJoelho"] !== 'undefined') {
        obj.widgets["AltJoelho"].text = obj.altJoelho.toFixed(2);
    }
    if (typeof obj.widgets["AltCalca"] !== 'undefined') {
        obj.widgets["AltCalca"].text = obj.altCalca.toFixed(2);
    }
    if (typeof obj.widgets["LargJoelho"] !== 'undefined') {
        obj.widgets["LargJoelho"].text = obj.largJoelho.toFixed(2);
    }
    if (typeof obj.widgets["LargTornozelo"] !== 'undefined') {
        obj.widgets["LargTornozelo"].text = obj.largTornozelo.toFixed(2);
    }
    // Medidas específicas da peça
    if (typeof obj.widgets["CompSaia"] !== 'undefined') {
        obj.widgets["CompSaia"].text = obj.altJoelho.toFixed(2);
    }
    if (typeof obj.widgets["AltBaseBusto"] !== 'undefined') {
        obj.widgets["AltBaseBusto"].text = obj.altBaseBusto.toFixed(2);
    }
}

readFormValues = function(obj){

    if (typeof obj.widgets["Tamanho"] !== 'undefined') {
        obj.tamanho = obj.widgets["Tamanho"].currentText;
    }

    if (typeof obj.widgets["Busto"] !== 'undefined') {
        obj.busto = parseFloat(obj.widgets["Busto"].text);
        if (isNaN(obj.busto)) {
            obj.busto = 0;
        }
    }
    if (typeof obj.widgets["Cintura"] !== 'undefined') {
        obj.cintura = parseFloat(obj.widgets["Cintura"].text);
        if (isNaN(obj.cintura)) {
            obj.cintura = 0;
        }
    }
    if (typeof obj.widgets["Quadril"] !== 'undefined') {
        obj.quadril = parseFloat(obj.widgets["Quadril"].text);
        if (isNaN(obj.quadril)) {
            obj.quadril = 0;
        }
    }
    if (typeof obj.widgets["AltCorpo"] !== 'undefined') {
        obj.altCorpo = parseFloat(obj.widgets["AltCorpo"].text);
        if (isNaN(obj.altCorpo)) {
            obj.altCorpo = 0;
        }
    }
    if (typeof obj.widgets["LargBraco"] !== 'undefined') {
        obj.largBraco = parseFloat(obj.widgets["LargBraco"].text);
        if (isNaN(obj.largBraco)) {
            obj.largBraco = 0;
        }
    } 
    if (typeof obj.widgets["LargCostas"] !== 'undefined') {
        obj.largCostas = parseFloat(obj.widgets["LargCostas"].text);
        if (isNaN(obj.largCostas)) {
            obj.largCostas = 0;
        }
    } 
    if (typeof obj.widgets["Ombro"] !== 'undefined') {
        obj.ombro = parseFloat(obj.widgets["Ombro"].text);
        if (isNaN(obj.ombro)) {
            obj.ombro = 0;
        }
    } 
    if (typeof obj.widgets["AltCava"] !== 'undefined') {
        obj.altCava = parseFloat(obj.widgets["AltCava"].text);
        if (isNaN(obj.altCava)) {
            obj.altCava = 0;
        }
    }
    if (typeof obj.widgets["AltBusto"] !== 'undefined') {
        obj.altBusto = parseFloat(obj.widgets["AltBusto"].text);
        if (isNaN(obj.altBusto)) {
            obj.altBusto = 0;
        }
    }
    if (typeof obj.widgets["SepBusto"] !== 'undefined') {
        obj.sepBusto = parseFloat(obj.widgets["SepBusto"].text);
        if (isNaN(obj.sepBusto)) {
            obj.sepBusto = 0;
        }
    }    
    if (typeof obj.widgets["CompMangaComprida"] !== 'undefined') {
        obj.compMangaComprida = parseFloat(obj.widgets["CompMangaComprida"].text);
        if (isNaN(obj.compMangaComprida)) {
            obj.compMangaComprida = 0;
        }
    }
    if (typeof obj.widgets["CompMangaCurta"] !== 'undefined') {
        obj.compMangaCurta = parseFloat(obj.widgets["CompMangaCurta"].text);
        if (isNaN(obj.compMangaCurta)) {
            obj.compMangaCurta = 0;
        }
    }
    // casos onde há manga comprida ou curta
    if (typeof obj.widgets["CompManga"] !== 'undefined') {
        obj.compManga = parseFloat(obj.widgets["CompManga"].text);
        if (isNaN(obj.compManga)) {
            obj.compManga = 0;
        }
    }
    if (typeof obj.widgets["PunhoCamisa"] !== 'undefined') {
        obj.punhoCamisa = parseFloat(obj.widgets["PunhoCamisa"].text);
        if (isNaN(obj.punhoCamisa)) {
            obj.punhoCamisa = 0;
        }
    }    
    if (typeof obj.widgets["PunhoBlazer"] !== 'undefined') {
        obj.punhoBlazer = parseFloat(obj.widgets["PunhoBlazer"].text);
        if (isNaN(obj.punhoBlazer)) {
            obj.punhoBlazer = 0;
        }
    }
    if (typeof obj.widgets["AltQuadril"] !== 'undefined') {
        obj.altQuadril = parseFloat(obj.widgets["AltQuadril"].text);
        if (isNaN(obj.altQuadril)) {
            obj.altQuadril = 0;
        }
    }
    if (typeof obj.widgets["AltGancho"] !== 'undefined') {
        obj.altGancho = parseFloat(obj.widgets["AltGancho"].text);
        if (isNaN(obj.altGancho)) {
            obj.altGancho = 0;
        }
    }
    if (typeof obj.widgets["AltJoelho"] !== 'undefined') {
        obj.altJoelho = parseFloat(obj.widgets["AltJoelho"].text);
        if (isNaN(obj.altJoelho)) {
            obj.altJoelho = 0;
        }
    }
    if (typeof obj.widgets["AltCalca"] !== 'undefined') {
        obj.altCalca = parseFloat(obj.widgets["AltCalca"].text);
        if (isNaN(obj.altCalca)) {
            obj.altCalca = 0;
        }
    }
    if (typeof obj.widgets["LargJoelho"] !== 'undefined') {
        obj.largJoelho = parseFloat(obj.widgets["LargJoelho"].text);
        if (isNaN(obj.largJoelho)) {
            obj.largJoelho = 0;
        }
    }
    if (typeof obj.widgets["LargTornozelo"] !== 'undefined') {
        obj.largTornozelo = parseFloat(obj.widgets["LargTornozelo"].text);
        if (isNaN(obj.largTornozelo)) {
            obj.largTornozelo = 0;
        }
    }
    // parâmetros especícos para malha
    // modelagem, elasticidade, elasticidade no comprimento
    if (typeof obj.widgets["Justa"] !== 'undefined') {
        if(obj.widgets["Justa"].checked){
            obj.modelagem = "justa";
        }else{
            obj.modelagem = "folgada"; 
        }
    }
    if (typeof obj.widgets["Baixa"] !== 'undefined') {
        if(obj.widgets["Baixa"].checked){
            obj.elasticidade = "baixa";
        }
    }
    if (typeof obj.widgets["Media"] !== 'undefined') {
        if(obj.widgets["Media"].checked){
            obj.elasticidade = "média";
        }
    }
    if (typeof obj.widgets["Alta"] !== 'undefined') {
        if(obj.widgets["Alta"].checked){
            obj.elasticidade = "alta";
        }
    }
    if (typeof obj.widgets["LargComp"] !== 'undefined') {
        if(obj.widgets["LargComp"].checked){
            obj.elastComp = true;
        }else{
            obj.elastComp = false; 
        }
    }    
    // medidas específicas da peça
    if (typeof obj.widgets["CompSaia"] !== 'undefined') {
        obj.compSaia = parseFloat(obj.widgets["CompSaia"].text);
        if (isNaN(obj.compSaia)) {
            obj.compSaia = 0;
        }
    }
    if (typeof obj.widgets["AltBaseBusto"] !== 'undefined') {
        obj.altBaseBusto = parseFloat(obj.widgets["AltBaseBusto"].text);
        if (isNaN(obj.altBaseBusto)) {
            obj.altBaseBusto = 0;
        }
    }
}

addLine = function(obj,x1,y1,x2,y2) {
    p1 = new RVector(x1, y1);
    p2 = new RVector(x2, y2);
    p1 = p1.operator_add(new RVector(obj.xoff, obj.yoff));
    p2 = p2.operator_add(new RVector(obj.xoff, obj.yoff));
    obj.addOp.addObject(new RLineEntity(obj.doc, new RLineData(p1, p2)));
};
addCircle = function(obj,x,y,r) {
    p1 = new RVector(x,y);
    p1 = p1.operator_add(new RVector(obj.xoff, obj.yoff));
    obj.addOp.addObject(new RCircleEntity(obj.doc, new RCircleData(p1, r)));
};

addSpline = function(obj,x1,y1,x2,y2,x3,y3,x4,y4) {
    p1 = new RVector(x1, y1);
    p2 = new RVector(x2, y2);
    p3 = new RVector(x3, y3);
    p4 = new RVector(x4, y4);
    p1 = p1.operator_add(new RVector(obj.xoff, obj.yoff));
    p2 = p2.operator_add(new RVector(obj.xoff, obj.yoff));  
    p3 = p3.operator_add(new RVector(obj.xoff, obj.yoff));
    p4 = p4.operator_add(new RVector(obj.xoff, obj.yoff));      
    var cavaData = new RSplineData();
    cavaData.appendControlPoint(p1);
    cavaData.appendControlPoint(p2);
    cavaData.appendControlPoint(p3);
    cavaData.appendControlPoint(p4);
    cavaData.isClosed = false;
    var cava = new RSplineEntity(obj.doc,cavaData);
    obj.addOp.addObject(cava);
};

addTable = function(obj,x,y,table) {
    p1 = new RVector(x, y);
    p1 = p1.operator_add(new RVector(obj.xoff, obj.yoff));
    var textData = new RTextData(p1,p1,0.4,0.4,0,0,0,0,1,table,"Arial",false,false,0,false);
    obj.addOp.addObject(new RTextEntity(obj.doc,textData));
};

var medidas = [
               [
                  "36",
                   ["Busto",                82],
                   ["Cintura",              66],
                   ["Quadril",              88],
                   ["AltCorpo",             39],
                   ["LargBraco",            25],
                   ["largCostas",           34],
                   ["Ombro",                11],
                   ["AltCava",            16.5],
                   ["AltBusto",             22],
                   ["SepBusto",             16],
                   ["CompMangaComprida",    55],
                   ["CompMangaCurta",       16],
                   ["PunhoCamisa",          14],
                   ["PunhoBlazer",          25],
                   ["AltQuadril",           18],
                   ["AltGancho",            25],
                   ["AltJoelho",            52],
                   ["AltCalca",            100],
                   ["LargJoelho",           35],
                   ["LargTornozelo",        21]
               ],
               [
                  "38",
                   ["Busto",                86],
                   ["Cintura",              70],
                   ["Quadril",              92],
                   ["AltCorpo",             40],
                   ["LargBraco",            26],
                   ["largCostas",           35],
                   ["Ombro",              11.5],
                   ["AltCava",              17],
                   ["AltBusto",             23],
                   ["SepBusto",             17],
                   ["CompMangaComprida",    56],
                   ["CompMangaCurta",     16.5],
                   ["PunhoCamisa",        14.5],
                   ["PunhoBlazer",        25.5],
                   ["AltQuadril",           19],
                   ["AltGancho",            26],
                   ["AltJoelho",            53],
                   ["AltCalca",            101],
                   ["LargJoelho",           36],
                   ["LargTornozelo",      21.5]
               ],
               [
                  "40",
                   ["Busto",                90],
                   ["Cintura",              74],
                   ["Quadril",              96],
                   ["AltCorpo",             41],
                   ["LargBraco",            27],
                   ["largCostas",           36],
                   ["Ombro",                12],
                   ["AltCava",            17.5],
                   ["AltBusto",             24],
                   ["SepBusto",             18],
                   ["CompMangaComprida",    57],
                   ["CompMangaCurta",       17],
                   ["PunhoCamisa",          15],
                   ["PunhoBlazer",          26],
                   ["AltQuadril",           19],
                   ["AltGancho",            27],
                   ["AltJoelho",            54],
                   ["AltCalca",            102],
                   ["LargJoelho",           37],
                   ["LargTornozelo",        22]
               ],
               [
                  "42",
                   ["Busto",                94],
                   ["Cintura",              78],
                   ["Quadril",             100],
                   ["AltCorpo",             42],
                   ["LargBraco",            28],
                   ["largCostas",           37],
                   ["Ombro",              12.5],
                   ["AltCava",              18],
                   ["AltBusto",             25],
                   ["SepBusto",             19],
                   ["CompMangaComprida",    58],
                   ["CompMangaCurta",     17.5],
                   ["PunhoCamisa",        15.5],
                   ["PunhoBlazer",        26.5],
                   ["AltQuadril",           20],
                   ["AltGancho",            28],
                   ["AltJoelho",            55],
                   ["AltCalca",            103],
                   ["LargJoelho",           38],
                   ["LargTornozelo",      22.5]
               ],
               [
                  "44",
                   ["Busto",                98],
                   ["Cintura",              82],
                   ["Quadril",             104],
                   ["AltCorpo",             43],
                   ["LargBraco",            30],
                   ["largCostas",           38],
                   ["Ombro",                13],
                   ["AltCava",              19],
                   ["AltBusto",             26],
                   ["SepBusto",             20],
                   ["CompMangaComprida",  58.5],
                   ["CompMangaCurta",       18],
                   ["PunhoCamisa",          16],
                   ["PunhoBlazer",          27],
                   ["AltQuadril",           20],
                   ["AltGancho",            29],
                   ["AltJoelho",            55],
                   ["AltCalca",            104],
                   ["LargJoelho",           39],
                   ["LargTornozelo",        23]
               ],
               [
                  "46",
                   ["Busto",               102],
                   ["Cintura",              86],
                   ["Quadril",             108],
                   ["AltCorpo",             44],
                   ["LargBraco",            32],
                   ["largCostas",           39],
                   ["Ombro",              13.5],
                   ["AltCava",              20],
                   ["AltBusto",             27],
                   ["SepBusto",             21],
                   ["CompMangaComprida",    59],
                   ["CompMangaCurta",     18.5],
                   ["PunhoCamisa",        16.5],
                   ["PunhoBlazer",        27.5],
                   ["AltQuadril",           20],
                   ["AltGancho",            30],
                   ["AltJoelho",            56],
                   ["AltCalca",            105],
                   ["LargJoelho",           40],
                   ["LargTornozelo",      23.5]
               ],
               [
                  "48",
                   ["Busto",               106],
                   ["Cintura",              90],
                   ["Quadril",             112],
                   ["AltCorpo",             45],
                   ["LargBraco",            34],
                   ["largCostas",           39],
                   ["Ombro",                14],
                   ["AltCava",              21],
                   ["AltBusto",             28],
                   ["SepBusto",             22],
                   ["CompMangaComprida",  59.5],
                   ["CompMangaCurta",       19],
                   ["PunhoCamisa",          17],
                   ["PunhoBlazer",          28],
                   ["AltQuadril",           21],
                   ["AltGancho",            31],
                   ["AltJoelho",            56],
                   ["AltCalca",            106],
                   ["LargJoelho",           41],
                   ["LargTornozelo",        24]
               ],
               [
                  "50",
                   ["Busto",               110],
                   ["Cintura",              94],
                   ["Quadril",             116],
                   ["AltCorpo",             46],
                   ["LargBraco",            36],
                   ["largCostas",           40],
                   ["Ombro",              14.5],
                   ["AltCava",              22],
                   ["AltBusto",             29],
                   ["SepBusto",             23],
                   ["CompMangaComprida",    60],
                   ["CompMangaCurta",     19.5],
                   ["PunhoCamisa",        17.5],
                   ["PunhoBlazer",        28.5],
                   ["AltQuadril",           21],
                   ["AltGancho",            32],
                   ["AltJoelho",            57],
                   ["AltCalca",            107],
                   ["LargJoelho",           42],
                   ["LargTornozelo",      24.5]
               ],
               [
                  "52",
                   ["Busto",               114],
                   ["Cintura",              98],
                   ["Quadril",             120],
                   ["AltCorpo",             47],
                   ["LargBraco",            38],
                   ["largCostas",           40],
                   ["Ombro",                15],
                   ["AltCava",              23],
                   ["AltBusto",             30],
                   ["SepBusto",             24],
                   ["CompMangaComprida",  60.5],
                   ["CompMangaCurta",       20],
                   ["PunhoCamisa",          18],
                   ["PunhoBlazer",          29],
                   ["AltQuadril",           21],
                   ["AltGancho",            33],
                   ["AltJoelho",            57],
                   ["AltCalca",            108],
                   ["LargJoelho",           43],
                   ["LargTornozelo",        25]
               ],
               [
                  "54",
                   ["Busto",               118],
                   ["Cintura",             102],
                   ["Quadril",             124],
                   ["AltCorpo",             48],
                   ["LargBraco",            39],
                   ["largCostas",           41],
                   ["Ombro",              15.5],
                   ["AltCava",              24],
                   ["AltBusto",             31],
                   ["SepBusto",             25],
                   ["CompMangaComprida",    61],
                   ["CompMangaCurta",     20.5],
                   ["PunhoCamisa",        18.5],
                   ["PunhoBlazer",        29.5],
                   ["AltQuadril",           21],
                   ["AltGancho",            34],
                   ["AltJoelho",            58],
                   ["AltCalca",            110],
                   ["LargJoelho",           44],
                   ["LargTornozelo",      25.5]
               ],
               [
                  "56",
                   ["Busto",               122],
                   ["Cintura",             106],
                   ["Quadril",             128],
                   ["AltCorpo",             49],
                   ["LargBraco",            40],
                   ["largCostas",           42],
                   ["Ombro",                16],
                   ["AltCava",              25],
                   ["AltBusto",             32],
                   ["SepBusto",             26],
                   ["CompMangaComprida",  61.5],
                   ["CompMangaCurta",       21],
                   ["PunhoCamisa",          19],
                   ["PunhoBlazer",          30],
                   ["AltQuadril",           22],
                   ["AltGancho",            35],
                   ["AltJoelho",            59],
                   ["AltCalca",            112],
                   ["LargJoelho",           45],
                   ["LargTornozelo",        26]
               ],
               [
                  "58",
                   ["Busto",               126],
                   ["Cintura",             110],
                   ["Quadril",             132],
                   ["AltCorpo",             50],
                   ["LargBraco",            41],
                   ["largCostas",           43],
                   ["Ombro",              16.5],
                   ["AltCava",              26],
                   ["AltBusto",             33],
                   ["SepBusto",             27],
                   ["CompMangaComprida",    62],
                   ["CompMangaCurta",     21.5],
                   ["PunhoCamisa",        19.5],
                   ["PunhoBlazer",        30.5],
                   ["AltQuadril",           22],
                   ["AltGancho",            36],
                   ["AltJoelho",            60],
                   ["AltCalca",            114],
                   ["LargJoelho",           46],
                   ["LargTornozelo",      26.5]
               ],
               [
                  "60",
                   ["Busto",               130],
                   ["Cintura",             114],
                   ["Quadril",             136],
                   ["AltCorpo",             51],
                   ["LargBraco",            42],
                   ["largCostas",           44],
                   ["Ombro",                17],
                   ["AltCava",              27],
                   ["AltBusto",             34],
                   ["SepBusto",             28],
                   ["CompMangaComprida",  62.5],
                   ["CompMangaCurta",       22],
                   ["PunhoCamisa",          20],
                   ["PunhoBlazer",          31],
                   ["AltQuadril",           22],
                   ["AltGancho",            37],
                   ["AltJoelho",            61],
                   ["AltCalca",            116],
                   ["LargJoelho",           47],
                   ["LargTornozelo",        27]
               ],
               [
                  "62",
                   ["Busto",               134],
                   ["Cintura",             118],
                   ["Quadril",             140],
                   ["AltCorpo",             52],
                   ["LargBraco",            43],
                   ["largCostas",           45],
                   ["Ombro",              17.5],
                   ["AltCava",              28],
                   ["AltBusto",             35],
                   ["SepBusto",             29],
                   ["CompMangaComprida",    63],
                   ["CompMangaCurta",     22.5],
                   ["PunhoCamisa",        20.5],
                   ["PunhoBlazer",        31.5],
                   ["AltQuadril",           22],
                   ["AltGancho",            38],
                   ["AltJoelho",            62],
                   ["AltCalca",            118],
                   ["LargJoelho",           48],
                   ["LargTornozelo",      27.5]
               ]
             ];



ajusteMalha = function(obj,modelagem,elasticidade,elastComp){

    if(elastComp){
        if(modelagem === "justa"){
            obj.modelagem = "justa";
            if(elasticidade === "baixa"){
                obj.elasticidade = "baixa";
                obj.busto  = obj.busto*0.9;
                obj.cintura  = obj.cintura*0.9;
                obj.quadril  = obj.quadril*0.9;
                obj.altCorpo = obj.altCorpo-1;
                obj.largBraco = obj.largBraco-1;
                obj.largCostas = obj.largCostas*0.95;
                obj.ombro = obj.ombro*0.9;
                obj.altCava = obj.altCava-0.5;
                obj.altBusto = obj.altBusto-0.5;
                obj.sepBusto = obj.sepBusto*0.9;
                obj.compMangaComprida = obj.compMangaComprida-1;
                obj.compMangaCurta = obj.compMangaCurta-0.5;
                obj.punhoCamisa = obj.punhoCamisa*0.9;
                obj.punhoBlazer = obj.punhoBlazer*0.9;
                obj.altQuadril = obj.altQuadril-0.5;
                obj.altGancho = obj.altGancho-1;
                obj.altJoelho = obj.altJoelho-1;
                obj.altCalca = obj.altCalca-2; // comprimento cintura/tornozelo
                obj.largJoelho = obj.largJoelho*0.9;
                obj.largTornozelo = obj.largTornozelo*0.9;
            }
            if(elasticidade==="média"){
                obj.elasticidade = "média";
                obj.busto  = obj.busto*0.8;
                obj.cintura  = obj.cintura*0.8;
                obj.quadril  = obj.quadril*0.8;
                obj.altCorpo = obj.altCorpo-2;
                obj.largBraco = obj.largBraco-2;
                obj.largCostas = obj.largCostas*0.85;
                obj.ombro = obj.ombro*0.8;
                obj.altCava = obj.altCava-1;
                obj.altBusto = obj.altBusto-1;
                obj.sepBusto = obj.sepBusto*0.8;
                obj.compMangaComprida = obj.compMangaComprida-2;
                obj.compMangaCurta = obj.compMangaCurta-1;
                obj.punhoCamisa = obj.punhoCamisa*0.8;
                obj.punhoBlazer = obj.punhoBlazer*0.8;
                obj.altQuadril = obj.altQuadril-1;
                obj.altGancho = obj.altGancho-2;
                obj.altJoelho = obj.altJoelho-2;
                obj.altCalca = obj.altCalca-3; // comprimento cintura/tornozelo
                obj.largJoelho = obj.largJoelho*0.8;
                obj.largTornozelo = obj.largTornozelo*0.8;
            }
            if(elasticidade==="alta"){
                obj.elasticidade = "alta";
                obj.busto  = obj.busto*0.7;
                obj.cintura  = obj.cintura*0.7;
                obj.quadril  = obj.quadril*0.7;
                obj.altCorpo = obj.altCorpo-3.5;
                obj.largBraco = obj.largBraco-3;
                obj.largCostas = obj.largCostas*0.8;
                obj.ombro = obj.ombro*0.7;
                obj.altCava = obj.altCava-1.5;
                obj.altBusto = obj.altBusto-1.5;
                obj.sepBusto = obj.sepBusto*0.7;
                obj.compMangaComprida = obj.compMangaComprida-3;
                obj.compMangaCurta = obj.compMangaCurta-1.5;
                obj.punhoCamisa = obj.punhoCamisa*0.7;
                obj.punhoBlazer = obj.punhoBlazer*0.7;
                obj.altQuadril = obj.altQuadril-1.5;
                obj.altGancho = obj.altGancho-3;
                obj.altJoelho = obj.altJoelho-3;
                obj.altCalca = obj.altCalca-4; // comprimento cintura/tornozelo
                obj.largJoelho = obj.largJoelho*0.7;
                obj.largTornozelo = obj.largTornozelo*0.7;
            }
        }
        if(modelagem === "folgada"){
            obj.modelagem = "folgada";
            if(elasticidade==="baixa"){
                obj.elasticidade = "baixa";
                obj.busto  = obj.busto*0.95;
                obj.cintura  = obj.cintura*0.95;
                obj.quadril  = obj.quadril*0.95;
                obj.altCorpo = obj.altCorpo-1;
                obj.largBraco = obj.largBraco-0.5;
                obj.largCostas = obj.largCostas*0.97;
                obj.ombro = obj.ombro*0.95;
                obj.altCava = obj.altCava-0.5;
                obj.altBusto = obj.altBusto-0.5;
                obj.sepBusto = obj.sepBusto*0.95;
                obj.compMangaComprida = obj.compMangaComprida-1;
                obj.compMangaCurta = obj.compMangaCurta-0.5;
                obj.punhoCamisa = obj.punhoCamisa*0.95;
                obj.punhoBlazer = obj.punhoBlazer*0.95;
                obj.altQuadril = obj.altQuadril-0.5;
                obj.altGancho = obj.altGancho-1;
                obj.altJoelho = obj.altJoelho-1;
                obj.altCalca = obj.altCalca-2; // comprimento cintura/tornozelo
                obj.largJoelho = obj.largJoelho*0.95;
                obj.largTornozelo = obj.largTornozelo*0.95;
            }
            if(elasticidade==="média"){
                obj.elasticidade = "média";
                obj.busto  = obj.busto*0.9;
                obj.cintura  = obj.cintura*0.9;
                obj.quadril  = obj.quadril*0.9;
                obj.altCorpo = obj.altCorpo-2;
                obj.largBraco = obj.largBraco-1;
                obj.largCostas = obj.largCostas*0.93;
                obj.ombro = obj.ombro*0.9;
                obj.altCava = obj.altCava-1;
                obj.altBusto = obj.altBusto-1;
                obj.sepBusto = obj.sepBusto*0.9;
                obj.compMangaComprida = obj.compMangaComprida-2;
                obj.compMangaCurta = obj.compMangaCurta-1;
                obj.punhoCamisa = obj.punhoCamisa*0.9;
                obj.punhoBlazer = obj.punhoBlazer*0.9;
                obj.altQuadril = obj.altQuadril-1;
                obj.altGancho = obj.altGancho-2;
                obj.altJoelho = obj.altJoelho-2;
                obj.altCalca = obj.altCalca-3; // comprimento cintura/tornozelo
                obj.largJoelho = obj.largJoelho*0.9;
                obj.largTornozelo = obj.largTornozelo*0.9;
            }
            if(elasticidade==="alta"){
                obj.elasticidade = "alta";
                obj.busto  = obj.busto*0.85;
                obj.cintura  = obj.cintura*0.85;
                obj.quadril  = obj.quadril*0.85;
                obj.altCorpo = obj.altCorpo-3.5;
                obj.largBraco = obj.largBraco-1.5;
                obj.largCostas = obj.largCostas*0.9;
                obj.ombro = obj.ombro*0.85;
                obj.altCava = obj.altCava-1.5;
                obj.altBusto = obj.altBusto-1.5;
                obj.sepBusto = obj.sepBusto*0.85;
                obj.compMangaComprida = obj.compMangaComprida-3;
                obj.compMangaCurta = obj.compMangaCurta-1.5;
                obj.punhoCamisa = obj.punhoCamisa*0.85;
                obj.punhoBlazer = obj.punhoBlazer*0.85;
                obj.altQuadril = obj.altQuadril-1.5;
                obj.altGancho = obj.altGancho-3;
                obj.altJoelho = obj.altJoelho-3;
                obj.altCalca = obj.altCalca-4; // comprimento cintura/tornozelo
                obj.largJoelho = obj.largJoelho*0.85;
                obj.largTornozelo = obj.largTornozelo*0.85;
            }
        }
    }else{
        // no caso da manga, considera-se a elasticidade na largura e não no comprimento
        // veja pag.16 do livro sobre malhas da Marlene
        if(modelagem === "justa"){
            obj.modelagem = "justa";
            if(elasticidade === "baixa"){
                obj.elasticidade = "baixa";
                obj.busto  = obj.busto*0.9;
                obj.cintura  = obj.cintura*0.9;
                obj.quadril  = obj.quadril*0.9;
                obj.altCorpo = obj.altCorpo;
                obj.largBraco = obj.largBraco-1;
                obj.largCostas = obj.largCostas*0.95;
                obj.ombro = obj.ombro*0.9;
                obj.altCava = obj.altCava;
                obj.altBusto = obj.altBusto;
                obj.sepBusto = obj.sepBusto*0.9;
                obj.compMangaComprida = obj.compMangaComprida;
                obj.compMangaCurta = obj.compMangaCurta;
                obj.punhoCamisa = obj.punhoCamisa*0.9;
                obj.punhoBlazer = obj.punhoBlazer*0.9;
                obj.altQuadril = obj.altQuadril;
                obj.altGancho = obj.altGancho;
                obj.altJoelho = obj.altJoelho;
                obj.altCalca = obj.altCalca; // comprimento cintura/tornozelo
                obj.largJoelho = obj.largJoelho*0.9;
                obj.largTornozelo = obj.largTornozelo*0.9;
            }
            if(elasticidade==="média"){
                obj.elasticidade = "média";
                obj.busto  = obj.busto*0.8;
                obj.cintura  = obj.cintura*0.8;
                obj.quadril  = obj.quadril*0.8;
                obj.altCorpo = obj.altCorpo;
                obj.largBraco = obj.largBraco-2;
                obj.largCostas = obj.largCostas*0.85;
                obj.ombro = obj.ombro*0.8;
                obj.altCava = obj.altCava;
                obj.altBusto = obj.altBusto;
                obj.sepBusto = obj.sepBusto*0.8;
                obj.compMangaComprida = obj.compMangaComprida;
                obj.compMangaCurta = obj.compMangaCurta;
                obj.punhoCamisa = obj.punhoCamisa*0.8;
                obj.punhoBlazer = obj.punhoBlazer*0.8;
                obj.altQuadril = obj.altQuadril;
                obj.altGancho = obj.altGancho;
                obj.altJoelho = obj.altJoelho;
                obj.altCalca = obj.altCalca; // comprimento cintura/tornozelo
                obj.largJoelho = obj.largJoelho*0.8;
                obj.largTornozelo = obj.largTornozelo*0.8;
            }
            if(elasticidade==="alta"){
                obj.elasticidade = "alta";
                obj.busto  = obj.busto*0.7;
                obj.cintura  = obj.cintura*0.7;
                obj.quadril  = obj.quadril*0.7;
                obj.altCorpo = obj.altCorpo;
                obj.largBraco = obj.largBraco-3;
                obj.largCostas = obj.largCostas*0.8;
                obj.ombro = obj.ombro*0.7;
                obj.altCava = obj.altCava;
                obj.altBusto = obj.altBusto;
                obj.sepBusto = obj.sepBusto*0.7;
                obj.compMangaComprida = obj.compMangaComprida;
                obj.compMangaCurta = obj.compMangaCurta;
                obj.punhoCamisa = obj.punhoCamisa*0.7;
                obj.punhoBlazer = obj.punhoBlazer*0.7;
                obj.altQuadril = obj.altQuadril;
                obj.altGancho = obj.altGancho;
                obj.altJoelho = obj.altJoelho;
                obj.altCalca = obj.altCalca; // comprimento cintura/tornozelo
                obj.largJoelho = obj.largJoelho*0.7;
                obj.largTornozelo = obj.largTornozelo*0.7;
            }
        }
        if(modelagem === "folgada"){
            obj.modelagem = "folgada";
            if(elasticidade==="baixa"){
                obj.elasticidade = "baixa";
                obj.busto  = obj.busto*0.95;
                obj.cintura  = obj.cintura*0.95;
                obj.quadril  = obj.quadril*0.95;
                obj.altCorpo = obj.altCorpo;
                obj.largBraco = obj.largBraco-0.5;
                obj.largCostas = obj.largCostas*0.97;
                obj.ombro = obj.ombro*0.95;
                obj.altCava = obj.altCava;
                obj.altBusto = obj.altBusto;
                obj.sepBusto = obj.sepBusto*0.95;
                obj.compMangaComprida = obj.compMangaComprida;
                obj.compMangaCurta = obj.compMangaCurta;
                obj.punhoCamisa = obj.punhoCamisa*0.95;
                obj.punhoBlazer = obj.punhoBlazer*0.95;
                obj.altQuadril = obj.altQuadril;
                obj.altGancho = obj.altGancho;
                obj.altJoelho = obj.altJoelho;
                obj.altCalca = obj.altCalca; // comprimento cintura/tornozelo
                obj.largJoelho = obj.largJoelho*0.95;
                obj.largTornozelo = obj.largTornozelo*0.95;
            }
            if(elasticidade==="média"){
                obj.elasticidade = "média";
                obj.busto  = obj.busto*0.9;
                obj.cintura  = obj.cintura*0.9;
                obj.quadril  = obj.quadril*0.9;
                obj.altCorpo = obj.altCorpo;
                obj.largBraco = obj.largBraco-1;
                obj.largCostas = obj.largCostas*0.93;
                obj.ombro = obj.ombro*0.9;
                obj.altCava = obj.altCava;
                obj.altBusto = obj.altBusto;
                obj.sepBusto = obj.sepBusto*0.9;
                obj.compMangaComprida = obj.compMangaComprida;
                obj.compMangaCurta = obj.compMangaCurta;
                obj.punhoCamisa = obj.punhoCamisa*0.9;
                obj.punhoBlazer = obj.punhoBlazer*0.9;
                obj.altQuadril = obj.altQuadril;
                obj.altGancho = obj.altGancho;
                obj.altJoelho = obj.altJoelho;
                obj.altCalca = obj.altCalca; // comprimento cintura/tornozelo
                obj.largJoelho = obj.largJoelho*0.9;
                obj.largTornozelo = obj.largTornozelo*0.9;
            }
            if(elasticidade==="alta"){
                obj.elasticidade = "alta";
                obj.busto  = obj.busto*0.85;
                obj.cintura  = obj.cintura*0.85;
                obj.quadril  = obj.quadril*0.85;
                obj.altCorpo = obj.altCorpo;
                obj.largBraco = obj.largBraco-1.5;
                obj.largCostas = obj.largCostas*0.9;
                obj.ombro = obj.ombro*0.85;
                obj.altCava = obj.altCava;
                obj.altBusto = obj.altBusto;
                obj.sepBusto = obj.sepBusto*0.85;
                obj.compMangaComprida = obj.compMangaComprida;
                obj.compMangaCurta = obj.compMangaCurta;
                obj.punhoCamisa = obj.punhoCamisa*0.85;
                obj.punhoBlazer = obj.punhoBlazer*0.85;
                obj.altQuadril = obj.altQuadril;
                obj.altGancho = obj.altGancho;
                obj.altJoelho = obj.altJoelho;
                obj.altCalca = obj.altCalca; // comprimento cintura/tornozelo
                obj.largJoelho = obj.largJoelho*0.85;
                obj.largTornozelo = obj.largTornozelo*0.85;
            }
        }       
    }
}