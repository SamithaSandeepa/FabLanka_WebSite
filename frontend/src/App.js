import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/client/Home";
import Login from "./containers/loginpages/Login";
import Signup from "./containers/loginpages/Signup";
import Activate from "./containers/loginpages/Activate";
import ResetPassword from "./containers/loginpages/ResetPassword";
import ResetPasswordConfirm from "./containers/loginpages/ResetPasswordConfirm";
import second from "./containers/client/second";
import About from "./containers/client/static/About";
import Industrytec from "./containers/client/static/Industrytec";
import ContactUs from "./containers/client/static/Contact";
import Admin from "./containers/admin/admin";

//fablab makandura
import FablabMakandura from "./containers/client/fablab_makandura/FablabMakandura";
import Project from "./containers/client/fablab_makandura/[id]";
import CreateProject from "./containers/admin/project_makandura/add";
import ProjectTable from "./components/fablabmakandura.component/ProjectTable";
import EditProject from "./containers/admin/project_makandura/[id]";

// news pages
import CreateNews from "./containers/admin/news/add";
import News from "./containers/client/news/[id]";
import NewsTable from "./containers/admin/news/all";
import NewsUpdate from "./containers/admin/news/[id]";

//event pages
import CreateEvent from "./containers/admin/event/add";
import PastEventTable from "./components/event.component/PastEventTable";
import EventUpdate from "./containers/admin/event/[id]";
import Event from "./containers/client/event/[id]";

//what we do pages
import Education from "./containers/client/what_we_do/Education";
import InnovationandSocialDevelopment from "./containers/client/what_we_do/InnovationandSocialDevelopment";
import ProductDevelopment from "./containers/client/what_we_do/ProductDevelopment";
import ProjectandProgramManagement from "./containers/client/what_we_do/ProjectandProgramManagement";
import ConsultancyandAdvisory from "./containers/client/what_we_do/ConsultancyandAdvisory";
import InternationalTechnologyTransfer from "./containers/client/what_we_do/InternationalTechnologyTransfer";

// Our Ventures pages
import MakanduraModelFarm from "./containers/client/our_ventures/MakanduraModelFarm";
import UniversalEnergy from "./containers/client/our_ventures/UniversalEnergy";
import CenterforBioTechnology from "./containers/client/our_ventures/CenterforBioTechnology";
import CenterforIndustry4 from "./containers/client/our_ventures/CenterforIndustry4";
import HITInnovations from "./containers/client/our_ventures/HITInnovations";
import OurPartners from "./containers/client/static/OurPartners";

// import Footer from "./components/Footer";

import { Provider } from "react-redux";
import store from "./store";
import { ContextProvider } from "./context/ContextProvider";
import Layout from "./hocs/Layout";

if (localStorage.getItem("access")) {
  store.dispatch({ type: "AUTHENTICATED_SUCCESS" });
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <ContextProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route
              exact
              path="/password/reset/confirm/:uid/:token"
              component={ResetPasswordConfirm}
            />
            <Route exact path="/activate/:uid/:token" component={Activate} />
            <Route exact path="/second" component={second} />
            <Route exact path="/about" component={About} />
            {/* News Route */}
            <Route exact path="/create-news" component={CreateNews} />
            <Route exact path="/news/:id" component={News} />
            <Route exact path="/show-all-news" component={NewsTable} />
            <Route exact path="/edit-news/:id" component={NewsUpdate} />
            {/* Event Route */}
            <Route exact path="/create-event" component={CreateEvent} />
            <Route exact path="/event/:id" component={Event} />
            <Route exact path="/show-all-event" component={PastEventTable} />
            <Route exact path="/edit-event/:id" component={EventUpdate} />
            {/* Fablab Makandura Route */}
            <Route exact path="/fablabmakandura" component={FablabMakandura} />
            <Route exact path="/fablabmakandura/:id" component={Project} />
            <Route exact path="/create-project" component={CreateProject} />
            <Route exact path="/show-all-projects" component={ProjectTable} />
            <Route exact path="/edit-project/:id" component={EditProject} />
            {/* Static pages Route */}
            <Route exact path="/industry" component={Industrytec} />
            <Route exact path="/our-partners" component={OurPartners} />
            <Route exact path="/contactus" component={ContactUs} />
            {/* What we do Route */}
            <Route exact path="/education" component={Education} />
            <Route
              exact
              path="/innovation-social-development"
              component={InnovationandSocialDevelopment}
            />
            <Route
              exact
              path="/product-development"
              component={ProductDevelopment}
            />
            <Route
              exact
              path="/project-program"
              component={ProjectandProgramManagement}
            />
            <Route
              exact
              path="/consultancy"
              component={ConsultancyandAdvisory}
            />
            <Route
              exact
              path="/technology-transfer"
              component={InternationalTechnologyTransfer}
            />
            {/* Our Ventures Route */}
            {/* <Route exact path="/model-farm" component={MakanduraModelFarm} />
            <Route exact path="/universal-energy" component={UniversalEnergy} />
            <Route
              exact
              path="/biotechnology"
              component={CenterforBioTechnology}
            /> */}
            <Route exact path="/HITInnovations" component={HITInnovations} />
            <Route exact path="/industry4" component={CenterforIndustry4} />
          </Switch>
        </ContextProvider>
      </Layout>
    </Router>
  </Provider>
);

export default App;
