import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './shop.styles.scss';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action'
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      const getCategoriesMap = async () => {
          const categoriesArray = await getCategoriesAndDocuments('categories');
          // console.log(categoriesArray);
          dispatch(setCategories(categoriesArray));
      }
  getCategoriesMap();
  }, [dispatch]);
  return (
  // <span>Testing in progress</span>  
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=':category' element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;