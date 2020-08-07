import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
 import Home from "components/hero/TwoColumnWithVideo.js";
 import Me from "components/hero/me.js";
 import ProjectHome from "components/features/VerticalWithAlternateImageAndText.js";
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
            <Route exact path="/me" component={Me} />
          </Switch>
        </div>

      </AnimationRevealPage>
    </Router>
  )
}
