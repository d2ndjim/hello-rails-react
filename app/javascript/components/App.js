import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Message from "./Message";
import store from "../redux/configureStore";


function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" index element={<Message />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default App