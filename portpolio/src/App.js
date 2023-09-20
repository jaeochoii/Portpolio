import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Component/Page/MainPage";
import ActivitiesPage from "./Component/Page/ActivitiesPage";
import ProjectsPage from "./Component/Page/ProjectsPage";
import SimpleSlider from "./Component/Page/SimpleSlider";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="ActivePage" element={<ActivitiesPage />} />
        <Route path="ProjectPage" element={<ProjectsPage />} />
        <Route path="SimplePage" element={<SimpleSlider />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
