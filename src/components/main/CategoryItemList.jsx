import CategoryItem from "./CategoryItem";

const CategoryItemList = ({slugs}) => {
  console.log(slugs);
  return (
    <div>
        {slugs.map((s) => (
          <div key={s.id}>
            <h1>{s.name}</h1>
          </div>
        ))}
    </div>
  );
};
export default CategoryItemList;
