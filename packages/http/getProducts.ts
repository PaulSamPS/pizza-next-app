import pizza1 from './assets/products/pizza2.webp';
import pizza1Slim from './assets/products/pizza2Slim.webp';
import pizza2 from './assets/products/product.webp';
import pizza2Slim from './assets/products/product-slim.webp';

export const products = [
  {
    id: 0,
    badge: 'New',
    name: 'Пепперони фреш',
    description:
      'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
    price: [289, 479, 619],
    image: { regular: pizza1, slim: pizza1Slim },
    promotion: true,
    weight: ['400 г', '610 г', '820 г'],
    weightSlim: ['300 г', '500 г', '700 г'],
    dough: ['Традиционное', 'Тонкое'],
    size: ['25 см', '30 см', '35 см'],
  },
  {
    id: 1,
    badge: null,
    name: 'Сырная 🌱👶 ',
    description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
    price: [289, 479, 619],
    image: { regular: pizza2, slim: pizza2Slim },
    promotion: false,
    weight: ['330 г', '490 г', '670 г'],
    weightSlim: ['230 г', '390 г', '550 г'],
    dough: ['Традиционное', 'Тонкое'],
    size: ['25 см', '30 см', '35 см'],
  },
];
