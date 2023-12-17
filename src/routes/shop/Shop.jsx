import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCollectionAndDocuments } from "../../utils/firebase";
import { setCategories } from '../../store/categories/category.reducer';

import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from "../category/Category";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCollectionAndDocuments();
      dispatch(setCategories(categoriesArray));
    }

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview /> } />
      <Route path=":category" element={<Category /> } />
    </Routes>
  )
}

export default Shop;