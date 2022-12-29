export const SelectCategoryMap = (state) => {
    const categoriesMap = state.category.Categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    return categoriesMap;
}
