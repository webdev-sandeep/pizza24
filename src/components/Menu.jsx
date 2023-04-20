import React, { useState } from "react";

const Menu = () => {
  const menu = {
    Pizza: [
      {
        name: "Margherita",
        price: "12.50",
        ingredients: ["Fresh tomatoes", "fresh mozzarella", "fresh basil"],
        tag: null,
      },
      {
        name: "Formaggio",
        price: "15.50",
        ingredients: [
          "Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)",
        ],
        tag: null,
      },
      {
        name: "Chicken",
        price: "17.00",
        ingredients: ["Fresh tomatoes", "mozzarella", "chicken", "onions"],
        tag: null,
      },
      {
        name: "Pineapple'o'clock",
        price: "16.50",
        ingredients: [
          "Fresh tomatoes",
          "mozzarella",
          "fresh pineapple",
          "bacon",
          "fresh basil",
        ],
        tag: null,
      },
      {
        name: "Meat Town",
        price: "20.00",
        ingredients: [
          "Fresh tomatoes",
          "mozzarella",
          "hot pepporoni",
          "hot sausage",
          "beef",
          "chicken",
        ],
        tag: { name: "Hot!", color: "red-500" },
      },
      {
        name: "Parma",
        price: "12.50",
        ingredients: [
          "Fresh tomatoes",
          "mozzarella",
          "parma",
          "bacon",
          "fresh arugula",
        ],
        tag: { name: "New", color: "gray-500" },
      },
    ],
    Salads: [
      {
        name: "Lasagna",
        price: "13.50",
        ingredients: ["Special sauce", "mozzarella", "parmesan", "ground beef"],
        tag: { name: "Popular", color: "gray-500" },
      },
      {
        name: "Ravioli",
        price: "14.50",
        ingredients: ["Ravioli filled with cheese"],
        tag: null,
      },
      {
        name: "Spaghetti Classica",
        price: "11.00",
        ingredients: ["Fresh tomatoes", "onions", "ground beef"],
        tag: null,
      },
      {
        name: "Seafood pasta",
        price: "25.50",
        ingredients: ["Salmon", "shrimp", "lobster", "garlic"],
        tag: null,
      },
    ],
    Starter: [
      {
        name: "Today's Soup",
        price: "5.50",
        ingredients: ["Ask the waiter"],
        tag: { name: "Seasonal", color: "gray-500" },
      },
      {
        name: "Bruschetta",
        price: "8.50",
        ingredients: ["Bread with pesto", "tomatoes", "onion", "garlic"],
        tag: null,
      },
      {
        name: "Garlic bread",
        price: "9.50",
        ingredients: ["Grilled ciabatta", "garlic butter", "onions"],
        tag: null,
      },
      {
        name: "Tomozzarella",
        price: "10.50",
        ingredients: ["Tomatoes and mozzarella"],
        tag: null,
      },
    ],
  };
  const ALL_CATEGORIES = Object.keys(menu);
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES[0]);

  return (
    <div className="bg-black py-28 text-white px-4" id="menu">
      <h2 className="mb-20 text-6xl text-center">THE MENU</h2>
      <div>
        <div className="max-w-[61rem] mx-auto">
          <div className="grid grid-cols-3 border border-gray-500 text-2xl sm:text-3xl xl:text-4xl text-center">
            {ALL_CATEGORIES.map((category, index) => {
              return (
                <div
                  className={`col-span-1 capitalize py-4 cursor-pointer hover:bg-red-500 ${
                    activeCategory === category && "bg-red-500"
                  }`}
                  key={category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </div>
              );
            })}
          </div>
          <div className="bg-white text-black text-2xl sm:text-3xl xl:text-4xl">
            {menu[activeCategory].map((dish, index) => {
              return (
                <div
                  key={index}
                  className="py-12 px-4 border-b border-gray-200"
                >
                  <div className="flex justify-between">
                    <div className="flex mb-12">
                      <h2 className="font-bold">{dish?.name}</h2>
                      <span
                        className={`bg-${dish?.tag?.color} p-2 rounded text-2xl sm:text-3xl ml-2 text-white`}
                      >
                        {dish?.tag?.name}
                      </span>
                    </div>
                    <span className="bg-gray-500 text-white h-max p-2 rounded">
                      ${dish?.price}
                    </span>
                  </div>
                  <div className="text-gray-500">
                    {dish?.ingredients?.join(", ")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
