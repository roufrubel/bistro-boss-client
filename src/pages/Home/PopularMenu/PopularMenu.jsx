import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems);
        })
    }, [])

    return (
        <div className="mt-14 mb-14">
            <SectionTitle
            subHeading={"Popular Items"}
            heading={"from our menu"}
            ></SectionTitle>
            <div className="mt-10 grid md:grid-cols-2 gap-8">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            
        </div>
    );
};

export default PopularMenu;