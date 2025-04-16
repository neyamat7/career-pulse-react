import React, { Suspense, use } from "react";
import CategoryItem from "./CategoryItem";

const jobCategoryItems = fetch("/categories.json").then((res) => res.json());

const ShowJobCategories = ({ jobCategoryItems }) => {
  const categoryNames = use(jobCategoryItems);
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {categoryNames.map((catItem) => (
        <CategoryItem key={catItem.id} catItem={catItem}></CategoryItem>
      ))}
    </div>
  );
};

const JobCategories = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 mt-20">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <Suspense>
        <ShowJobCategories
          jobCategoryItems={jobCategoryItems}
        ></ShowJobCategories>
      </Suspense>
    </div>
  );
};

export default JobCategories;
