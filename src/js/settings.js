export const select = {
  templateOf: {
    coffeProduct: '#template-coffe-product',
  },
  containerOf: {
    coffe: '#product-list',
    pages: '#pages',
  },
  navigation: {
    links: '.navigation__link, .navbar__face',
  },
};

export const classNames = {
  navigation: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
};

export const settings = {    
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',      
  },
};

export const templates = {
  coffeProduct: Handlebars.compile(document.querySelector(select.templateOf.coffeProduct).innerHTML),
};