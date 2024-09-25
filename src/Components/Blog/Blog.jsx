import React from "react";

const BlogCard = ({ blog }) => {
  const { image, title, category, author, description, posted_time } = blog;

  return (
    <div className="card lg:card-side bg-white border-2 w-8/12 mx-auto mb-8">
      <figure>
        <img className="w-96" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold mb-3">{title}</h2>
        <h4 className="font-sm text-gray-500 underline">
          Catagory - {category}
        </h4>
        <p className="text-sm">{description}</p>
        <p>
          Author - <span className="font-bold">{author} </span>
        </p>
        <p>
          Posted Time - <span className="font-bold">{posted_time} </span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
