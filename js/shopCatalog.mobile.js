( function () {
  'use strict';
  let shopCatalogMobile = document.querySelector( '.shop-catalog-mobile' );
  function renderMenu( data ) {
    let container = document.createElement( 'ul' ), index = 0, li;
    for ( ;index < data.length; index++ ) {
      li = document.createElement( 'li' );
      li.textContent = data[index].name;
      container.appendChild( li );
      if ( data[index].sub ) {
        container.appendChild( renderMenu( data[index].sub ) );
      }
    }
    return container;
  }
  shopCatalogMobile.appendChild( renderMenu( shopCatalog ) );
  FastClick.attach( document.body );
} )();
