import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Dairy",
    description:
      "Dive into a world of creamy dreams, where cows get to keep their milk and you savor the dairy-free joyride!",
  },
  {
    _id: uuid(),
    categoryName: "Mock meat",
    description:
      "Trick your taste buds with our plant-powered, cruelty-free meaty marvels - perfect for guilt-free feasting.",
  },
  {
    _id: uuid(),
    categoryName: "Dessert",
    description:
      "Indulge in sweet fantasies, where every bite is a celebration of compassion and flavor fusion!",
  },
];
