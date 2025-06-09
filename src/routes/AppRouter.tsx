import { BrowserRouter, Routes, Route } from "react-router-dom";
import Epilogue from "../pages/Epilogue.tsx";
import ExtraStep1 from "../pages/ExtraStep1.tsx";
import ExtraStep2 from "../pages/ExtraStep2.tsx";
import ExtraStep3 from "../pages/ExtraStep3.tsx";
import ExtraStep4 from "../pages/ExtraStep4.tsx";
import ExtraStep5 from "../pages/ExtraStep5.tsx";
import Clear from "../pages/Clear.tsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Epilogue />} />
        <Route path="/extra" element={<ExtraStep1 />} />
        <Route path="/extra-step2" element={<ExtraStep2 />} />
        <Route path="/extra-step3" element={<ExtraStep3 />} />
        <Route path="/extra-step4" element={<ExtraStep4 />} />
        <Route path="/extra-step5" element={<ExtraStep5 />} />
        <Route path="/clear" element={<Clear />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;