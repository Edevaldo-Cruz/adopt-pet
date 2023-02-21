import "./App.css";
import HeaderSection from "./Components/Header";
import Adopt from "./Components/Adopt";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await axios.get("https://localhost:7261/Pet/GetAllPets");
      const petList = response.data;
      const emptyUserPets = petList.filter((pet) => pet.idUser == null);
      console.log(emptyUserPets);
      if (emptyUserPets.length < 10) {
        for (let i = 0; i < 10 - emptyUserPets.length; i++) {
          const newPet = await axios.post("https://localhost:7261/Pet");
          petList.push(newPet.data.message);
        }
      }
      setPets(petList);
    };

    fetchPets();
  }, []);
  return (
    <>
      <HeaderSection />
      <Adopt />
      <Gallery />
      <About />
    </>
  );
}

export default App;
