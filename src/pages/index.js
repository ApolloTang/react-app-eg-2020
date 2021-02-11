import React from "react";
import urlReactIcon from "common/images/react.png";

// Pages
const Home = () => (
  <>
    <div>home</div>
    <img src={urlReactIcon} />
  </>
);
const PageA = () => <div>Page content a</div>;
const PageNoMatch = () => <div>Page no match</div>;

export { Home, PageA, PageNoMatch };
