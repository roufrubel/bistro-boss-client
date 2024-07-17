import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === "dessert");
  const soup = menu.filter(item => item.category === "soup");
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const offered = menu.filter(item => item.category === "offered");
  return (
    <div>
        <Helmet>
        <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover img={menuImg} title="our menu"></Cover>
        <SectionTitle subHeading={"Don't miss"} heading={"today's offers"}></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        <MenuCategory items={desserts} title={"dessert"} img={dessertImg}></MenuCategory>
        <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
        <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
    </div>
  );
};

export default Menu;
