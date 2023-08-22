import React from 'react';
import Header from './components/Header';
import MCQ from './components/MCQ';
import CheckBox from './components/CheckBox';
import ShortAnswer from './components/ShortAnswer';
import ParaGraph from './components/ParaGraph';
import Dropdown from './components/Dropdown';
import FileUpload from './components/FileUpload';
import LinearScale from './components/LinearScale';
import MultiChoiceGrid from './components/MultiChoiceGrid';
import TickBoxGrid from './components/TickBoxGrid';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header heading={"Assignment Task"} email={"super.assistant@gmail.com"} />
      <MCQ />
      <CheckBox />
      <ShortAnswer />
      <ParaGraph />
      <Dropdown />
      <FileUpload />
      <LinearScale />
      <MultiChoiceGrid />
      <TickBoxGrid />
      <Footer />
    </div>
  );
};

export default App;
