( function () {
  'use strict';

  var currentPath = [];
  var shopCatalogMobile = document.querySelector( '.shop-catalog-mobile' );
  var headerBack = document.querySelector( '.header__back' );
  var headerTitle = document.querySelector( '.header__title' );

  function reload ( path ) {
    var title, data, index;
    if ( path.length ) {
      index = path.shift();
      data = shopCatalog[index].sub;
      title = shopCatalog[index].name;
      while ( index = path.shift() ) {
        title = data[index].name;
        data = data[index].sub;
      }
    } else {
      title = 'Каталог';
      data = shopCatalog;
    }
    headerTitle.textContent = title;
    shopCatalogMobile.innerHTML = '';
    shopCatalogMobile.appendChild( renderMenu( data ) );
  }

  function onBack () {
    if ( currentPath.length ) {
      currentPath.pop();
      reload( currentPath.slice() );
    } else {
      //todo hide catalog-menu
    }
  }

  function onClick ( e ) {
    currentPath.push( e.target.closest( '.shop-catalog-mobile__item_width-sub-menu' ).dataset.path );
    reload( currentPath.slice() );
  }

  function renderMenu ( data ) {
    let container = document.createElement( 'ul' ), index = 0, li, a;
    for ( ;index < data.length; index++ ) {
      a = document.createElement( 'a' );
      a.textContent = data[index].name;
      li = document.createElement( 'li' );
      li.dataset.path = index;
      li.appendChild( a );
      if ( data[index].sub ) {
        li.classList.add( 'shop-catalog-mobile__item_width-sub-menu' );
        li.addEventListener( 'click', onClick );
      }
      container.appendChild( li );
    }
    return container;
  }

  headerBack.addEventListener( 'click', onBack );
  reload( currentPath.slice() );

} )();
