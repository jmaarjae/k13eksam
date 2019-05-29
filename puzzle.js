window.onload = function(){
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");

    
    var im = new Image();
    im.src = "dog.jpg";
    im.onload = function(){
        //gridi moodustamine(x laiuse tükkide arv, y pikkuse tükkide arv)
        for(i=0;i<3;i++){
            for(j=0;j<4;j++){
                //tükkide suurused
                x=i*100;
                y=j*100;
                //joonistab gridi vahed pildi tükkide vahele
                ctx.drawImage(im, x, y, 100, 100, x+i*2, y+j*2, 100, 100);         
            }
        } 
        ctx.drawImage(im, x=200, y=0, 100, 100, 0, 306, 100, 100);   
        ctx.drawImage(im, x=0, y=300, 100, 100, 204, 6, 100, 100);      
    }  
}