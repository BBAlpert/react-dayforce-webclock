import "./styles.css";
import BadgeEntry from "./BadgeEntry";
import { useState } from "react";
import React from "react";
export default function App() {
  //state of which panel to show
  const [panel, setPanel] = React.useState("menu"); //menu or badge

  return (
    <div className="App">
      {/*<h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <MenuPanel setPanel={setPanel} panel={panel} />
    </div>
  );
}

function MenuPanel(props) {
  const setPanel = props.setPanel;
  const panel = props.panel;

  {
    if (panel === "menu") {
      return <MainMenu setPanel={setPanel} panel={panel} />;
    }
    {
      if (panel === "badge") {
        return <BadgeEntry setPanel={setPanel} panel={panel} />;
      }
    }
  }
}

function MainMenu(props) {
  const setPanel = props.setPanel;

  return (
    <div className="MainMenu">
      <button onClick={() => setPanel("badge")}>Add Badge</button>
    </div>
  );
}
