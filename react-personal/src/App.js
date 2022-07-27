import ColorMainpage from "./pages/ColorMainpage";
import ColorLoading from "./pages/ColorLoading";
import ColorQ1 from "./pages/ColorQ1";
import ColorQ2 from "./pages/ColorQ2";
import ColorQ3 from "./pages/ColorQ3";
import ColorQ4 from "./pages/ColorQ4";
import ColorQ5 from "./pages/ColorQ5";
import ColorQ6 from "./pages/ColorQ6";
import ColorQ7 from "./pages/ColorQ7";
import ColorQ8 from "./pages/ColorQ8";
import ColorResult from "./pages/ColorResult";

import MusicMainpage from "./pages/MusicMainpage";
import MusicLoading from "./pages/MusicLoading";
import MusicQ1 from "./pages/MusicQ1";
import MusicQ2 from "./pages/MusicQ2";
import MusicQ3 from "./pages/MusicQ3";
import MusicQ4 from "./pages/MusicQ4";
import MusicQ5 from "./pages/MusicQ5";
import MusicQ6 from "./pages/MusicQ6";
import MusicQ7 from "./pages/MusicQ7";
import MusicQ8 from "./pages/MusicQ8";
import MusicResult from "./pages/MusicResult";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import { animate } from "./component/Styled/animate";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <motion.div
          initial={animate.initial}
          animate={animate.animate}
          exit={animate.exit}
        >
          <Routes>
            <Route path="/" element={<ColorMainpage />} />
            <Route
              path="/colorQuestionLoading"
              element={
                <ColorLoading
                  name1="Personal 은"
                  name2="당신의 고유한 감각을 분석해드립니다."
                  name3="다음 8개의 질문에 답해 주세요."
                  link="/colorQ1"
                />
              }
            />
            <Route path="/colorQ1" element={<ColorQ1 />} />
            <Route path="/colorQ2" element={<ColorQ2 />} />
            <Route path="/colorQ3" element={<ColorQ3 />} />
            <Route path="/colorQ4" element={<ColorQ4 />} />
            <Route path="/colorQ5" element={<ColorQ5 />} />
            <Route path="/colorQ6" element={<ColorQ6 />} />
            <Route path="/colorQ7" element={<ColorQ7 />} />
            <Route path="/colorQ8" element={<ColorQ8 />} />
            <Route path="/colorResult" element={<ColorResult />} />

            <Route path="/musicMain" element={<MusicMainpage />} />
            <Route
              path="/musicQuestionLoading"
              element={
                <MusicLoading
                  name1="Personal 은"
                  name2="당신의 고유한 감각을 분석해드립니다."
                  name3="다음 8개의 질문에 답해 주세요."
                  link="/musicQ1"
                />
              }
            />
            <Route path="/musicQ1" element={<MusicQ1 />} />
            <Route path="/musicQ2" element={<MusicQ2 />} />
            <Route path="/musicQ3" element={<MusicQ3 />} />
            <Route path="/musicQ4" element={<MusicQ4 />} />
            <Route path="/musicQ5" element={<MusicQ5 />} />
            <Route path="/musicQ6" element={<MusicQ6 />} />
            <Route path="/musicQ7" element={<MusicQ7 />} />
            <Route path="/musicQ8" element={<MusicQ8 />} />
            <Route path="/musicResult" element={<MusicResult />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
