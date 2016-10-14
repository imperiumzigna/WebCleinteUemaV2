
var input = document.getElementById("caixapesquisa");


input.addEventListener("mouseover", function () {
    input.focus();
});

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
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/* Validando formulário*/

function validar() {
    /* Declarando variáveis utilizadas na validação*/
    var nome = meu_form.nome.value;
    var cod = meu_form.cod.value;
    var text = meu_form.text.value;

    if (nome === ""||nome.length < 5) { /*Caso o nome não seja informado ou for inválido (menor de 5 caracteres),o seguinte alerta aparecerá: Preencha o campo com seu nome completo"*/
        alert('Preencha o campo com seu nome completo');
        meu_form.nome.focus();
        return false;
    }
    else if(cod == "") { /*Caso o código não seja informado,o seguinte alerta aparecerá: Preencha o campo com seu código"*/
        alert('Preencha o campo com seu código');
        meu_form.cod.focus();
        return false;
    }
    
    else if(isNaN(cod)) { /*Se código não for do tipo numérico retorna a msg "Código inválido" */
        alert('Código inválido!!');
        meu_form.cod.focus();
        return false;
    }
    else if (text == ""){ /*Se não for deixada nenhuma opinião, exibe msg 'Deixe a sua opinião por favor' */
        alert('Deixe a sua opinião por favor');
        meu_form.text.focus();
        return false;
    }
    else{ /* Caso nenhuma das restriçoes acima ocorra, a mensagem de sucesso é mostrada*/
        alert('Formulário enviando com sucesso!');
    }
}



