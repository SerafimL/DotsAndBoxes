$(document).ready(function(){
    let Width = 500;
    let Height = Width;
    let table = $('#table');
    table.attr('style', 'background-color: black');
    table.attr('width', Width+'px');
    table.attr('height', Height+'px');
    for(i=1; i<10;i++){
        for(j=1;j<10;j++){

            let sqr = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            sqr.setAttribute('id',i+''+j);
            sqr.setAttribute('x',(Width/10.5*i)-(Width/37.5));
            sqr.setAttribute('y',(Height/10.5*j)-(Height/37.5));
            sqr.setAttribute('width',Width/12);
            sqr.setAttribute('height',Height/12);
            if( i%j==1 || j%i==1){
                sqr.setAttribute('fill','Url(#gradientblue)'); 
            } else{
                sqr.setAttribute('fill','Url(#gradientred)'); 
            }
            
            table.append(sqr);
        }
    }
    for(i=1; i<=10;i++){
        for(j=1;j<10;j++){
            let L = i.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            let C = j.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            let sqr = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            sqr.setAttribute('id',L+''+C+'v');
            sqr.setAttribute('x',(Width/10.5*i)-(Width/25));
            sqr.setAttribute('y',(Height/10.5*j)-(Height/37.5));
            sqr.setAttribute('width',Width/60);
            sqr.setAttribute('height',Height/12);
            sqr.setAttribute('stroke', 'rgb(09, 09, 09)');
            sqr.setAttribute('stroke-width', '2px');
            sqr.setAttribute('fill','Url(#gradientred)'); 
            table.append(sqr);
        }
    }
    for(i=1; i<=10;i++){
        for(j=1;j<10;j++){
            let L = i.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            let C = j.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            let sqr = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            sqr.setAttribute('id',L+''+C+'h');
            sqr.setAttribute('y',(Width/10.5*i)-(Width/25));
            sqr.setAttribute('x',(Height/10.5*j)-(Height/37.5));
            sqr.setAttribute('height',Width/60);
            sqr.setAttribute('width',Height/12);
            sqr.setAttribute('stroke', 'rgb(09, 09, 09)');
            sqr.setAttribute('stroke-width', '2px');
            sqr.setAttribute('fill','Url(#gradientblue)'); 
            table.append(sqr);
        }
    }
    for(i=1; i<=10;i++){
        for(j=1;j<=10;j++){
            let cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            cir.setAttribute('class','dot');
            cir.setAttribute('cx',(Width/10.5*i)-(Width/31));
            cir.setAttribute('cy',(Height/10.5*j)-(Height/31));
            cir.setAttribute('r',Width/90);
            cir.setAttribute('fill','URL(#gradientmix)'); 
            cir.setAttribute('stroke', 'rgb(09, 09, 09)');
            cir.setAttribute('stroke-width', '2px'); 
            table.append(cir);
        }
    }
});
function tableSize(xA,yA){
    table.attr('width', xA+'px');
    table.attr('height', yA+'px');
    
}
function Sizer(){
    
}
