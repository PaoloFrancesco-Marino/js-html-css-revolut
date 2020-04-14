$(document).ready(function () {


    // rendere funzionali i menu dropdown all’interno della navigazione principale
    
    var dropDown = $('.right-nav ul .menu-drop');

    var dropLink = dropDown.children('a');

    var dropMenu = dropDown.children('.dropdown-menu');




    //mouse click
    dropLink.click(function () { 

        var actualMenu = $(this).next('.dropdown-menu');

        dropMenu.not(actualMenu).hide();

        actualMenu.toggle();

    });


    // // alternative mouse enter / mouse leave 

    // dropLink.mouseenter(function () { 

    //     var actualMenu = $(this).next('.dropdown-menu');

    //     dropMenu.not(actualMenu).hide();

    //     actualMenu.toggle();

    // });

    // dropLink.mouseleave(function () { 

    //     var actualMenu = $(this).next('.dropdown-menu');

    //     dropMenu.not(actualMenu).hide();

    //     actualMenu.toggle();

    // });

    
}); //end document ready