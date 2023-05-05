import { Link } from "react-router-dom";

const SingleCheif = ({ cheif }) => {
  return (
    <div className='my-16 md:w-94 w-11/12 mx-auto'>
      <div className="card bg-base-100 shadow-xl">
        <figure><img className='object-cover image-full' src={cheif.image} alt="image" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {cheif.name}
            <div className="badge bg-orange-500 border-none py-3">{cheif.experience} Years Experience</div>
          </h2>
          <p>Number Of Recipe : {cheif.recipes}</p>
          <p>Likes : {cheif.likes}</p>

          <div className="card-actions justify-end">
            <Link to={`/${cheif.id}`}>
              <button className='border border-orange-500 rounded-full px-3 py-1 hover:bg-orange-500 hover:text-white duration-300'>View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCheif;
