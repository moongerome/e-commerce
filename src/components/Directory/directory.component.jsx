import "./directory.styles.css";
import CategoryItem from "../CategoryItem/categoryItem.component";
const Directory = ({ categoryItems }) => {
  return (
    <div className="directory-container">
      {categoryItems.map((categoryItem) => (
        <CategoryItem
          key={categoryItem.id}
          categoryItem={categoryItem}
          title={categoryItem.description}
          image={categoryItem.image}
        />
      ))}
    </div>
  );
};

export default Directory;
