import React, { useState } from "react";
import BGImage from "./assets/BackGroundImage.jpg";
import Navbar from "./Navbar/Navbar";
import Card from "./Pages/Card";

const App = () => {
  const [text, setText] = useState("");
  const [meal, setMeal] = useState("");

  const foods = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: 220,
      description:
        "Aromatic basmati rice cooked with tender chicken and traditional spices.",
      image:
        "https://plus.unsplash.com/premium_photo-1694141251673-1758913ade48?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mealType: "Lunch",
    },
    {
      id: 2,
      name: "Butter Chicken",
      price: 250,
      description: "Tender chicken cooked in a creamy tomato and butter gravy.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      mealType: "Dinner",
    },
    {
      id: 3,
      name: "Margherita Pizza",
      price: 199,
      description:
        "Classic pizza topped with tomato sauce, mozzarella and fresh basil.",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
      mealType: "Lunch",
    },
    {
      id: 4,
      name: "Cheese Burger",
      price: 149,
      description:
        "Juicy grilled burger with melted cheese, lettuce and fresh vegetables.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      mealType: "Dinner",
    },
    {
      id: 5,
      name: "Masala Dosa",
      price: 100,
      description:
        "Crispy South Indian dosa served with spiced potato filling and chutney.",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
      mealType: "Breakfast",
    },
    {
      id: 6,
      name: "Paneer Tikka",
      price: 180,
      description:
        "Grilled pieces of paneer marinated with yogurt and aromatic spices.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
      mealType: "Dinner",
    },
    {
      id: 7,
      name: "Chole Bhature",
      price: 120,
      description:
        "Spicy chickpea curry served with fluffy deep-fried bhature.",
      image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027",
      mealType: "Breakfast",
    },
    {
      id: 8,
      name: "Palak Paneer",
      price: 190,
      description: "Soft paneer cubes cooked in a creamy spinach gravy.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
      mealType: "Dinner",
    },
    {
      id: 9,
      name: "Veg Fried Rice",
      price: 140,
      description:
        "Fried rice tossed with fresh vegetables, soy sauce and aromatic seasoning.",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
      mealType: "Lunch",
    },
    {
      id: 10,
      name: "Hakka Noodles",
      price: 150,
      description:
        "Stir-fried noodles tossed with vegetables and flavorful Asian sauces.",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
      mealType: "Dinner",
    },
    {
      id: 11,
      name: "Pav Bhaji",
      price: 110,
      description: "Spiced mashed vegetables served with buttery toasted pav.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Breakfast",
    },
    {
      id: 12,
      name: "Samosa",
      price: 40,
      description:
        "Crispy pastry filled with spicy potatoes, peas and Indian spices.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Breakfast",
    },
    {
      id: 13,
      name: "Aloo Paratha",
      price: 80,
      description:
        "Indian flatbread stuffed with seasoned mashed potatoes and spices.",
      image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027",
      mealType: "Breakfast",
    },
    {
      id: 14,
      name: "Garlic Naan",
      price: 60,
      description:
        "Soft Indian flatbread topped with garlic, butter and fresh herbs.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Dinner",
    },
    {
      id: 15,
      name: "Tandoori Chicken",
      price: 240,
      description:
        "Chicken marinated in yogurt and spices and roasted in a tandoor.",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
      mealType: "Dinner",
    },
    {
      id: 16,
      name: "Chicken Tikka",
      price: 210,
      description:
        "Tender chicken pieces grilled with yogurt, herbs and Indian spices.",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435",
      mealType: "Dinner",
    },
    {
      id: 17,
      name: "Dal Makhani",
      price: 170,
      description:
        "Slow-cooked black lentils prepared with butter and creamy spices.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
      mealType: "Lunch",
    },
    {
      id: 18,
      name: "Rajma Chawal",
      price: 130,
      description: "Spiced kidney bean curry served with steamed basmati rice.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Lunch",
    },
    {
      id: 19,
      name: "Veg Biryani",
      price: 180,
      description:
        "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c",
      mealType: "Lunch",
    },
    {
      id: 20,
      name: "Matar Paneer",
      price: 180,
      description: "Paneer and green peas cooked in a rich tomato-based gravy.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
      mealType: "Breakfast",
    },
    {
      id: 21,
      name: "Kadai Paneer",
      price: 190,
      description:
        "Paneer cooked with bell peppers, onions and freshly ground spices.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
      mealType: "Dinner",
    },
    {
      id: 22,
      name: "Shahi Paneer",
      price: 200,
      description:
        "Paneer cooked in a rich creamy gravy with nuts and aromatic spices.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
      mealType: "Dinner",
    },
    {
      id: 23,
      name: "Chicken Curry",
      price: 220,
      description:
        "Tender chicken simmered in a flavorful onion and tomato curry.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      mealType: "Lunch",
    },
    {
      id: 24,
      name: "Mutton Curry",
      price: 280,
      description:
        "Slow-cooked mutton prepared with onions, tomatoes and Indian spices.",
      image: "https://images.unsplash.com/photo-1545247181-516773cae754",
      mealType: "Lunch",
    },
    {
      id: 25,
      name: "Fish Curry",
      price: 240,
      description: "Fresh fish cooked in a spicy and tangy Indian curry.",
      image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b",
      mealType: "Lunch",
    },
    {
      id: 26,
      name: "Egg Curry",
      price: 140,
      description: "Boiled eggs cooked in a spicy onion and tomato gravy.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Dinner",
    },
    {
      id: 27,
      name: "Egg Fried Rice",
      price: 150,
      description:
        "Fried rice tossed with scrambled eggs, vegetables and savory sauces.",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
      mealType: "Lunch",
    },
    {
      id: 28,
      name: "Chicken Fried Rice",
      price: 180,
      description:
        "Fragrant fried rice combined with chicken pieces and fresh vegetables.",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
      mealType: "Lunch",
    },
    {
      id: 29,
      name: "Chicken Noodles",
      price: 180,
      description:
        "Stir-fried noodles tossed with chicken, vegetables and Asian sauces.",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
      mealType: "Dinner",
    },
    {
      id: 30,
      name: "Manchurian",
      price: 150,
      description:
        "Crispy vegetable balls tossed in a spicy Indo-Chinese sauce.",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
      mealType: "Breakfast",
    },
    {
      id: 31,
      name: "Spring Rolls",
      price: 120,
      description:
        "Crispy rolls filled with seasoned vegetables and served with sauce.",
      image: "https://images.unsplash.com/photo-1548507200-bb1d0d1c2d3f",
      mealType: "Dinner",
    },
    {
      id: 32,
      name: "Momos",
      price: 120,
      description:
        "Steamed dumplings filled with vegetables and served with spicy chutney.",
      image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9",
      mealType: "Dinner",
    },
    {
      id: 33,
      name: "Chicken Momos",
      price: 150,
      description:
        "Steamed dumplings stuffed with seasoned chicken and fresh herbs.",
      image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9",
      mealType: "Dinner",
    },
    {
      id: 34,
      name: "Pasta Alfredo",
      price: 220,
      description: "Creamy pasta tossed in a rich garlic and parmesan sauce.",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
      mealType: "Breakfast",
    },
    {
      id: 35,
      name: "Pasta Arrabbiata",
      price: 200,
      description: "Pasta served with a spicy tomato, garlic and herb sauce.",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
      mealType: "Breakfast",
    },
    {
      id: 36,
      name: "Lasagna",
      price: 250,
      description:
        "Layers of pasta, cheese, vegetables and rich tomato sauce baked together.",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
      mealType: "Lunch",
    },
    {
      id: 37,
      name: "Pepperoni Pizza",
      price: 299,
      description:
        "Classic pizza topped with mozzarella cheese and spicy pepperoni.",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
      mealType: "Dinner",
    },
    {
      id: 38,
      name: "Farmhouse Pizza",
      price: 279,
      description:
        "Loaded pizza topped with mushrooms, peppers, onions and cheese.",
      image: "https://images.unsplash.com/photo-1579751626657-72bc17010498",
      mealType: "Lunch",
    },
    {
      id: 39,
      name: "Veg Burger",
      price: 129,
      description:
        "Crispy vegetable patty served with lettuce, tomato and creamy sauce.",
      image: "https://images.unsplash.com/photo-1520072959219-c595dc870360",
      mealType: "Breakfast",
    },
    {
      id: 40,
      name: "Chicken Burger",
      price: 179,
      description:
        "Crispy chicken patty topped with lettuce, cheese and special sauce.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      mealType: "Breakfast",
    },
    {
      id: 41,
      name: "French Fries",
      price: 99,
      description: "Golden crispy potato fries seasoned with salt and herbs.",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
      mealType: "Breakfast",
    },
    {
      id: 42,
      name: "Cheese Fries",
      price: 139,
      description:
        "Crispy fries topped with melted cheese and flavorful seasoning.",
      image: "https://images.unsplash.com/photo-1585109649139-366815a0d713",
      mealType: "Lunch",
    },
    {
      id: 43,
      name: "Hot Dog",
      price: 149,
      description:
        "Grilled sausage served in a soft bun with sauces and fresh toppings.",
      image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88",
      mealType: "Breakfast",
    },
    {
      id: 44,
      name: "Club Sandwich",
      price: 180,
      description:
        "Triple-layer sandwich filled with vegetables, cheese and grilled chicken.",
      image: "https://images.unsplash.com/photo-1553909489-cd47e0907980",
      mealType: "Breakfast",
    },
    {
      id: 45,
      name: "Grilled Sandwich",
      price: 120,
      description:
        "Toasted sandwich filled with vegetables, cheese and flavorful seasoning.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
      mealType: "Breakfast",
    },
    {
      id: 46,
      name: "Veg Wrap",
      price: 130,
      description:
        "Soft wrap filled with fresh vegetables, sauces and crunchy lettuce.",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
      mealType: "Dinner",
    },
    {
      id: 47,
      name: "Chicken Wrap",
      price: 170,
      description:
        "Soft tortilla filled with grilled chicken, vegetables and creamy sauce.",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
      mealType: "Dinner",
    },
    {
      id: 48,
      name: "Chicken Shawarma",
      price: 160,
      description:
        "Seasoned chicken wrapped with vegetables, garlic sauce and herbs.",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783",
      mealType: "Dinner",
    },
    {
      id: 49,
      name: "Falafel Wrap",
      price: 140,
      description:
        "Crispy falafel wrapped with vegetables, hummus and tahini sauce.",
      image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb9",
      mealType: "Dinner",
    },
    {
      id: 50,
      name: "Greek Salad",
      price: 150,
      description:
        "Fresh salad with cucumber, tomatoes, olives, onions and feta cheese.",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      mealType: "Lunch",
    },
    {
      id: 51,
      name: "Caesar Salad",
      price: 180,
      description:
        "Crisp lettuce tossed with Caesar dressing, croutons and parmesan.",
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9",
      mealType: "Lunch",
    },
    {
      id: 52,
      name: "Fruit Salad",
      price: 120,
      description:
        "Fresh seasonal fruits served together for a light and refreshing meal.",
      image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea",
      mealType: "Lunch",
    },
    {
      id: 53,
      name: "Pancakes",
      price: 150,
      description: "Fluffy pancakes served with syrup, butter and fresh fruit.",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
      mealType: "Breakfast",
    },
    {
      id: 54,
      name: "Waffles",
      price: 170,
      description:
        "Crispy golden waffles served with fresh fruit and sweet syrup.",
      image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d",
      mealType: "Dinner",
    },
    {
      id: 55,
      name: "French Toast",
      price: 140,
      description:
        "Golden toasted bread soaked in sweet egg mixture and served with syrup.",
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
      mealType: "Breakfast",
    },
    {
      id: 56,
      name: "Omelette",
      price: 100,
      description:
        "Fluffy egg omelette cooked with onions, peppers and fresh herbs.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
      mealType: "Breakfast",
    },
    {
      id: 57,
      name: "Poha",
      price: 70,
      description:
        "Flattened rice cooked with onions, peanuts, spices and fresh coriander.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Breakfast",
    },
    {
      id: 58,
      name: "Upma",
      price: 70,
      description:
        "Soft semolina breakfast cooked with vegetables, spices and curry leaves.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Breakfast",
    },
    {
      id: 59,
      name: "Idli Sambar",
      price: 90,
      description:
        "Soft steamed rice cakes served with spicy sambar and coconut chutney.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
      mealType: "Breakfast",
    },
    {
      id: 60,
      name: "Medu Vada",
      price: 90,
      description:
        "Crispy South Indian lentil fritters served with sambar and chutney.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Breakfast",
    },
    {
      id: 61,
      name: "Dhokla",
      price: 80,
      description:
        "Soft and fluffy Gujarati steamed snack made from fermented batter.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Lunch",
    },
    {
      id: 62,
      name: "Kachori",
      price: 50,
      description:
        "Crispy Indian pastry filled with spiced lentils and aromatic masala.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Breakfast",
    },
    {
      id: 63,
      name: "Aloo Tikki",
      price: 80,
      description:
        "Crispy potato patties served with tangy chutneys and spices.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Dinner",
    },
    {
      id: 64,
      name: "Pani Puri",
      price: 60,
      description:
        "Crispy puris filled with spiced potatoes, tangy water and chutneys.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Dinner",
    },
    {
      id: 65,
      name: "Bhel Puri",
      price: 70,
      description:
        "Crunchy puffed rice mixed with vegetables, chutneys and spices.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Breakfast",
    },
    {
      id: 66,
      name: "Dahi Puri",
      price: 80,
      description:
        "Crispy puris topped with yogurt, chutneys, spices and crunchy sev.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Dinner",
    },
    {
      id: 67,
      name: "Misal Pav",
      price: 110,
      description:
        "Spicy sprout curry topped with farsan and served with soft pav.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Lunch",
    },
    {
      id: 68,
      name: "Vada Pav",
      price: 50,
      description:
        "Spiced potato fritter served inside a soft bun with chutneys.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Breakfast",
    },
    {
      id: 69,
      name: "Paniyaram",
      price: 90,
      description:
        "Soft South Indian rice dumplings cooked with spices and vegetables.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Lunch",
    },
    {
      id: 70,
      name: "Rava Dosa",
      price: 110,
      description:
        "Thin and crispy semolina dosa served with chutney and sambar.",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
      mealType: "Dinner",
    },
    {
      id: 71,
      name: "Malai Kofta",
      price: 210,
      description:
        "Soft paneer and potato dumplings served in a creamy rich gravy.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
      mealType: "Lunch",
    },
    {
      id: 72,
      name: "Aloo Gobi",
      price: 140,
      description:
        "Potatoes and cauliflower cooked with tomatoes and Indian spices.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Breakfast",
    },
    {
      id: 73,
      name: "Baingan Bharta",
      price: 150,
      description:
        "Roasted eggplant mashed and cooked with onions, tomatoes and spices.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Dinner",
    },
    {
      id: 74,
      name: "Bhindi Masala",
      price: 140,
      description:
        "Fresh okra cooked with onions, tomatoes and aromatic Indian spices.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Dinner",
    },
    {
      id: 75,
      name: "Jeera Rice",
      price: 100,
      description:
        "Fluffy basmati rice flavored with cumin seeds and aromatic spices.",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
      mealType: "Lunch",
    },
    {
      id: 76,
      name: "Plain Rice",
      price: 70,
      description:
        "Steamed fluffy rice that pairs perfectly with curries and dals.",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
      mealType: "Lunch",
    },
    {
      id: 77,
      name: "Tandoori Roti",
      price: 35,
      description: "Traditional Indian flatbread baked in a hot tandoor.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Dinner",
    },
    {
      id: 78,
      name: "Butter Naan",
      price: 55,
      description: "Soft naan brushed with melted butter and served hot.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Dinner",
    },
    {
      id: 79,
      name: "Rumali Roti",
      price: 45,
      description:
        "Ultra-thin soft Indian flatbread traditionally cooked on a hot griddle.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Dinner",
    },
    {
      id: 80,
      name: "Gulab Jamun",
      price: 70,
      description:
        "Soft milk-based dumplings soaked in sweet aromatic sugar syrup.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Dinner",
    },
    {
      id: 81,
      name: "Rasgulla",
      price: 70,
      description:
        "Soft cottage cheese balls soaked in light and sweet sugar syrup.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Dinner",
    },
    {
      id: 82,
      name: "Jalebi",
      price: 60,
      description:
        "Crispy spiral-shaped Indian sweet soaked in fragrant sugar syrup.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Breakfast",
    },
    {
      id: 83,
      name: "Kheer",
      price: 90,
      description:
        "Creamy rice pudding prepared with milk, sugar, cardamom and nuts.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Dinner",
    },
    {
      id: 84,
      name: "Gajar Halwa",
      price: 100,
      description:
        "Traditional carrot dessert cooked slowly with milk, sugar and nuts.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      mealType: "Breakfast",
    },
    {
      id: 85,
      name: "Chocolate Cake",
      price: 160,
      description: "Moist chocolate cake layered with rich chocolate cream.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      mealType: "Breakfast",
    },
    {
      id: 86,
      name: "Red Velvet Cake",
      price: 180,
      description:
        "Soft red velvet sponge layered with smooth cream cheese frosting.",
      image: "https://images.unsplash.com/photo-1586788224331-947f68671cf1",
      mealType: "Breakfast",
    },
    {
      id: 87,
      name: "Cheesecake",
      price: 220,
      description: "Creamy baked cheesecake served with a sweet fruit topping.",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
      mealType: "Lunch",
    },
    {
      id: 88,
      name: "Brownie",
      price: 120,
      description: "Rich and fudgy chocolate brownie with a soft center.",
      image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e",
      mealType: "Breakfast",
    },
    {
      id: 89,
      name: "Chocolate Donut",
      price: 90,
      description:
        "Soft donut covered with chocolate glaze and sweet toppings.",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
      mealType: "Breakfast",
    },
    {
      id: 90,
      name: "Ice Cream",
      price: 100,
      description:
        "Smooth and creamy ice cream available in delicious flavors.",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
      mealType: "Breakfast",
    },
    {
      id: 91,
      name: "Mango Lassi",
      price: 90,
      description: "Refreshing yogurt drink blended with sweet ripe mangoes.",
      image: "https://images.unsplash.com/photo-1577805947697-89e18249d767",
      mealType: "Lunch",
    },
    {
      id: 92,
      name: "Sweet Lassi",
      price: 70,
      description:
        "Creamy yogurt drink blended with sugar and lightly flavored with cardamom.",
      image: "https://images.unsplash.com/photo-1577805947697-89e18249d767",
      mealType: "Lunch",
    },
    {
      id: 93,
      name: "Mango Shake",
      price: 100,
      description: "Thick and creamy milkshake made with fresh ripe mangoes.",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696",
      mealType: "Lunch",
    },
    {
      id: 94,
      name: "Strawberry Shake",
      price: 110,
      description: "Creamy milkshake blended with fresh strawberries and milk.",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
      mealType: "Lunch",
    },
    {
      id: 95,
      name: "Cold Coffee",
      price: 120,
      description: "Chilled creamy coffee blended with milk and ice.",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
      mealType: "Breakfast",
    },
    {
      id: 96,
      name: "Masala Chai",
      price: 50,
      description:
        "Indian tea brewed with milk, tea leaves and aromatic spices.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574",
      mealType: "Breakfast",
    },
    {
      id: 97,
      name: "Fresh Lime Soda",
      price: 60,
      description:
        "Refreshing lime drink made with fresh lemon, soda and a touch of sweetness.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
      mealType: "Dinner",
    },
    {
      id: 98,
      name: "Mojito",
      price: 120,
      description:
        "Refreshing mint and lime drink served chilled with sparkling soda.",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      mealType: "Dinner",
    },
    {
      id: 99,
      name: "Fruit Smoothie",
      price: 130,
      description:
        "Healthy smoothie blended with fresh seasonal fruits and yogurt.",
      image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82",
      mealType: "Lunch",
    },
    {
      id: 100,
      name: "Chocolate Milkshake",
      price: 140,
      description:
        "Rich chocolate milkshake blended with creamy milk and chocolate.",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
      mealType: "Breakfast",
    },
  ];


  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
      <Navbar text={text} setText={setText} setMeal={setMeal} />

      <div className="flex flex-wrap min-h-full w-273">

          <Card
          />
        
      </div>
    </div>
  );
};

export default App;


///////////////////////////////////////////////////////////////////////




















//   const filteredFood = foods.filter((items) => {
//     const matchesMeal = !meal || meal === "All" || items.mealType === meal;

//     const matchesSearch = items.name.toLowerCase().includes(text.toLowerCase());

//     return matchesMeal && matchesSearch;
//   });

//   const displayedFood =
//     !meal && !text ? filteredFood.slice(0, 6) : filteredFood;

//   return (
//     <div
//       className="min-h-screen w-full bg-cover bg-center"
//       style={{ backgroundImage: `url(${BGImage})` }}
//     >
//       <Navbar text={text} setText={setText} setMeal={setMeal} />

//       <div className="flex flex-wrap min-h-full w-273">
//         {displayedFood.map((items) => (
//           <Card
//             key={items.id}
//             name={items.name}
//             price={items.price}
//             description={items.description}
//             image={items.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
