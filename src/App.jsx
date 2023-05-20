
import './App.css'
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

function App() {

  return (
    <>
       <Tabs>
    <TabList>
      <Tab>math</Tab>
      <Tab>engineering</Tab>
      <Tab>science</Tab>
    </TabList>

    <TabPanel>
      <h2>algebra</h2>
      <h2>cricle</h2>
      <h2>differenciation</h2>
    </TabPanel>
    <TabPanel>
      <h2>computer</h2>
      <h2>textile</h2>
      <h2>cevil</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </>
  )
}

export default App
