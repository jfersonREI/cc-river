import "./AppPanel.scss";

function AppPanel(props) {
  return <div className="app-panel"> {props.children}</div>;
}

export default AppPanel;
