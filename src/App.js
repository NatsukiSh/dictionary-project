import "./App.css";
import logo from "./Signature.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="My-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/NatsukiSh/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced
            </a>
            coded with ❤ by Natsuki Shuko and on{" "}
            <a
              href="https://app.netlify.com/sites/magical-kringle-3a7435/overview"
              rel="noreferrer"
              target="_blank"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
