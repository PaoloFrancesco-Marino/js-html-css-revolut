$(document).ready(function () {


    // rendere funzionali i menu dropdown all’interno della navigazione principale

    // refs 
    var dropDown = $('.right-nav ul .menu-drop'); //seleziono il padre 
    var dropLink = dropDown.children('a'); //seleziono le a figlie dirette del padre
    var dropMenu = dropDown.children('.dropdown-menu'); // seleziono i contenitori con classe dropdown-menu

    // ref icon change
    var arrowChange = $('.right-nav ul li:nth-child(6) a'); //select a link
    var iconChange = $('.right-nav ul li:nth-child(6) a i'); //select icon change


 

    //mouse click
    dropLink.click(function () { 

        var actualMenu = $(this).next('.dropdown-menu');

        dropMenu.not(actualMenu).hide();

        actualMenu.toggle();

    });

    // icon change

       arrowChange.mouseenter(function () { 
        iconChange.removeClass('fas fa-chevron-down')
        iconChange.addClass('fas fa-chevron-up')
    });

    arrowChange.mouseleave(function () { 
        iconChange.removeClass('fas fa-chevron-up')
        iconChange.addClass('fas fa-chevron-down')
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