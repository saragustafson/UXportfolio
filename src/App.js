import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
 import Home from "components/hero/TwoColumnWithVideo.js";
 import Me from "components/hero/me.js";
 import ProjectHome from "components/features/VerticalWithAlternateImageAndText.js";
 import TAT from "components/features/TAT.js";
 import WSWS from "components/features/WSWS.js";
 import K12 from "components/features/K12.js";
 import ST from "components/features/ST.js";
import ComponentRenderer from "ComponentRenderer.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App({ location }) {
  return (
    <Router>
      <AnimationRevealPage>

        <div>
          <Switch location={location}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/projects" component={ProjectHome}/>
            <Route exact path="/projects/tattoo-artist-tool" component={TAT}/>
            <Route exact path="/projects/west-sound-wildlife-shelter" component={WSWS}/>
            <Route exact path="/projects/K-12-Outreach-Impact" component={K12}/>
            <Route exact path="/projects/seattle-transit" component={ST}/>
            <Route exact path="/me" component={Me} />
          </Switch>
        </div>

      </AnimationRevealPage>
    </Router>
  )
}
