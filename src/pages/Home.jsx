import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import Tabs from "../components/Tabs/Tabs";
import { getFootball, getTravel, getUkNews } from "../api";
import { tabs } from "../constans/index";
import "./Home.css";

const tabActions = {
  1: getUkNews,
  2: getFootball,
  3: getTravel,
};

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState(tabs[0].id);
  const [data, setData] = useState([]);

  const fetchData = async (tabId) => {
    if (tabId) {
      try {
        setIsLoading(true);
        const response = await tabActions[tabId]();
        setData(response);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  const cleanUp = () => {
    setIsLoading(false);
    setCurrentTab(null);
    setData([]);
  };

  const init = () => {
    fetchData(currentTab);
    return cleanUp;
  };

  const tabChangeListener = () => {
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
