import React from "react";
// import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodeList from './components/EpisodeList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <main>
        <Header />
        {/* <TabNav /> */}
        <Route path='/characters' component={CharacterList} />
        <Route path='/locations' component={LocationsList} />
        <Route path='/episodes' component={EpisodeList} />
      </main>
    </Router>
  );
}
