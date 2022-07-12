import './App.css';

function App() {
 

  return(
  <main>
      <h1>Our Tours</h1>
      <div className="underline"></div>
      <div className="container">
        <div className="image"></div>
        <div className="content">
          <div className="content-top"></div>
          <h4>Best of paris in 7 days</h4>
          <p>$1,995</p>
        </div>
        <div className="details">
          <p>
            The site could be temporarily unavailable or too busy. Try again in a few moments. If you are unable to load any pages, check your computer’s network connection. If your computer or network is protected by a firewall or proxy, make sure that Firefox is permitted to access the Web.
          </p>
          <button onClick = {()=>console.log("its clickable")}> Not Interested </button>
        </div>
      </div>
  </main>
  )
}

export default App;
