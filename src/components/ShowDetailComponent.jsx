import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
} from "@coreui/react";

// import { useContext } from "react";
// import { store } from "../context/ContextProvider";

function ShowDetailComponent({ products, openChange, onDelete }) {
  //   const { state, dispatch } = useContext(store);

  if (products.length === 0) return <p>No data available</p>;

  const headers = Object.keys(products[0]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  {products.length > 0 &&
                    headers.map((header, index) => {
                      return (
                        header !== "image" &&
                        header !== "products" &&
                        header !== "rating" && (
                          <CTableHeaderCell
                            key={index}
                            className="text-capitalize"
                          >
                            {header}
                          </CTableHeaderCell>
                        )
                      );
                    })}
                  <CTableHeaderCell>Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {products.length > 0 &&
                  products.map((item, idx) => {
                    return (
                      <CTableRow key={idx}>
                        {headers.map((iheader, index) => {
                          return (
                            iheader !== "image" &&
                            iheader !== "products" &&
                            iheader !== "rating" && (
                              <CTableDataCell key={index}>
                                {item[iheader]}
                              </CTableDataCell>
                            )
                          );
                        })}
                        <CTableDataCell>
                          <button
                            className="btn btn-warning"
                            onClick={() => openChange(item.id)}
                          >
                            edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => onDelete(item.id)}
                          >
                            delete
                          </button>
                        </CTableDataCell>
                      </CTableRow>
                    );
                  })}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default ShowDetailComponent;
