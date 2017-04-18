// smooth scroll animation
$(document).on('click', 'a', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// textillate
$(function () {
    $('.tlt').textillate();
});

$('.tlt').textillate({ in: {
    effect: 'fadeInLeftBig',

} });


// menu tabs
function openMenu(evt, menuName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace('active', '');
    }
    document.getElementById(menuName).style.display = 'block';
    evt.currentTarget.className += 'active';
}

// lazeemenu
$(document).ready(function () {
    $('#responsive-menu').lazeemenu({
        activeClass: 'menu__active',
        initialState: 'default'
    });
});
//
// $('#responsive-menu').lazeemenu({
//     activeClass: 'sub-menu__item',
//     initialState: 'default'
//         .hover(function () {
//             $('.sub-menu').fadeIn(1000);
//         })
// });
//
// $(document).hover(function () {
//     $('.menu-extend').lazeemenu('expandAll');
// });

// $(selector).lazeemenu('expandAll');
//
// $(selector).lazeemenu('collapseAll');
