import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <div className="mt-14 mb-14">
            <SectionTitle
            subHeading={"Popular Items"}
            heading={"from our menu"}
            ></SectionTitle>
            
            
        </div>
    );
};

export default PopularMenu;