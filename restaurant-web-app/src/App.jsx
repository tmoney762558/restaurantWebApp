import React from "react";
import {
  Navbar,
  Header,
  AboutUs,
  SpecialMenu,
  Chef,
  Intro,
  Laurels,
  Gallery,
  FindUs,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="restaurant__app">
      <Navbar></Navbar>
      <Header></Header>
      <AboutUs></AboutUs>
      <SpecialMenu></SpecialMenu>
      <Chef></Chef>
      <Intro></Intro>
      <Laurels></Laurels>
      <Gallery></Gallery>
      <FindUs></FindUs>
      <Footer></Footer>
    </div>
  );
};

export default App;
