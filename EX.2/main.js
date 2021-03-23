let btn =document.querySelector('button');
let an=document.querySelector('#wcc');
btn.addEventListener ("click", getAttribute);
function getAttribute(){
    let attr = ('href = '+an.getAttribute('href')+' /hreflang = '+an.getAttribute('hreflang')+
    ' /rel = '+an.getAttribute('rel')+' /target = '+an.getAttribute('target')
    +' /type = '+an.getAttribute('href'));
    alert (attr);
}