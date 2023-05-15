let imgSrc = './images/guitar.png';
function photoChanger(){
    if (imgSrc == './images/guitar.png'){
        document.getElementById('guitarPhotoContain').src = './images/IMG_1080.PNG';
        imgSrc = './images/IMG_1080.PNG';
    }else {
        document.getElementById('guitarPhotoContain').src = './images/guitar.png';
        imgSrc = './images/guitar.png';
    }
}

let onOff = true;

function menuOpener(){
    if (onOff == true){
    document.getElementById('menu-only-for-mobile').style.display = 'block';
    onOff = false;}
    else{
        document.getElementById('menu-only-for-mobile').style.display = 'none';
        onOff = true;
    }
}


let registrOnOff = true
function registrOpener(){
    if (registrOnOff == true){
        document.getElementById('form-registr').style.display = 'block';
        registrOnOff = false;}
    else{
        document.getElementById('form-registr').style.display = 'none';
        registrOnOff = true
    }
}