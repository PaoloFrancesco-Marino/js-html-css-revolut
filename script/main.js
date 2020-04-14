$(document).ready(function () {


    // rendere funzionali i menu dropdown all’interno della navigazione principale
    
    var dropDown = $('.right-nav ul .menu-drop');

    var dropLink = dropDown.children('a');

    var dropMenu = dropDown.children('.dropdown-menu');


    var arrowChange = $('.right-nav ul li:nth-child(6) a'); //select a link
    var iconChange = $('.right-nav ul li:nth-child(6) a i'); //select icon change


    // icon change

    arrowChange.mouseenter(function () { 
        iconChange.removeClass('fas fa-chevron-down')
        iconChange.addClass('fas fa-chevron-up')
    });

    arrowChange.mouseleave(function () { 
        iconChange.removeClass('fas fa-chevron-up')
        iconChange.addClass('fas fa-chevron-down')
    });

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