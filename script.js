const icon = document.querySelector("#icon"),
      range = document.querySelector("input"),
      slideValue = document.querySelector(".slide-value");

range.addEventListener("input", () => {
    let rangeVal = range.value;
    slideValue.innerHTML = rangeVal;

    if(rangeVal > 0) {
        icon.classList.replace("uil-volume-mute", "uil-volume-down");
    } else {
        icon.classList.replace("uil-volume-down", "uil-volume-mute");
    }
    if(rangeVal > 30) {
        icon.classList.replace("uil-volume-down", "uil-volume");
    } else {
        icon.classList.replace("uil-volume", "uil-volume-down");
    }
    if(rangeVal > 80) {
        icon.classList.replace("uil-volume", "uil-volume-up");
    } else {
        icon.classList.replace("uil-volume-up", "uil-volume");
    }
});

const $cambiarInterruptor = document.getElementById("cambiarInterruptor"),
      $cambiarFoco = document.getElementById("cambiarFoco"),
      $swith = document.querySelector(".switch");

function cambiarImagenes(){
    if($cambiarFoco.src.match("/imagenes/encendido-1.png") && $cambiarInterruptor.src.match("/imagenes/on-or.png")){
        $cambiarFoco.src = "/imagenes/apagado-1.png";
        $cambiarInterruptor.src =  "/imagenes/off-or.png";
    }else{
        $cambiarFoco.src = "/imagenes/encendido-1.png";
        $cambiarInterruptor.src = "/imagenes/on-or.png"; // Corrected this line
    }
}

$swith.addEventListener("click",cambiarImagenes);