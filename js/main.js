$('menu-section__link')
  .filter( ":odd" )
    .hide()
  .end()
  .filter( ":even" )
    .click(function() {
      $( this )
        .toggleClass('menu-section')
        .next()
          .stop( true, true )
          .slideToggle();
    });
