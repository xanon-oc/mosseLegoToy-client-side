import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleCard from "./SingleCard";
import { useNavigation } from "react-router-dom";
const TabSys = () => {
  const [allData, setAllData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [activeTab, setActiveTab] = useState("Home");
  const [searchValue, setSearchValue] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    fetch(`http://localhost:5000/all-products/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, [activeTab]);
  const handleSingleItem = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/single-product/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setSingleData(data));
  };
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(tabName);
  };
  const handleSearch = (e) => {
    fetch(`http://localhost:5000/search/${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        console.log(data);
      });
  };

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="form-control mt-8">
          <div className="input-group">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input input-bordered w-64"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-square">
              <svg viewBox="0 0 384 512" className="micIcon">
                <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Tabs className="flex flex-col justify-center items-center tabs tabs-boxed  bg-inherit">
        <div className="mb-8">
          <TabList className="">
            <Tab onClick={() => handleTabClick("Home")} className="tab">
              All Lego Toys
            </Tab>
            <Tab onClick={() => handleTabClick("star wars")} className="tab">
              Lego Star Wars
            </Tab>
            <Tab
              onClick={() => handleTabClick("Lego Architecture")}
              className="tab"
            >
              Lego Architecture
            </Tab>
            <Tab onClick={() => handleTabClick("Lego City")} className="tab">
              Lego City
            </Tab>
            <Tab onClick={() => handleTabClick("Lego Cars")} className="tab">
              Lego Cars
            </Tab>
          </TabList>
        </div>

        <div>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
              {allData.map((data) => (
                <SingleCard
                  key={data._id}
                  data={data}
                  handleSingleItem={handleSingleItem}
                  singleData={singleData}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
              {allData.map((data) => (
                <SingleCard
                  key={data._id}
                  data={data}
                  handleSingleItem={handleSingleItem}
                  singleData={singleData}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
              {allData.map((data) => (
                <SingleCard
                  key={data._id}
                  data={data}
                  handleSingleItem={handleSingleItem}
                  singleData={singleData}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
              {allData.map((data) => (
                <SingleCard
                  key={data._id}
                  data={data}
                  handleSingleItem={handleSingleItem}
                  singleData={singleData}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
              {allData.map((data) => (
                <SingleCard
                  key={data._id}
                  data={data}
                  handleSingleItem={handleSingleItem}
                  singleData={singleData}
                />
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabSys;
