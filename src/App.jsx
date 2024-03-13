import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AboutPage = lazy(() => import('@pages/AboutPage'));
const ContactPage = lazy(() => import('@pages/ContactPage'));
const DesignPage = lazy(() => import('@pages/DesignPage'));

const ProcessPage = lazy(() => import('@pages/ProcessPage'));
const ModelsPage = lazy(() => import('@pages/ModelsPage'));
const ModelPage = lazy(() => import('@pages/ModelPage'));

const LandingPage = lazy(() => import('@pages/LandingPage'));
const GalleryPage = lazy(() => import('@pages/GalleryPage'));
const GDPRPage = lazy(() => import('@pages/GDPRPage'));

import { Loader } from '@components/graphic';
import ScrollToTop from '@components/util/ScrollToTop';
import LandingLayout from '@layouts/LandingLayout';

import PACKAGE_JSON from '@ROOT/package.json';

/* V2 */

import V2LandingPage from './v2/pages/LandingPage';
import V2ProcessPage from './v2/pages/ProcessPage';
import V2ModelsPage from './v2/pages/ModelsPage';

import V2LandingLayout from './v2/layouts/LandingLayout';

import './v2/assets/css/V2app.css';

const App = () => {
  return (
    <BrowserRouter basename={PACKAGE_JSON.config.BASENAME}>
      <ScrollToTop>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<LandingLayout />}>
              <Route path='/' element={<LandingPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/design/features' element={<DesignPage />} />
              <Route path='/design/models' element={<ModelsPage />} />

              <Route path='/process' element={<ProcessPage />} />
              <Route path='/findyourhome' element={<ModelsPage />} />
              <Route path='/model' element={<ModelPage />} />
              <Route path='/model/:id' element={<ModelPage />} />
              <Route path='/gallery' element={<GalleryPage />} />
              <Route path='/gdpr' element={<GDPRPage />} />
            </Route>

            <Route element={<V2LandingLayout />}>
              <Route path='/v2' element={<V2LandingPage />} />
              <Route path='/v2/process' element={<V2ProcessPage />} />
              <Route path='/v2/models' element={<V2ModelsPage />} />
            </Route>
          </Routes>
        </Suspense>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
