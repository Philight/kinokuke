import React from "react";
//import { Router, Route, Routes } from 'react-router-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { HashRouter, Route, Routes } from 'react-router-dom';

import ScrollToTop from "./components/utility/ScrollToTop";

import AboutPage from "./pages/AboutPage.js";
import ContactPage from "./pages/ContactPage.js";
import DesignPage from "./pages/DesignPage.js";
import ProcessPage from "./pages/ProcessPage.js";
import ModelsPage from "./pages/ModelsPage.js";
import LandingPage from "./pages/LandingPage.js";
import ModelPage from "./pages/ModelPage.js";
import GalleryPage from "./pages/GalleryPage.js";
import GDPRPage from "./pages/GDPRPage.js";

import V2LandingPage from "./v2/pages/LandingPage.js";
import V2ProcessPage from "./v2/pages/ProcessPage.js";
import V2ModelsPage from "./v2/pages/ModelsPage.js";

import LandingLayout from "./layouts/LandingLayout.js";
import V2LandingLayout from "./v2/layouts/LandingLayout.js";

import "./assets/css/app.css";
import "./v2/assets/css/V2app.css";

const App = () => {
      return (
         <BrowserRouter>
            <ScrollToTop>
               <Routes>
                  {/*<RouteWrapper exact path="/" component={LandingPage} layout={LandingLayout} />*/}
                  <Route exact path="/" element={<LandingLayout><LandingPage /></LandingLayout>} />
                  <Route path="/about" element={<LandingLayout><AboutPage /></LandingLayout>} />
                  <Route path="/contact" element={<LandingLayout><ContactPage /></LandingLayout>} />
                  <Route path="/design/features" element={<LandingLayout><DesignPage /></LandingLayout>} />
                  <Route path="/design/models" element={<LandingLayout><ModelsPage /></LandingLayout>} />
 
                  <Route path="/process" element={<LandingLayout><ProcessPage /></LandingLayout>} />
                  <Route path="/findyourhome" element={<LandingLayout><ModelsPage /></LandingLayout>} />
                  <Route path="/model" element={<LandingLayout><ModelPage /></LandingLayout>} />
                  <Route path="/model/:id" element={<LandingLayout><ModelPage /></LandingLayout>} />
                  <Route path="/gallery" element={<LandingLayout><GalleryPage /></LandingLayout>} />
                  <Route path="/gdpr" element={<LandingLayout><GDPRPage /></LandingLayout>} />

                  <Route path="/v2" element={<V2LandingLayout><V2LandingPage /></V2LandingLayout>} />
                  <Route path="/v2/process" element={<V2LandingLayout><V2ProcessPage /></V2LandingLayout>} />
                  <Route path="/v2/models" element={<V2LandingLayout><V2ModelsPage /></V2LandingLayout>} />

      {/*
                  <Route exact path="/" render={(props) =>
                     <LandingLayout {...props}>
                        <LandingPage {...props} />
                     </LandingLayout>
                  } />
      */}
               </Routes>
            </ScrollToTop>
        </BrowserRouter>
      )
   
};

function RouteWrapper({ component: Component, layout: Layout, ...rest}) {
   return (
      <Route {...rest} render={(props) =>
         <Layout {...props}>
            <Component {...props} />
         </Layout>
      } />
  )
}

export default App;