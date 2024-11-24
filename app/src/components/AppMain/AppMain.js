import AppPanel from "../AppPanel/AppPanel";
import AppPanelGrid from "../AppPanelGrid/AppPanelGrid";
import "./AppMain.scss";

function AppMain(props) {
  return (
    <div className="app-main">
      <div className="grid-container">
        <AppPanel>
          <AppPanelGrid>{props.children}</AppPanelGrid>
        </AppPanel>
      </div>
    </div>
  );
}

export default AppMain;
