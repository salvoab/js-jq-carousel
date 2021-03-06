$(function(){
    // Event Listener del click sul div di classe next
    $('.next').click(showNextImage);

    function showNextImage() { 
        var activeImage = $('.images').find('.active');
        activeImage.removeClass('active');
        //Se l'attuale immagine attiva è l'ultima allora aggiungo la classe active al primo
        //Altrimenti metto la classe active all'elemento successivo
        if(activeImage.hasClass('last')){
            $('.images > img.first').addClass('active');
        } else{
            activeImage.next().addClass('active');
        }

        //stessa logica utilizzata sopra per le immagini
        var activeCircle = $('.nav').find('.active');
        activeCircle.removeClass('active');
        
        if(activeCircle.hasClass('last')){
            $('.nav > i.first').addClass('active');
        } else{
            activeCircle.next().addClass('active');
        }
    }

    // Event Listener del click sul div di classe prev
    $('.prev').click(showPrevImage);

    function showPrevImage() { 
        var activeImage = $('.images').find('.active');
        activeImage.removeClass('active');
        //Se l'attuale immagine attiva è la prima allora aggiungo la classe active all'ultima
        //Altrimenti metto la classe active all'elemento precedente
        if(activeImage.hasClass('first')){
            $('.images > img.last').addClass('active');
        } else{
            activeImage.prev().addClass('active');
        }

        //stessa logica utilizzata sopra per le immagini
        var activeCircle = $('.nav').find('.active');
        activeCircle.removeClass('active');
        
        if(activeCircle.hasClass('first')){
            $('.nav > i.last').addClass('active');
        } else{
            activeCircle.prev().addClass('active');
        }
    }

    // Event Listener per tastiera
    $(document).keydown(function (e) { 
        switch(e.which){
            case 37: // freccia sinistra
                showPrevImage();
                break;
            case 39: //freccia destra
                showNextImage();
                break;
            default:
                return; //se ho premuto un altro tasto esco senza far nulla
        }
        e.preventDefault(); // evita il comportamento di default dei tasti
    });
});