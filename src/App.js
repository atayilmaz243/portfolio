import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import DisplayProject from './components/displayProject';
import Home from './home';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
    const [darkMode,setDarkMode] = useState(true);
    const [language,setLanguage] = useState("turkish");
    useEffect(() => {
      if (darkMode)
      {   
          document.documentElement.classList.remove('light');
          document.documentElement.classList.add('dark');
          // document.body.classList.remove('light');
          // document.body.classList.add('dark');
      }
      else
      {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
          // document.body.classList.remove('dark');
          // document.body.classList.add('light');
      }
    },[darkMode]);

    return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/portfolio" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} language = {language} setLanguage = {setLanguage} />} />
          <Route path="/project/:id" element={<DisplayProject darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage}/>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    );
  }
export default App;
