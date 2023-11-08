import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { getCollectionAndDocuments } from "../utils/firebase.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  
  const [categoriesMap, setCateogiresMap] = useState({});
  const value = {categoriesMap, setCateogiresMap};

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      setCateogiresMap(categoryMap);
    }

    getCategoriesMap();
  }, []);

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}

CategoriesProvider.propTypes = {
  children: PropTypes.element.isRequired,
}