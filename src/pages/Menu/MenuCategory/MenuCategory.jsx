import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="mb-12">
            { title &&<Cover img={img} title={title}></Cover>}
            <div className="mt-10 grid md:grid-cols-2 gap-8 mb-4">
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`} className="flex justify-center"><button className="btn btn-outline font-bold uppercase border-0 border-yellow-600 text-yellow-600 border-b-4 px-6 mt-2 text-center">-- Order Your Food Now -- </button></Link>
            {/* <Link to={`/order/${title}`}><button className="btn btn-outline font-bold uppercase my-4 border-0 border-b-4">Order Now </button></Link> */}
        </div>
    );
};

export default MenuCategory;