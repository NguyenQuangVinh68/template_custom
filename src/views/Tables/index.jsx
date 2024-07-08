import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

const Tables = () => {
  const [data, setData] = useState([]);
  const dataInit = [
    { id: 1, name: "Alice", age: 25, city: "HCM" },
    { id: 2, name: "Bob", age: 30, city: "HCM" },
    { id: 3, name: "Charlie", age: 35, city: "HCM" },
  ];

  useEffect(() => {
    setData(dataInit);
  }, []);

  if (data.length === 0) return <p>No data available</p>;

  const headers = Object.keys(data[0]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  {data.length > 0 &&
                    headers.map((header, index) => {
                      return (
                        <CTableHeaderCell key={index}>
                          {header}
                        </CTableHeaderCell>
                      );
                    })}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.length > 0 &&
                  data.map((item, idx) => {
                    return (
                      <CTableRow key={idx}>
                        {headers.map((header, index) => {
                          return (
                            <CTableDataCell key={index}>
                              {item[header]}
                            </CTableDataCell>
                          );
                        })}
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
};

export default Tables;
