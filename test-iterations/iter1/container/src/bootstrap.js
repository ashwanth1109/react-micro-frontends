import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartsMount } from "cart/CartShow";

productsMount(document.querySelector("#test-products"));
cartsMount(document.querySelector("#test-cart"));
