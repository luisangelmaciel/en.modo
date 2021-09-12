window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function openSocial(evt, socialName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(socialName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openModal() {
    document.getElementById("myModal ").style.display = "block ";
}

function closeModal() {
    document.getElementById("myModal ").style.display = "none ";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides ");
    var dots = document.getElementsByClassName("demo ");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none ";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active ", " ");
    }
    slides[slideIndex - 1].style.display = "block ";
    dots[slideIndex - 1].className += " active ";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
var myObject = {
    "hiHelloMaciel": [{
        "fechaDePublicacion": "20 de junio 2021",
        "Post": "Debo llevar más control sobre cada formato. Tengo que si el de Xiiber, que si el de Marthech, que si el personal. <br>En general fue un día pesado pero con buenos resultados.<br><br> <strong>El mode multicolor </strong> quedo ok, <b>el scroll, listo</b>, pero se reptio el templete de <i>viajes</i>. Estuve aprendiendo a sacarle provecho al Studio. Le pude poner link a una imagen. La lección más importante del día es... <br><br>hazlo y no busques templetes, más recisa bien los apuntes o instrucciones de la W3 y/o Mozilla. Todo por no hacer eso, he tenido que trabajar al doble y perder tiempo extra buscando. Que esta bien, pero ya demore mucho. <br><br>El mismo día hice dos versiones, una con una base URL y la segunda solo utilizando exclusivamente el W3.JS. Hice el primer example dedicado a la misma herramienta que me esta encantado",
        "pageid": "luisangel.maciel/hiMartech.project/bitacora/v002",
        "data-href": "bitacora/v002",
        "accion": "hiMartech.project! v002",
        "postFoto1": "https://www.xiiber.com/img/photo-preview-01.png",
        "altPostFoto1": "Alt Post Foto 1",
        "postFoto2": "https://www.xiiber.com/img/photo-preview-02.png",
        "altPostFoto2": "Alt Post Foto 2",
        "postFoto3": "https://www.xiiber.com/img/photo-preview-03.png",
        "altPostFoto3": "Alt Post Foto 3",
        "postFoto4": "https://www.xiiber.com/img/photo-preview-00.png",
        "altPostFoto4": "Alt Post Foto 4",
    }, {
        "fechaDePublicacion": "19 de junio 2021",
        "Post": "Para crear esta primera instancia, utilice w3.js como base para programar. Referente al diseño, el style se integro en cada instruccion, esto opr que w3.js jala con todo su style al proyecto principal. <br><br> La base de datos esta integrada en el mismo archivo que tambien incluye una instrución para personalizar las URL y estas puedan ayudar a generar más rapido un Mapa de sitios y enlaces de información por entrada en el sitio. <br><br>  <b>Quede muy contento con el resultado </b>y la lección de este día fue: guardar una copia de los js y css para no sufrir como sufri.Resulta que la pagina de la w3 no estaba linea!!!!!cuando estaba corriendo la penultima prueba, jalaba todo super bien, le hice un ajuste y zas,   cuando vuelvo actualizar resulta que el.js salia con errores por que no encontraba el servidor. <br><br> Me paso por la cabeza mil cosas, valide la información en una pagina, dos paginas, un navegador, en el celular y hasta  reinicie la computadora. <br>  <br> Pero ya quedo la lección aprendida",
        "pageid": "luisangel.maciel/hiMartech.project/bitacora/v001",
        "data-href": "bitacora/v001",
        "accion": "Ver hiMartech.project! v001",
        "postFoto1": "https://www.xiiber.com/img/photo-preview-01.png",
        "altPostFoto1": "Alt Post Foto 1",
        "postFoto2": "https://www.xiiber.com/img/photo-preview-02.png",
        "altPostFoto2": "Alt Post Foto 2",
        "postFoto3": "https://www.xiiber.com/img/photo-preview-03.png",
        "altPostFoto3": "Alt Post Foto 3",
        "postFoto4": "https://www.xiiber.com/img/photo-preview-00.png",
        "altPostFoto4": "Alt Post Foto 4",
    }]
};
// Base URL 
const baseUrl = "http://hihello.monster"
const link = {
    Generator: {
        go: (id) => `${baseUrl}/${id}`
    }
};

document.querySelectorAll('.automatic').forEach(a => (a.href = link.Generator.go(a.dataset.href)));
//Mostrar post 
w3.displayObject("Posti", myObject);
w3.displayObject("Glyphs", myObject);
w3.displayObject("siteMap", myObject);
w3.displayObject("Proyectos", myObject);

function openSocial(evt, socialName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(socialName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();