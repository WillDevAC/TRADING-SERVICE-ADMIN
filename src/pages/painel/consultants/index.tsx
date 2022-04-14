import React, { useState } from "react";

import Sidebar from "../../../components/template/pages/consultants/sidebar";
import Navigation from "../../../components/template/pages/consultants/navigation";
import { DashboardContainer, DashboardTitle, DashboardContent } from "./styles";

export default function IndexPage() {
  return (
    <>
      <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
          <Sidebar />
          <div className="w-full">
            <Navigation />
            <DashboardContainer>
              <DashboardTitle>
                <h1>Willzinho sentafofo s2</h1>
              </DashboardTitle>
              <DashboardContent>
                <h1>I won't deny ya, im a straight ryda, you don't wanna fuck wit meee</h1>
              </DashboardContent>
            </DashboardContainer>
          </div>
        </div>
      </div>
    </>
  );
}
