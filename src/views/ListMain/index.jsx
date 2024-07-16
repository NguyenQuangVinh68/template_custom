import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import swal from "sweetalert";

import ShowDetailComponent from "../../components/ShowDetailComponent";
import Loading from "../../components/Loading";
import PopupComponent from "../../components/PopupChangeComponent";

import { ApiListMain } from "../../api";
import NotFound from "../../components/NotFound";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function ListMain() {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);
  const [product, setProduct] = useState({});

  const [isOpenModal, setOpenModal] = useState(false);

  const query = useQuery();
  const pgmNo = query.get("PgmNo");
  console.log;
  if (!pgmNo) {
    return <NotFound></NotFound>;
  }

  const getProduct = async () => {
    try {
      const { data } = await ApiListMain.getAll(pgmNo);
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

  useEffect(() => {
    getProduct();
  }, [pgmNo]);
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
