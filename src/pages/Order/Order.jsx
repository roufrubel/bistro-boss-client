import { useState } from "react";
import orderCover from "../../assets/menu/order.png";
import Cover from "../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderCover}> title={"order food"}</Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="text-center mt-16 mb-10 font-bold">
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERT</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        </div>
        <TabPanel><OrderTab items={salad}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={desserts}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
