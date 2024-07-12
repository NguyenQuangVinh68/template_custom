import { useEffect, useState } from "react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CRow,
  CFormInput,
  CCol,
  CButton,
} from "@coreui/react";

function PopupComponent({ onsubmit, visible, setVisible, data }) {
  const [inputForm, setInputForm] = useState({});

  const handleInput = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setVisible(false);
    onsubmit(inputForm);
  };

  useEffect(() => {
    setInputForm(data);
  }, []);

  return (
    <CModal
      size="xl"
      visible={visible}
      onClose={() => setVisible(false)}
      aria-labelledby="OptionalSizesExample1"
    >
      <CModalHeader>
        <CModalTitle id="OptionalSizesExample1">Extra large modal</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className="row g-3">
          {Object.entries(inputForm).map(([key, value]) => {
            return (
              key !== "image" &&
              key !== "products" &&
              key !== "rating" && (
                <CCol md={6} key={key}>
                  <CFormInput
                    type="email"
                    id="inputEmail4"
                    label={key}
                    value={value}
                    name={key}
                    onChange={handleInput}
                  />
                </CCol>
              )
            );
          })}
          <CCol xs="auto">
            <CButton
              color="primary"
              type="button"
              onClick={() => handleSubmit()}
            >
              Submit
            </CButton>
          </CCol>
        </CRow>
      </CModalBody>
    </CModal>
  );
}

export default PopupComponent;
