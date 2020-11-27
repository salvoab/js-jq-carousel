$(function(){
    // Event Listener del click sul div di classe next
    $('.next').click(showNextImage);

    function showNextImage() { 
        var activeImage = $('.images').find('.active');
        activeImage.removeClass('active');
        //Se l'attuale immagine attiva è l'ultima allora aggiungo la classe active al primo
        //Altrimenti metto la classe active all'elemento successivo
        if(activeImage.hasClass('last')){
            $('.first').addClass('active');
        } else{
            activeImage.next().addClass('active');
        }

        //stessa logica utilizzata sopra per le immagini
        var activeCircle = $('.nav').find('.active');
        activeCircle.removeClass('active');
        
        if(activeCircle.hasClass('last')){
            $('.first').addClass('active');
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
            $('.last').addClass('active');
        } else{
            activeImage.prev().addClass('active');
        }

        //stessa logica utilizzata sopra per le immagini
        var activeCircle = $('.nav').find('.active');
        activeCircle.removeClass('active');
        
        if(activeCircle.hasClass('first')){
            $('.last').addClass('active');
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
        }
    });
});