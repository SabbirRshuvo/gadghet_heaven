import toast from "react-hot-toast";

// get all coffees from local storage
const getAllProducts = () => {
  const all = localStorage.getItem("products");

  if (all) {
    const products = JSON.parse(all);
    return products;
  } else {
    return [];
  }
};
// add a coffee to the localstorage

const addToCart = (product) => {
  const products = getAllProducts();
  const isExist = products.find((item) => item.id == product.id);
  if (isExist) {
    return toast.error("Products already exists!");
  }
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  toast.success("Successfully added!");
};

//  remove a coffee from local storage

const removeProducts = (id) => {
  const products = getAllProducts();
  const remaining = products.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(remaining));
  toast.success("Successfully delected");
};

export { addToCart, getAllProducts, removeProducts };
