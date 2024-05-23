import CategoryItem from '../category-item/category-component';
import './directory.styles.scss'
function Directory({categories}) {
    return(
        <div className='categories-container'>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category}/>
          ))}
        </div>
    )
};

export default Directory;