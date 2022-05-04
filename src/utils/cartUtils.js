export const addToCart = (items, itemsToAdd) => {
  const existingItems = items.find((item) => item.id === itemsToAdd.id);

  if (existingItems) {
    return items.map((item) =>
      item.id === itemsToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...items, { ...itemsToAdd, quantity: 1 }];
};
