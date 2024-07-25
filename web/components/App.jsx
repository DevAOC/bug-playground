import { useEffect } from "react";
import reactLogo from "../assets/react-logo.svg";
import "./App.css";
import { api } from "../api";
import { useFindFirst, useFindMany } from "@gadgetinc/react";
import UseActionFormTestComp from "./UseActionFormTestComp";
import ErrorCode from "./ErrorCode";

const App = () => {
  useEffect(() => {
    document.title = `Home - ${process.env.GADGET_PUBLIC_APP_SLUG} - Gadget`;
  }, []);

  const [{ data, error, fetching }] = useFindFirst(api.group);

  const [{ data: names }] = useFindMany(api.example)

  const doTheTing = useCallback(() => {
    
  }, [])

  useEffect(() => {
    if (!fetching) {
      console.log({
        data,
        error,
      });
    }
  }, [data, error, fetching]);

  return (
    <div className="app">
      <div className="app-content">

        {names?.map((example) => <div>{example.name}</div>)}
        <div>
          <img src={reactLogo} className="app-logo" alt="logo" />
          <div className="text">
            <p className="app-link">
              {"This page is powered by your "}
              <a
                href="/edit/files/web/components/App.jsx"
                target="_blank"
                rel="noreferrer"
              >
                web/components/App.jsx
              </a>
            </p>
            <p className="environment">
              This is your{" "}
              <span className={process.env.GADGET_PUBLIC_APP_ENV}>
                {process.env.GADGET_PUBLIC_APP_ENV}
              </span>{" "}
              environment
            </p>
            <UseActionFormTestComp />
            <ErrorCode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
