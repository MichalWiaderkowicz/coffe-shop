import { select, templates } from '../settings.js';
import { utils } from '../utils.js';

class Product {
  constructor(id, data){
    const thisProduct  = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderInCoffe();
  }

  renderInCoffe(){
    const thisProduct = this;

    /* generate HTML based on template with data*/
    const generatedHTML = templates.coffeProduct(thisProduct.data);

    /* create element using utils.createElementFromHTML */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    /* create a t-shirt for this element */
    const tshirt = thisProduct.element.cloneNode(true);

    /* find coffe container */
    thisProduct.coffeContainer = document.querySelectorAll(select.containerOf.coffe);

    thisProduct.homeCoffePage = thisProduct.coffeContainer[0];
    thisProduct.productCoffePage = thisProduct.coffeContainer[1];

    thisProduct.homeCoffePage.appendChild(thisProduct.element);
    thisProduct.productCoffePage.appendChild(tshirt);

    

  }
}

export default  Product;