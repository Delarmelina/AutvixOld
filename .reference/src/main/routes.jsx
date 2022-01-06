import React from "react";

import Reports from '../contents/reports/reports'
import Home from '../contents/home/home'
import Cronog from '../contents/cronog/cronog'
import Projets from '../contents/projects/projects'

import RDV from '../contents/reports/RDVReport';
import RDO from '../contents/reports/RDOReport';
import Reembolso from '../contents/reports/ReembolsoReport';
import Sugestion from '../contents/reports/SugestionReport';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default props => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reports' element={<Reports />} />
      <Route path='/cronog' element={<Cronog />} />
      <Route path='/projets' element={<Projets />} />

      <Route path='/reports/rdv' element={<RDV />} />
      <Route path='/reports/rdo' element={<RDO />} />
      <Route path='/reports/reembolso' element={<Reembolso />} />
      <Route path='/reports/sugestoes' element={<Sugestion />} />

    </Routes>
  </BrowserRouter>
)