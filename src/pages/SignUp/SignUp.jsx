import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => console.log(data)

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered"  />
        </div>
        {errors.name && <span className="text-red-400">This name is required</span>}
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered"  />
          {errors.email && <span className="text-red-400">This email is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" placeholder="password" className="input input-bordered"  />
          {/*  password validation message set up */}
          {errors.password?.type === "required" && <span  className="text-red-400">This password is  required</span>}
          {errors.password?.type === "minLength" && (
        <p className="text-red-400">This password is must be minimum 6 characters</p>
      )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      <div className='p-4 py-4'>
              <p>Already have account? <span className="font-bold text-primary"><Link to="/signin">Login here</Link></span></p>
            </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;