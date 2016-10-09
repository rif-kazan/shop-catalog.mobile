( function () {
  'use strict';

  let shopCatalogMobile = document.querySelector( '.shop-catalog-mobile' );
  let headerBack = document.querySelector( '.header__back' );
  let headerTitle = document.querySelector( '.header__title' );

  function onBack () {
    //todo подъем вверх или выход из каталога
    headerTitle.textContent = 'Каталог';
  }

  function onClick ( e ) {
    //todo перезагрузка контейнера каталога и заголовка
    let title = e.target.closest( '.shop-catalog-mobile__item_width-sub-menu' ).textContent;
    headerTitle.textContent = title;
  }

  function renderMenu ( data ) {
    let container = document.createElement( 'ul' ), index = 0, li, a;
    for ( ;index < data.length; index++ ) {
      li = document.createElement( 'li' );
      a = document.createElement( 'a' );
      a.textContent = data[index].name;
      li.appendChild( a );
      if ( data[index].sub ) {
        li.classList.add( 'shop-catalog-mobile__item_width-sub-menu' );
        li.addEventListener( 'click', onClick );
        //li.appendChild( renderMenu( data[index].sub ) );
      }
      container.appendChild( li );
    }
    return container;
  }

  headerBack.addEventListener( 'click', onBack );
  shopCatalogMobile.appendChild( renderMenu( shopCatalog ) );
} )();
