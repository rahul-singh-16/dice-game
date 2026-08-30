import React from "react";

const Card = ({name, price, description, image, id,}) => {
  return (
    <div className="min-h-full w-90 pl-4 pt-8 gap-4 text-white">

  <div className="h-40 w-85 backdrop-blur-sm bg-black/30 rounded-2xl flex items-center gap-2">
    <img
      className="h-30 w-30 rounded-full object-cover"
      src={image}
    />

    <div>
      <h1 className="font-bold text-xl">{name}</h1>

      <h3 className="font-medium text-xs">
        {description}
      </h3>

      <button className="bg-red-600 text-2xl font-bold px-6 py-1 ml-30.5 cursor-pointer text-white active:scale-95 translate-y-7.5 rounded-4xl">
        {price}
      </button>
    </div>
  </div>

</div>
  );
};

export default Card;
