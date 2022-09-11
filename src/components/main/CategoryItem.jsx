const CategoryItem = (props) => {
  return (
    <div className="category">
        <img src={props.img} alt="" />
        <li>{props.brand}</li>
        <li>{props.name}</li>
        <li>{props.price}</li>
    </div>
  )
}
export default CategoryItem