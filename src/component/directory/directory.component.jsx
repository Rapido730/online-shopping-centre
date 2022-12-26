import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss"

const Directory = ({CategoriesList}) => {
  
  return (
    <div className="directory-container">
      {CategoriesList.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
