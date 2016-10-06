( function () {
  'use strict';
  let shopCatalogMobile = document.querySelector( '.shop-catalog-mobile' );
  function renderMenu( data ) {
    let container = document.createElement( 'ul' ), index = 0, li, a;
    for ( ;index < data.length; index++ ) {
      li = document.createElement( 'li' );
      a = document.createElement( 'a' );
      a.textContent = data[index].name;
      li.appendChild( a );
      container.appendChild( li );
      if ( data[index].sub ) {
        li.classList.add( 'shop-catalog-mobile__item_width-sub-menu' );
        container.appendChild( renderMenu( data[index].sub ) );
      }
    }
    return container;
  }
  shopCatalogMobile.appendChild( renderMenu( shopCatalog ) );
  //FastClick.attach( document.body );
} )();
