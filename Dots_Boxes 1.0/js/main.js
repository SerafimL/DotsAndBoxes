const gameboard = document.querySelector('svg');
const Lines_h = document.querySelectorAll('rect');
var countLine = 0;
var corner_a = [];
var corner_b = [];
var lines_on =[];
var RedSquares =0;
var BlueSquares = 0;

function clickline(sLine){  
    if(this.countline == 0){
        this.countline = 1;
        sLine.setAttribute('fill', 'red');  
        sLine.setAttribute('stroke', 'rgb(39, 39, 39)');
        sLine.setAttribute('stroke-width', '1px');                  
    }else{
        this.countline = 0;
        sLine.setAttribute('fill', 'blue');   
        sLine.setAttribute('stroke', 'rgb(39, 39, 39)');
        sLine.setAttribute('stroke-width', '1px'); 
    }    
    sLine.setAttribute('class', 'lineOn');
    sLine.setAttribute('onclick', '');
    sLine.getAttribute('x');
    sLine.getAttribute('y');
    color = sLine.getAttribute('fill');
    var lastid = sLine.getAttribute('id');
    this.lines_on.push(sLine.getAttribute('id'));
    getCorner(lastid);
    fillSquare(color);
} 

function mouseIn(id){
    console.log('passou');
    id.setAttribute('fill', 'Gray');
}

function getCorner (id){
    var x = parseInt(id[0]+id[1]);
    var y = parseInt(id[3]+id[4]);
    var hv = id[6];
    var invID;
    var invHV;
    if(hv=='h'){
        invID = id.replace(/h/,'v');
        invHV = hv.replace(/h/,'v');
    }
    if(hv=='v'){
        invID = id.replace(/v/,'h');
        invHV = hv.replace(/v/,'h');
    }
    if(lines_on.indexOf(invID)>=0){
        corner_a.push(x+''+y); 
    } 
    if(id[6]=='v' & lines_on.indexOf((x-1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'x'+(y+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'y'+invHV)>=0){
        corner_b.push((x-1)+''+y);
    }
    if(id[6]=='h' & lines_on.indexOf((x+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'x'+(y-1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'y'+invHV)>=0){
        corner_b.push(x+''+(y-1));
    }         
}

function fillSquare (clr){
    var bigSquare = new Map();
    listBSIndexes = [];
    corner_a.forEach(function(corner__a, i){
        corner_b.forEach(function(corner__b, j){
            if(parseInt(corner__b[0])>=parseInt(corner__a[0]) && parseInt(corner__b[1])>=parseInt(corner__a[1])){                        
                var bSIndex = corner__a+corner__b;
                var bScontent = [];
                var x_square = parseInt(corner__b[0])-parseInt(corner__a[0]);
                var y_square = parseInt(corner__b[1])-parseInt(corner__a[1]);
                for(k=1;k<=x_square;k++){
                    
                    bScontent.push(lines_on.indexOf((parseInt(corner__a[0])+k).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'x'+parseInt(corner__a[1]).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'yh'));
                    bScontent.push(lines_on.indexOf((parseInt(corner__a[0])+k-1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'x'+(parseInt(corner__a[1])+y_square+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'yh'));
                }
                for(l=1;l<=y_square;l++){
                    bScontent.push(lines_on.indexOf((parseInt(corner__a[0])).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'x'+(parseInt(corner__a[1])+l).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'yv'));
                    bScontent.push(lines_on.indexOf((parseInt(corner__a[0])+x_square+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'x'+(parseInt(corner__a[1])+l-1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'yv'));   
                }
                listBSIndexes.push(bSIndex);
                bigSquare[bSIndex] = bScontent;
            }
        });
    });
    listBSIndexes.forEach(function(ind, i){
        var sqrList = [];
        var sqrcount = 0;
        if(bigSquare[ind].indexOf(-1)==(-1)){
            for(j=0;j<(ind[2]-ind[0]+1);j++){
                for(k=0;k<(ind[3]-ind[1]+1);k++){
                    sqrcount++;
                    var sqr = gameboard.getElementById((parseInt(ind[0])+j)+''+(parseInt(ind[1])+k));
                    if(sqr.getAttribute('fill')=='black'){
                        sqrList.push(sqr);
                    }                                
                }
            }
            if(sqrList.length == sqrcount){
                sqrList.forEach(function(sqr1, m){
                sqr1.setAttribute('fill', 'Url(#gradient'+clr+')');
                clr == 'red' ? BlueSquares++ : RedSquares++;              
                });
            }                
        }
        for(q=1;q<=9;q++){
            for(w=1;w<=9;w++){
                if(sqrList.indexOf(desk1 = gameboard.getElementById(q+''+w))>=0 && sqrList.indexOf(desk2 = gameboard.getElementById((q+1)+''+w))>=0 && desk1.getAttribute('fill')!= 'black' && desk2.getAttribute('fill')!='black'){
                   var linev = gameboard.getElementById((q+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'x'+w.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'yv');  
                   linev.setAttribute('fill', 'Url(#gradient'+clr+')');
                   linev.setAttribute('stroke', 'rgb(09, 09, 09)');
                   linev.setAttribute('stroke-width', '1px');
                   linev.setAttribute('onclick', '');
                   linev.setAttribute('class', 'lineOn');
                }
                if(sqrList.indexOf(desk1 = gameboard.getElementById(q+''+w))>=0 && sqrList.indexOf(desk2 = gameboard.getElementById(q+''+(w+1)))>=0  && desk1.getAttribute('fill')!= 'black' && desk2.getAttribute('fill')!='black'){
                    var lineh = gameboard.getElementById(q.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'x'+(w+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'yh');
                    lineh.setAttribute('fill', 'Url(#gradient'+clr+')');
                    lineh.setAttribute('stroke', 'rgb(09, 09, 09)');
                    lineh.setAttribute('stroke-width', '1px');
                    lineh.setAttribute('onclick', '');
                    lineh.setAttribute('class', 'lineOnBlack');
                }
            }
        }
    });
} 