import React from "react";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className=" header navbar navbar-dark bg-dark">
          <div className="container">
            <div className="row m-auto">
              <i className="fa fa-hand-pointer-o fa-4x text-white" />
              <div className="h1 ml-2 my-auto text-light" href="/">
                Botón on/off
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div className="container">
            <div className="d-flex flex-row">
              <div className="col-md-4 mx-auto">
                <div className="panel">
                  <button type="button" className="btn btn-primary">
                    Ocultar fecha
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
