import CategoryItem from "./CategoryItem";

const CategoryItemList = ({slugs}) => {
  return (
    <div>
      {slugs.map((sl) => {
        return <CategoryItem name={slugs.name} img={slugs.img} price={slugs.price} brand={slugs.brand} />
      })}
    </div>
  );
};
export default CategoryItemList;
