import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleCard from "./SingleCard";
const TabSys = () => {
  const [allData, setAllData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-products")
      .then((res) => res.json())
      .then((data) => setAllData(data));
    console.log(allData);
  }, []);
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
  return (
    <div>
      <Tabs className="flex flex-col justify-center items-center tabs tabs-boxed bg-inherit">
        <div className="mb-8">
          <TabList className="no-underline">
            <Tab className="tab">All Lego Toys</Tab>
            <Tab className="tab">Lego Star Wars</Tab>
            <Tab className="tab">Lego Architecture</Tab>
            <Tab className="tab">Lego City</Tab>
            <Tab className="tab">Lego Cars</Tab>
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
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabSys;
