import { useEffect, useState } from "react";

function Pagination({ paginator }) {

  const items = []
  return (
    <div className="col-12">
      <div className="paginator-wrap">
        <span>{paginator.pageSize} from {paginator.totalRecords}</span>
        <ul className="paginator">
          <li className="paginator__item paginator__item--prev">
            <a href="#" className="paginator__item--disable" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
              >
                <path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z" />
              </svg>
            </a>
          </li>
          <li className="paginator__item">
            <a href="#">1</a>
          </li>
          <li className="paginator__item paginator__item--active">
            <a href="#">2</a>
          </li>
          <li className="paginator__item">
            <a href="#">3</a>
          </li>
          <li className="paginator__item">
            <a href="#">4</a>
          </li>
          <li className="paginator__item paginator__item--next">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default Pagination;