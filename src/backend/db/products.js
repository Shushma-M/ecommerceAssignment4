import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Almond Milk",
    category: "Dairy",
    brand: "Almond Delight",
    flavor: "Original",
    size: "1 quart",
    price: 3.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yr9HvEbAk7UlRvL1cSBflbwGMxpS_o7QU2sIedCu2A&s',
    ratings: 3,
    description:
      "Smooth and creamy almond milk, perfect for your cereal or coffee.",
  },
  {
    _id: uuid(),
    name: "Oat Milk",
    category: "Dairy",
    brand: "Oato",
    flavor: "Barista Edition",
    size: "32 oz",
    price: 4.49,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpeySq9-VWKIceUts-yJCytNICb0LANFaBaJIEZ-zGRA&s',
    ratings: 2,
    description: "Barista-quality oat milk, ideal for lattes and cappuccinos.",
  },
  {
    _id: uuid(),
    name: "Plant-Based Burger Patties",
    category: "Mock meat",
    brand: "GreenGrill",
    flavor: "Classic BBQ",
    packSize: 4,
    price: 6.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwZV2aTa7Ga3bGEuFXYopTiw6pBSTfED-vIiJoRrJow&s',
    ratings: 4,
    description:
      "Delicious and juicy plant-based burger patties with a classic BBQ flavor.",
  },
  {
    _id: uuid(),
    name: "Vegan Sausages",
    category: "Mock meat",
    brand: "SafeMeat",
    flavor: "Spicy Italian",
    packSize: 6,
    price: 5.49,
    image:'https://content.jwplatform.com/thumbs/eAdokIBz-720.jpg',
    ratings: 4,
    description:
      "Spicy Italian-style vegan sausages, perfect for grilling or adding to your pasta.",
  },
  {
    _id: uuid(),
    name: "Vegan Cheese Slices",
    category: "Dairy",
    brand: "DairyDeli",
    type: "Cheddar Style",
    packSize: 10,
    price: 4.99,
    image:'https://fullofplants.com/wp-content/uploads/2020/08/how-to-make-vegan-cheese-slices-that-melt-super-cheesy-from-fermented-tofu-chao-8.jpg',
    ratings: 3,
    description:
      "Cheddar-style vegan cheese slices, great for sandwiches and snacking.",
  },
  {
    _id: uuid(),
    name: "Vegan Cream Cheese",
    category: "Dairy",
    brand: "PlantSpread",
    flavor: "Herb & Garlic",
    size: "8 oz",
    price: 3.79,
    image:'https://www.veggiesdontbite.com/wp-content/uploads/2020/03/plain-vegan-cream-cheese-recipe-FI.jpg',
    ratings: 4,
    description:
      "Herb and garlic-flavored vegan cream cheese, perfect for bagels and dips.",
  },
  {
    _id: uuid(),
    name: "Vegan Chocolate Chip Cookies",
    category: "Dessert",
    brand: "SweetVeg",
    type: "Soft-Baked",
    packSize: 12,
    price: 4.99,
    image:'https://ohsheglows.com/gs_images/2023/08/Vegan_Chocolate_Chip_Cookies_IMG_1403.jpg',
    ratings: 5,
    description:
      "Soft-baked vegan chocolate chip cookies that are simply irresistible.",
  },
];
