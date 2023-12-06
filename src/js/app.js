import { classNames, select, settings } from './settings.js';
import Product from './components/Product.js';

const app = {
  init: function() {
    const thisApp = this;
    //console.log(this);

    thisApp.initPages();
    thisApp.initData();
  },

  initData: function() {
    const thisApp = this;

    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        /* save parsedResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;
        /* execute initStore method */
        thisApp.initcoffe();
      });
  },

  initcoffe: function() {
    const thisApp = this;

    for(let productData in thisApp.data.products){
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initPages: function(){
    const thisApp = this;
    /* find the container with the subpage code */
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    /* find all sitelinks */
    thisApp.navigationLinks = document.querySelectorAll(select.navigation.links);
    /* use the id from the hash to determine the opening of the default page */
    const hashId = window.location.hash.replace('#/', '');
    /* check if the id matches the subpage name */
    let pageHash = thisApp.pages[0].id;
    for(let page of thisApp.pages) {
      if(page.id == hashId) {
        pageHash = page.id;
        break;
      }
    }
    console.log('pageHash:', pageHash);
    /* activate subpage with pageHash */
    thisApp.activatePage(pageHash);

    /* add listeners for sitelinks */
    for(let link of thisApp.navigationLinks) {
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /* clicking on the link retrieves the id from the href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        /* when activating the subpage, change the url hash */
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId) {
    const thisApp = this;
    
    /* assign the active class to the selected subpage, remove it from the others */
    for(let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    /* assign the active class to the selected link, remove it from the others */
    for(let link of thisApp.navigationLinks) {
      link.classList.toggle(classNames.navigation.active, link.getAttribute('href') == '#' + pageId);

    }
  },

};

app.init();