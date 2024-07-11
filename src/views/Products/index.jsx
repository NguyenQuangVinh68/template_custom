import { useEffect, useState } from "react";

import ProductDtlComponent from "../../components/ProductDtlComponent";
import Loading from "../../components/Loading";
import apiProduct from "../../api/apiProduct";
import PopupComponent from "../../components/PopupComponent";
import { useContext } from "react";
import { store } from "../../context/ContextProvider";

const Products = () => {
  const [load, setLoad] = useState(true);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const { state, dispatch } = useContext(store);

  const [isOpenModal, setOpenModal] = useState(false);

  const getProduct = async () => {
    try {
      const { data } = await apiProduct.getAll();
      dispatch({ type: "set_data", data: data });
      setLoad(false);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (productId) => {
    products.map((item) => {
      if (item.id === productId) {
        setOpenModal(true);
        setProduct(item);
      }
    });
  };

  const handleDelete = (productId) => {
    products.map((item) => {
      if (item.id === productId) {
        console.log(`delete ${productId}`);
      }
    });
  };

  // get all product
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <ProductDtlComponent
          products={products}
          onChange={handleChange}
          onDelete={handleDelete}
        />
      )}
      {isOpenModal && (
        <PopupComponent
          visible={isOpenModal}
          setVisible={setOpenModal}
          data={product}
        ></PopupComponent>
      )}
    </>
  );
};

export default Products;
