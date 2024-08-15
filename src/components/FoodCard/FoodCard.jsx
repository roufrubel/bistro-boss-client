import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [ , refetch] = useCart();

    const handleAddToCart = () => {
      if(user && user.email){
        // send cart to db
        const cartItem = {
          menuId: _id,
          email: user.email,
          price,
          image,
          name
        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1000
            });
            // refetch the cart data to update cart count
            refetch();
          }
        })
      } else{
        Swal.fire({
          title: "You are not logged in?",
          text: "Please login to add the cart !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login"
        }).then((result) => {
          if (result.isConfirmed) {
            // send user to the login page
            navigate('/login', {state: {from: location}});
          }
        });
      }
    }
    
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <p className="absolute bg-slate-900 px-4 text-white mr-4 mt-4 right-0">{price}</p>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button
      onClick={handleAddToCart}
      className="btn btn-outline font-bold uppercase border-0 border-yellow-400 bg-slate-100 border-b-4 px-6 mt-2 text-center">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;