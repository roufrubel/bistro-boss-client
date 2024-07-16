import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item mt-20 mb-20 p-8 text-white bg-fixed">
            <SectionTitle
            subHeading={"Check it out"}
            heading={"from our menu"}
            ></SectionTitle>
            <div className="flex justify-center items-center px-20 py-10 bg-black bg-opacity-20">
                <div><img src={featuredImg} alt="" /></div>
                <div className="md:ml-10">
                        <p>March 20, 2023</p>
                        <h2>WHERE CAN I GET SOME?</h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                </div>
            </div>
        </div>
    );
};

export default Featured;