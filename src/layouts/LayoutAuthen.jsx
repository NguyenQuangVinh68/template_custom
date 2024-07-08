import { Outlet } from "react-router-dom";

// import "../assets/css/admin.css";
import imgSection from "../assets/image/section.jpg";

function LayoutAuthen() {
  return (
    <div
      className="sign section--bg"
      data-bg={imgSection}
      style={{
        background: `url(${imgSection}) center center / cover no-repeat`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sign__content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutAuthen;
