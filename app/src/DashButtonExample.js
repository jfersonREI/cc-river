import React from "react";

import AppMain from "./components/AppMain/AppMain";

import DashButtons from "./components/DashButtons/DashButtons";
import DashButton from "./components/DashButton/DashButton";

import { ReactComponent as DashIconWorkLog } from "./assets/app-home/work-log.svg";
import { ReactComponent as DashIconDashboard } from "./assets/app-home/elis-dashboard.svg";
import { ReactComponent as DashIconElisConnection } from "./assets/app-home/elis-connection.svg";
import { ReactComponent as DashIconElisUserManual } from "./assets/app-home/elis-user-manual.svg";

export default function AppDash() {
  return (
    <div className="app">
      <div className="container">
        <AppMain>
          <DashButtons>
            <DashButton
              icon={<DashIconWorkLog />}
              label="My completed work log"
            />
            <DashButton icon={<DashIconDashboard />} label="ELIS dashboard" />
            <DashButton
              icon={<DashIconElisConnection />}
              label="ELIS connection"
            />
            <DashButton
              icon={<DashIconElisUserManual />}
              label="ELIS user manual"
              isExternal
            />
          </DashButtons>
        </AppMain>
      </div>
    </div>
  );
}
