var archivo = document.querySelector(".button");
const KEY ="subjArr"

archivo.addEventListener("click",()=>{
    var stateSubjArr=document.getElementsByClassName("Estado");
    var arr=[];
    for(var i=0;i<35;i++){
        arr[i]=stateSubjArr[i].value;
    }
    localStorage.setItem(KEY,JSON.stringify(arr))
    contador();
})

function guardarCambios(arrlocal){
    var stateSubjArr=document.getElementsByClassName("Estado");
    for(var i=0;i<stateSubjArr.length;i++){
        stateSubjArr[i].value=arrlocal[i];
    }
}

function extraer(){
    const arrlocal=JSON.parse(localStorage.getItem(KEY));
    if(arrlocal){
        guardarCambios(arrlocal);
    }
    contador();
}

window.onload=extraer();

function contador(){
    var stateSubjArr=document.getElementsByClassName("Estado");
    var contAp=0,contReg=0,contNC=0,contCur=0;
    for(var i=0;i<stateSubjArr.length;i++){
        if(stateSubjArr[i].value=='Aprobdo'){
            contAp++;
        }
        if(stateSubjArr[i].value=='Regular'){
            contReg++;
        }
        if(stateSubjArr[i].value=='No'){
            contNC++;
        }
        if(stateSubjArr[i].value=='Cursando'){
            contCur++;
        }
    }
    document.getElementById("Aprobada").innerHTML=`Aprobadas: ${contAp}`;
    document.getElementById("Cursando").innerHTML=`Cursando: ${contCur}`;
    document.getElementById("No cursada").innerHTML=`No cursadas: ${35-contAp-contReg-contCur}`;
    document.getElementById("Regular").innerHTML=`Regular: ${contReg}`;

}
