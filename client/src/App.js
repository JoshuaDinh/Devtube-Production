import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import requests from "./requests";
import VideoPage from "./Pages/VideoPage";
import ResultsPage from "./Pages/ResultsPage";
import WatchPage from "./Pages/WatchPage";
import HomePage from "./Pages/HomePage";
import Searchbar from "./Components/Searchbar/Searchbar";

const App = () => {
  const [videoId, setVideoId] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <Sidebar />
      <Switch>
        <div className="App">
          <Searchbar />
          <Route path="/watch/:videoId">
            <WatchPage
              videoId={videoId}
              setVideoId={setVideoId}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          {/* Video Routes */}
          <Route path="/React">
            <VideoPage
              endPoint={requests.React}
              title="React Videos"
              setVideoId={setVideoId}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route path="/Node">
            <VideoPage
              endPoint={requests.Node}
              title="Node.js Videos"
              setVideoId={setVideoId}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route path="/Html-Css">
            <VideoPage
              exact
              endPoint={requests.htmlcss}
              title="Html & Css  Videos"
              setVideoId={setVideoId}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route path="/Javascript">
            <VideoPage
              endPoint={requests.Javascript}
              title="Javascript Videos"
              setVideoId={setVideoId}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route path="/MongoDB">
            <VideoPage
              endPoint={requests.MongoDB}
              title="MongoDB Videos"
              setVideoId={setVideoId}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route
            path="/search_results=:search"
            render={(props) => (
              <ResultsPage
                props={props}
                setVideoId={setVideoId}
                loading={loading}
                setLoading={setLoading}
              />
            )}
          />

          {/* HomePage */}
          <Route exact path="/">
            <HomePage
              setVideoId={setVideoId}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
