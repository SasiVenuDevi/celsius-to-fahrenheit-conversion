function celsius(){
        const e=document.getElementById('input1').value;
        console.log(e);
        const f=((e*1.8)+32);
        console.log(f);
        const g=document.getElementById('results');
        g.innerHTML=f + "deg" ;
        console.log(g);
     }
    
    