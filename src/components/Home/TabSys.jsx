import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleCard from "./SingleCard";
const TabSys = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-products")
      .then((res) => res.json())
      .then((data) => setAllData(data));
    console.log(allData);
  }, []);
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
            <div className="grid grid-cols-3 gap-8 p-4">
              {allData.map((data) => (
                <SingleCard key={data._id} data={data} />
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
