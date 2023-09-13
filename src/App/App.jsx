import React, { useEffect, useState } from "react";
import FlexW1G from "./components/layout/FlexW1G/FlexW1G";
import FlexH3G from "./components/layout/FlexH3G/FlexH3G";
import { MemeFormStoredData } from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import Navbar from "./components/ui/Navbar/Navbar";
import Header from "./components/ui/Header/Header";
import { MemeViewerStoredCurrent } from "./components/ui/MemeViewer/MemeViewer";
import { MemeThumbnailStoredDatas } from "./components/MemeThumbnail/MemeThumbnail";
import { Routes, Route, useParams } from "react-router-dom";
import { store } from "./store/store";
import { change, clear } from "./store/current";

const App = () => {
  return (
    <div className="App">
      <FlexH3G>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Bienvenue sur la homepage</h1>} />
          <Route path="/thumbnail" element={<MemeThumbnailStoredDatas />} />
          <Route path="/editor" element={<PageEditor />} />
          <Route path="/editor/:id" element={<PageEditor />} />
        </Routes>
        <Footer />
      </FlexH3G>
    </div>
  );
};

function PageEditor() {
  const params=useParams();
  useEffect(() => {
    const current= store.getState().ressources.memes.find(m=>m.id===Number(params.id))
    if(undefined!== current)store.dispatch(change(current))
    else store.dispatch(clear());
  }, [params,store.getState()])
  
  return (
    <FlexW1G>
      <MemeViewerStoredCurrent basePath="" />
      <MemeFormStoredData />
    </FlexW1G>
  );
}

export default App;
