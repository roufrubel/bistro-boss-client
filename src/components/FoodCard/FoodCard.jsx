

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
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
      <button className="btn btn-outline font-bold uppercase border-0 border-yellow-400 bg-slate-100 border-b-4 px-6 mt-2 text-center">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;