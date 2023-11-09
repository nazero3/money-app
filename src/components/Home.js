import "../App.css";
import "./Home.css"

function Home() {
  return (
    <div className="container">
      <header >
        <h1> Money Management App</h1>
        <button><a href="/payment-form"> Payment Form</a> </button>
        <button><a href="/credit-form"> Credit Form</a></button>
      </header>
    </div>
  );
}

export default Home;
