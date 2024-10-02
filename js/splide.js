
export function splide () {


document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );

  let elms = document.getElementsByClassName( 'splide' );

for ( let i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ] ).mount();
} }