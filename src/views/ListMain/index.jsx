import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

import ShowDetailComponent from "../../components/ShowDetailComponent";
import Loading from "../../components/Loading";
import apiListMain from "../../api/apiListMain";
import PopupComponent from "../../components/PopupChangeComponent";
import { useContext } from "react";
import { store } from "../../context/ContextProvider";

function ListMain() {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);
  const [product, setProduct] = useState({});
  // const { state, dispatch } = useContext(store);

  const [isOpenModal, setOpenModal] = useState(false);

  const { id } = useParams();
  const getProduct = async () => {
    try {
      console.log("getdata");
      const { data } = await apiListMain.getAll(id);
      // dispatch({ type: "set_data", data: data });
      setLoad(false);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenChange = (productId) => {
    data.map((item) => {
      if (item.id === productId) {
        setOpenModal(true);
        setProduct(item);
      }
    });
  };
  const handleChange = (newData) => {
    let flag = false;
    console.log(newData);
    const id = newData.id;
    setData(
      data.map((item) => {
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
        data.map(async (item) => {
          if (item.id === productId) {
            apiListMain.delete(productId).then((res) => {
              swal({
                title: "Done!",
                text: "user is deleted",
                icon: "success",
                timer: 2000,
                button: false,
              });
            });
            try {
              await reloadData(productId);
            } catch (e) {
              console.log(e);
            }
          }
        });
      }
    });
  };

  const reloadData = (id) => {
    setData((prev) =>
      prev.filter((item) => {
        return item.id != id;
      })
    );
  };

  console.log(data);
  // get all product
  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <ShowDetailComponent
          products={data}
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
}

export default ListMain;
