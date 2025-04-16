import React from "react";

const CategoryItem = ({ catItem }) => {
  const { logo, availability, category_name } = catItem;
  return (
    <div className="bg-indigo-50 p-8 rounded-md">
      <div className="mb-6">
        <img src={logo} alt="" />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{category_name}</h2>
        <p className="text-gray-400">{availability}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
