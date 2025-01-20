import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";
import MacBookPro16MainScreen from "./components/OverviewView";
import { useViewContext } from "./context/ViewContext";
import Courses from "./components/Courses";
import { Route, Routes, useLocation } from "react-router-dom";
import Knowledge from "./components/Knowledge";

function App() {
  const { isExpanded } = useViewContext();
  const location = useLocation();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedSection("Video Hub");
    } else {
      setSelectedSection(null);
    }
  }, []);

  return (
    <div className="w-full h-screen flex flex-col bg-white text-left text-base text-black font-inter">
      <div className="flex-shrink-0">
        <Navbar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      </div>
      <div className="flex flex-grow overflow-hidden">
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/" element={
            isExpanded ? (
              <MacBookPro16MainScreen />
            ) : (
              <>
                <ContentLeft className="flex-grow" />
                <ContentRight className="w-1/4 h-full overflow-y-auto" selectedSection={selectedSection || ""} />
              </>
            )
          } />
          <Route path="/knowledge" element={<Knowledge />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
