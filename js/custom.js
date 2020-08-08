/**************************************
    File Name: custom.js
    Web Site: Cerebros
    Created By: CerebrosTI
    http://cerebrosg.com

**************************************/

(function($) {
    "use strict";
    $(document).ready(function() {
        $('#nav-expander').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
        $('#nav-close').on('click', function(e) {
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        }); 
        ///
        ///Fecha actual
        ///
        const objDate = new Date( );
        var options = {weekday: "long", year: "numeric", month: "long", day: "numeric" };
        var strDate =objDate.toLocaleString("default" ,options); 
        document.getElementById('txtDate').innerHTML =strDate; 
        ///
        ///Cambiar el icono del boton de buscar al hacer clikc
        ///
        $(document.getElementById("btnsearch")).on('click', function(e) {
            e.preventDefault(); 
            var idiconsearch=document.getElementById("iconsearch");
            var changer=0; 
            if(idiconsearch.className=='fa fa-search' && changer==0){
                idiconsearch.className='fa fa-times'; 
                changer=1;
            }
            if(idiconsearch.className=='fa fa-times' && changer==0){
                idiconsearch.className='fa fa-search';
                changer=1;
            }
        });
        ///
        ///Muestra el color de la pagina seleccionada en el link correspondiente solo si el ancho del dispositivo
        ///es mayor a 1024
        /**if(window.screen.width >= 1024){
        var coloractive=$(".navbar-nav li a.active").css('color');
        document.documentElement.style.setProperty('--border-color-link', coloractive);  
        $(".navbar-nav li a.active")[0].parentNode.setAttribute("style",'background-size:100% var(--border-width);background-image:linear-gradient('+coloractive+','+coloractive+')');
        }**/
    });
    
    ///
    ///Cambiar el color de la animacion de los hover links del menu obteniendo el valor de 
    ///color de cada link al hacer hover
    /// 
    /* 
    $(document.getElementsByClassName("nav-link")).hover(function() { 
            var class_name = $(this).attr('class').split( ' ' )[2]; 
            var color =$(this).css('color');
            if(class_name==="active"){
            document.documentElement.style.setProperty('--border-color-link', color);
            $(this).css('background-size','100% var(--border-width)');  
            }else{
            document.documentElement.style.setProperty('--border-color-link', color);
            } 
    });
    */

    $(window).resize(function () { 
        location.reload();
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $('.carousel').carousel({
        interval: 4000
    })

    $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({bottom:"25px"});
        } else {
            jQuery('.dmtop').css({bottom:"-100px"});
        }
    });
    jQuery('.dmtop').click(function(){
        jQuery('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });

})(jQuery);


function openCategory(evt, catName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
} 