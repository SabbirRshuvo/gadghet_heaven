import toast from "react-hot-toast";

const getAllWishList = () => {
  const all = localStorage.getItem("favorites");

  if (all) {
    const favorites = JSON.parse(all);
    return favorites;
  } else {
    return [];
  }
};

const addWishList = (product) => {
  const favorites = getAllWishList();
  const isExist = favorites.find((item) => item.id == product.id);
  if (isExist) {
    return toast.error("wishlist already added");
  }
  favorites.push(product);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("Successfully added");
};

const removeWishList = (id) => {
  const favorites = getAllWishList();
  const remaining = favorites.filter((product) => product.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remaining));
  toast.success("Successfully deleted");
};

export { addWishList, getAllWishList, removeWishList };
