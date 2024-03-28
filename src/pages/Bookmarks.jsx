const Bookmarks = ({ BlogDa }) => {
  return (
    <div className="card w-full  bg-base-100 shadow-none border">
      <figure>
        <img
          src={BlogDa.cover_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{BlogDa.title}</h2>
        <p>{BlogDa.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-error text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
