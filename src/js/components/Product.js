import { select, templates } from '../settings.js';
import { utils } from '../utils.js';

class Product {
  constructor(id, data){
    const thisProduct  = this;

    thisProduct.id = id;        //!product id from data downloaded from the server!
    thisProduct.data = data;    //!simply product data!

    thisProduct.renderInCoffe();
  }

  renderInCoffe(){
    const thisProduct = this;

    /* generate HTML based on template with data*/
    const generatedHTML = templates.coffeProduct(thisProduct.data);
    console.log(generatedHTML);

    /* create element using utils.createElementFromHTML */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    /* find coffe container */
    thisProduct.coffeContainer = document.querySelector(select.containerOf.coffe);

    /* add element to page */
    thisProduct.coffeContainer.appendChild(thisProduct.element); //!add child to new html element!
  }
}

export default  Product;