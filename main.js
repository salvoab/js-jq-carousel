$(function(){
    // Event Listener del click sul div di classe next
    $('.next').click(function () { 
        var activeImage = $('.images').find('.active');
        activeImage.removeClass('active');
        
        if(activeImage.hasClass('last')){
            $('.first').addClass('active');
        } else{
            activeImage.next().addClass('active');
        }

        var activeCircle = $('.nav').find('.active');
        activeCircle.removeClass('active');
        
        if(activeCircle.hasClass('last')){
            $('.first').addClass('active');
        } else{
            activeCircle.next().addClass('active');
        }
    });
});