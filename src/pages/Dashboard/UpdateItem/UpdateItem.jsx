import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_imageHostingKey;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {
    const {name, category, recipe, price, _id} = useLoaderData();
    // name, category, recipe, price
    const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
    console.log(name)

    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success) {
            // now the menu item data send to the server with image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            //
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            // console.log(menuRes.data);
            if(menuRes.data.modifiedCount > 0){
                reset();
                // success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        // console.log('with image url', res.data);
       
      };

    return (
        <div>
            <SectionTitle heading="update an Item" subHeading="Update menu"></SectionTitle>
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <input
              defaultValue={name}
                {...register("name", { required: true})}
                type="text"
                placeholder="Recipe Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
            {/* category and price*/}
          <div className="flex w-full gap-6 my-4">
            <>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Select Category*</span>
                </div>
                <select
                  {...register("category" , { required: true})}
                  className="select select-primary w-full"
                  defaultValue="default"
                >
                  <option disabled value={category}>
                    Select a category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </label>
            </>
            <>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                defaultValue={price}
                  {...register("price" , { required: true})}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </>
          </div>
  {/* Recipe details */}
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Recipe Details*</span>
              </div>
              <textarea
              defaultValue={recipe}
                {...register("recipe" , { required: true})}
                type="text"
                placeholder="Recipe details"
                className="input input-bordered w-full"
              ></textarea>
            </label>
          </div>
  {/* Recipe Image file upload */}
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text"></span>
              </div>
              <input
                {...register("image" , { required: true})}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </label>
          </div>
  {/* Add button */}
          <button className="btn btn-warning my-4">
            Add Menu Item
          </button>
        </form>
      </div>
        </div>
    );
};

export default UpdateItem;