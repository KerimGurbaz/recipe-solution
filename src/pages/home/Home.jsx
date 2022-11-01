import "./Home.style";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";

const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack"];
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState("");

  const APP_ID = "0a8f3cf7";
  const APP_KEY = "71b3096aed8981f4c337f35fe72e1218";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      console.log("data", data.hits);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(recipes);
  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
    </div>
  );
};

export default Home;
