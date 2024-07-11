import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CRow,
  CFormInput,
  CCol,
} from "@coreui/react";

function PopupComponent({ visible, setVisible, data }) {
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
          {Object.entries(data).map(([key, value]) => {
            return (
              key !== "image" &&
              key !== "rating" && (
                <CCol md={6} key={key}>
                  <CFormInput
                    type="email"
                    id="inputEmail4"
                    label={key}
                    value={value}
                  />
                </CCol>
              )
            );
          })}
        </CRow>
      </CModalBody>
    </CModal>
  );
}

export default PopupComponent;
