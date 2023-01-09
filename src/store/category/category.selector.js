import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  return state.category;
};

const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.Categories;
  }
);

export const SelectCategoryMap = createSelector(
  [selectCategories],
  (categories) => {

    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

// export const SelectCategoryMap = (state) => {
//     //console.log("selector")
//     const categoriesMap = state.category.Categories.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {});

//     return categoriesMap;
// }
