import "./App.css";
import Button from "./Button";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="borders">
          <div className="Cities">
            <button className="current" id="currentCity">
              Current city
            </button>
            <Button>Kyiv</Button>
            <Button>Sumy</Button>
            <Button>Lisbon</Button>
            <Button>Cascais</Button>
          </div>
          <br />
          <form className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              aria-label="City"
              aria-describedby="button-addon2"
            />
            <input className="search" type="submit" defaultValue="Search" />
          </form>
          <div className="container">
            <div className="row">
              <div className="col" id="cityValue">
                City
              </div>
            </div>
            <div className="row">
              <div className="col" id="dayValue">
                Day
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img src="" alt="" id="icon" className="float-left" />
              </div>
            </div>
            <div className="row">
              <div className="col" id="description">
                Description
              </div>
              <div className="col" id="sunrise">
                Sunrise
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span id="tempValue">Temperature</span>
                <button className="celcius">°C</button>
                <span>/</span>
                <button className="farenheit">°F</button>
              </div>
              <div className="col" id="sunset">
                Sunset
              </div>
            </div>
          </div>
          <table className="table table-bordered" id="forecast" />
          <footer>
            <p>
              Created by Valeriia Mandrychenko,
              <a
                href="
https://github.com/ValeriiaMandrik/weather-app-react"
              >
                {" "}
                GitHub Repository{" "}
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
