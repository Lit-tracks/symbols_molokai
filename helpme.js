$(document).ready(function() {
   
    //Preload
    $('<img/>').hide().attr('src', 'https://puu.sh/vBTqz/6d9a3f3f4d.jpg').load(function(){
        $('body').append($(this));
    });
    
        $('<img/>').hide().attr('src', 'https://puu.sh/vBTxM/19ba7b5c8b.jpg').load(function(){
        $('body').append($(this));
    });

        $('<img/>').hide().attr('src', 'https://puu.sh/vBTRo/abddc6872d.jpg').load(function(){
        $('body').append($(this));
    });


   // Background Changer 
    $('#s1').hover(function() {
        $('body').css('background-image', 'url("https://puu.sh/vBTqz/6d9a3f3f4d.jpg")');
    }, function() {
        $('body').css('background', '');

    });
    
    $('#s2').hover(function() {
        $('body').css('background-image', 'url("https://puu.sh/vBTxM/19ba7b5c8b.jpg")');
    }, function() {
        $('body').css('background', '');

    });

    $('#s3').hover(function() {
        $('body').css('background-image', 'url("https://puu.sh/vBTRo/abddc6872d.jpg")');
    }, function() {
        $('body').css('background', '');

    });

    //Box Vanisher
    $('#s2').hover(function() {
        $('#s1').css('opacity', '0');
    }, function() {
        $('#s1').css('opacity', '');

    });

    $('#s3').hover(function() {
        $('#s2').css('opacity', '0');
    }, function() {
        $('#s2').css('opacity', '');

    });

    $('#s3').hover(function() {
        $('#s1').css('opacity', '0');
    }, function() {
        $('#s1').css('opacity', '');

    });

    $('#boxHeader1').hover(function() {
        $('#s1').css('opacity', '0');
    }, function() {
        $('#s1').css('opacity', '');

    });

    $('#boxHeader2').hover(function() {
        $('#s2').css('opacity', '0');
    }, function() {
        $('#s2').css('opacity', '');

    });

    $('#boxHeader3').hover(function() {
        $('#s3').css('opacity', '0');
    }, function() {
        $('#s3').css('opacity', '');

    });

});
