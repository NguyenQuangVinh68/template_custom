import { useEffect, useState } from "react";
import swal from "sweetalert";

import ProductDtlComponent from "../../components/ShowDetailComponent";
import Loading from "../../components/Loading";
import apiProduct from "../../api/apiProduct";
import PopupComponent from "../../components/PopupChangeComponent";
import { useContext } from "react";
import { store } from "../../context/ContextProvider";

const Products = () => {
  const [load, setLoad] = useState(true);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  // const { state, dispatch } = useContext(store);

  const [isOpenModal, setOpenModal] = useState(false);

  const getProduct = async () => {
    try {
      console.log("getdata");
      const { data } = await apiProduct.getAll();
      // dispatch({ type: "set_data", data: data });
      setLoad(false);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenChange = (productId) => {
    products.map((item) => {
      if (item.id === productId) {
        setOpenModal(true);
        setProduct(item);
      }
    });
  };
  const handleChange = (newData) => {
    let flag = false;
    const id = newData.id;
    setProduct(
      products.map((item) => {
        if (item.id == id) {
          flag = true;
          return newData;
        } else {
          return item;
        }
      })
    );
    if (flag == true) {
      swal({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDelete = (productId) => {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((willDelete) => {
      if (willDelete) {
        products.map((item) => {
          if (item.id === productId) {
            apiProduct.delete(productId).then((res) => {
              swal({
                title: "Done!",
                text: "user is deleted",
                icon: "success",
                timer: 2000,
                button: false,
              });
            });
            reloadData(productId);
          }
        });
      }
    });
  };

  const reloadData = (id) => {
    setProducts((prev) =>
      prev.filter((item) => {
        return item.id != id;
      })
    );
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
          openChange={handleOpenChange}
          onDelete={handleDelete}
        />
      )}
      {isOpenModal && (
        <PopupComponent
          visible={isOpenModal}
          setVisible={setOpenModal}
          data={product}
          onsubmit={handleChange}
        ></PopupComponent>
      )}
    </>
  );
};

export default Products;
