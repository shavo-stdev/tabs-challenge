import { memo } from "react";
import "./Tabs.css";
import TabButtons from "./TabButtons/TabButtons";
import TabContent from "./TabContent/TabContent";

const Tabs = ({ activeTab, setCurrentTab, data }) => {
  const changeTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="tabs">
      <h1>Tabs Challenge</h1>
      <TabButtons activeTab={activeTab} changeTab={changeTab} />
      <TabContent data={data} />
    </div>
  );
};

function areEqual(prevProps, nextProps) {
  return prevProps?.data === nextProps?.data;
}

export default memo(Tabs, areEqual);
