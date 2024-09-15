document.getElementById("btn_registrarse").addEventListener("click",register)
document.getElementById("btn_iniciars").addEventListener("click",iniciarSesion)
window.addEventListener("resize", anchopag);


/*variable*/
let cajafront = document.querySelector(".cajafront");
let formulariologin = document.querySelector(".formulariologin");
let formularioregis = document.querySelector(".formularioregis");
let cajalogin = document.querySelector(".cajalogin");
let cajaregistro = document.querySelector(".cajaregistro");

function iniciarSesion() {
    if(window.innerWidth >850){
    formularioregis.style.display= "none";
    cajafront.style.left= "10px";
    formulariologin.style.display= "block";
    cajaregistro.style.opacity= "1";
    cajalogin.style.opacity= "0";
    }else{
    formularioregis.style.display= "none";
    cajafront.style.left= "0px";
    formulariologin.style.display= "block";
    cajaregistro.style.display= "block";
    cajalogin.style.display= "none";
    }
}

function anchopag(){
    if(window.innerWidth > 850){
        cajalogin.style.display= "block";
        cajaregistro.style.display="block";
    }else{
        cajaregistro.style.display= "block";
        cajaregistro.style.opacity="1";
        cajalogin.style.display= "none";
        formulariologin.style.display = "block";
        formularioregis.style.display = "none";
        cajafront.style.left ="0px";
    }
}

anchopag();

function register() {
    if(window.innerWidth >850){
    formularioregis.style.display= "block";
    cajafront.style.left= "410px";
    formulariologin.style.display= "none";
    cajaregistro.style.opacity= "0";
    cajalogin.style.opacity= "1";
    }else{
    formularioregis.style.display= "block";
    cajafront.style.left= "0px";
    formulariologin.style.display= "none";
    cajaregistro.style.display= "none";
    cajalogin.style.display= "block";
    cajalogin.style.opacity= "1";
    }
}
