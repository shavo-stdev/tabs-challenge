import React, { useRef, createRef } from "react";
import "./TabContent.css";

const TabContent = ({ data }) => {
  // Use Refs For Accessibility
  const tabContentRef = useRef(createRef());

  return (
    <div className="tab-content" ref={tabContentRef}>
      {data?.length ? (
        <ul className="tab-list">
          {data?.map(({ id, webTitle }, index) => (
            <li key={id} tabIndex={index}>
              {index + 1}. {webTitle}
            </li>
          ))}
        </ul>
      ) : (
        <span className="no-data">No Data Found !</span>
      )}
    </div>
  );
};

export default TabContent;
