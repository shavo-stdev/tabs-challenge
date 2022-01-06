import { useEffect, useState , FC, EffectCallback } from "react";
import Loader from "../components/Loader/Loader";
import Tabs from "../components/Tabs/Tabs";
import { getFootball, getTravel, getUkNews } from "../api";
import { tabs } from "../constans/index";
import { Data } from "src/constans/interfaces";
import { TabActions } from "./interfaces";
import "./Home.css";

const tabActions: TabActions = {
  1: getUkNews,
  2: getFootball,
  3: getTravel,
};

const Home: FC = () : JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<number>(tabs[0].id);
  const [data, setData] = useState<Array<Data> | []>([]);

  const fetchData = async (tabId : number) : Promise<void> => {
    if (tabId) {
      try {
        setIsLoading(true);
        const response: Array<Data> | [] = await tabActions[tabId]();
        setData(response);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  const cleanUp : EffectCallback = () : void => {
    setIsLoading(false);
    setCurrentTab(tabs[0].id);
    setData([]);
  };

  const init : EffectCallback = () : any  => {
    fetchData(currentTab);
    return cleanUp;
  };

  const tabChangeListener : EffectCallback = () : void => {
    if (currentTab) {
      fetchData(currentTab);
    }
  };

  useEffect(tabChangeListener, [currentTab]);

  useEffect(init, []);

  return (
    <div className="Home">
      {/* Tabs Component */}
      <Tabs activeTab={currentTab} setCurrentTab={setCurrentTab} data={data} />
      {/* App Loader */}
      {isLoading ? <Loader /> : <></>}
    </div>
  );
}

export default Home;
