import React from 'react';
import './App.css';
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
import { ThemeProvider } from '@mui/material';
import Theme from './components/ThemeProvider';

const App = () => {
  return (
    <div className='app'>
      <ThemeProvider theme={Theme}>
        <Header />
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
      </ThemeProvider>
    </div>
  );
};

export default App;
