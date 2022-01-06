import { createRef, useRef , FC, LegacyRef, MutableRefObject } from "react";
import { Props } from "./interfaces";
import { Tabs, Tab } from "../../../constans/interfaces";
import { tabs } from "../../../constans";
import "./TabButtons.css";


const TabButtons : FC<Props> = ({ changeTab, activeTab }) : JSX.Element => {
  // Use Refs For Accessibility
  const btnRef: LegacyRef<HTMLButtonElement> = createRef();
  const buttonsRef: MutableRefObject<LegacyRef<HTMLButtonElement>[]> = useRef([btnRef, btnRef, btnRef]);

  return (
    <div className="tab-buttons">
      {(tabs as Tabs)?.map(({ label, id } : Tab, index: number) => {
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
