import React from "react";
import Card from "./componets/card";
import Png from "./componets/assets/s-l640.jpg"

const App = () => {
  return (
      <div className="container">
          <div className="row">
              <div className="col-6">
                  <div className="box">
                      <img src={Png} width="300"/>
                  </div>
              </div>
              <div className="col-6">
                  <div className="box">
                      <Card/>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default App;
