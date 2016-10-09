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
    let itemMenu = e.target.closest( '.shop-catalog-mobile__item_width-sub-menu' );
    headerTitle.textContent = shopCatalog[itemMenu.dataset.path].name;
    shopCatalogMobile.innerHTML = '';
    shopCatalogMobile.appendChild( renderMenu( shopCatalog[itemMenu.dataset.path].sub, itemMenu.dataset.path ) );
  }

  function renderMenu ( data, path ) {
    let container = document.createElement( 'ul' ), index = 0, li, a;
    for ( ;index < data.length; index++ ) {
      a = document.createElement( 'a' );
      a.textContent = data[index].name;
      li = document.createElement( 'li' );
      li.dataset.path = path ? path + '-' + index : index;
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
  shopCatalogMobile.appendChild( renderMenu( shopCatalog ) );
} )();
