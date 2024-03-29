import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Tab from "../../components/Taboption/Tab";
import Footer from "../../components/Footer/Footer";
import Delivery from "../../components/Delivery/Delivery";
import DiningOut from "../../components/DiningOut/DiningOut";
import NightLife from "../../components/NightLife/NightLife";

const Homepage = () => {
  const [ActiveTab, setActiveTab] = useState("Delivery");
  const changeActiveTab = (activeTab) => {
    setActiveTab(activeTab);
  };

  const makeCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;
      case "Dining Out":
        return <DiningOut />;
      case "Nightlife":
        return <NightLife />;
      default:
        return <Delivery />;
    }
  };

  return (
    <div>
      <Header />
      <span className="w-8/12 ml-52">
        <Tab changeActiveTab={changeActiveTab} />
      </span>
      {makeCorrectScreen(ActiveTab)}
      <Footer />
    </div>
  );
};

export default Homepage;
