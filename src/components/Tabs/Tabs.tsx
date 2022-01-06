import { memo , FC} from "react";
import TabButtons from "./TabButtons/TabButtons";
import TabContent from "./TabContent/TabContent";
import {Props} from './interfaces'
import "./Tabs.css";



const Tabs : FC<Props> = ({ activeTab, setCurrentTab, data }) : JSX.Element => {

  const changeTab = (tab : number) : void => {
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


function areEqual(prevProps : Props, nextProps : Props ): boolean{
  return prevProps?.data === nextProps?.data;
}

export default memo<Props>(Tabs, areEqual);
