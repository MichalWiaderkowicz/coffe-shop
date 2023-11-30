export const select = {
  templateOf: {
    coffeProduct: '#template-coffe-product',
  },
  containerOf: {
    coffe: '#product-list',
  }
};

export const settings = {    
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',      
  }
};

export const templates = {
  coffeProduct: Handlebars.compile(document.querySelector(select.templateOf.coffeProductProduct).innerHTML),
};