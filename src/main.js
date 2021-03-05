jQuery(document).ready(
function($) 
{
    $(".scroll").click(
    function(event)
    {
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    }
    );
}
);
   
jQuery
(
function () 
{
    jQuery(window).scroll(
        function () {
            if (jQuery(this).scrollTop() > 120) 
            {
                $("#menu").css('background-color', 'rgba(51,51,51,1)');
            } 
            else 
            {
                $("#menu").css('background-color', 'rgba(0,0,0,0)');
            }
        }
    );
}
);

function validar(){
var nome = form1.nome.value;
var email = form1.email.value;
var comentario = form1.comentario.value;

if (nome ==""){
    alert('Por favor preencha o campo do seu nome');
    form1.nome.focus();
    return false;
}
if (email ==""){
    alert('Por favor preencha o campo do seu email');
    form1.email.focus();
    return false;
}
if (comentario=="") {
    alert('Por favor deixe seu comentario :)');
    form1.comentario.focus();
    return false;     
}
}