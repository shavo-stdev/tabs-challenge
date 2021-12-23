import { createRef, useRef } from "react";
import { tabs } from "../../../constans";
import "./TabButtons.css";

const TabButtons = ({ changeTab, activeTab }) => {
  // Use Refs For Accessibility
  const buttonsRef = useRef([createRef(), createRef(), createRef()]);

  return (
    <div className="tab-buttons">
      {tabs?.map(({ label, id }, index) => {
        return (
          <button
            key={index + id}
            className={id === activeTab ? "active" : ""}
            onClick={() => changeTab(id)}
            ref={buttonsRef.current[index]}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default TabButtons;
