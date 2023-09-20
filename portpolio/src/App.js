import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Component/Page/MainPage";
import ActivitiesPage from "./Component/Page/ActivitiesPage";
import ProjectsPage from "./Component/Page/ProjectsPage";
import SimpleSlider from "./Component/Page/SimpleSlider";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<MainPage />} />
        <Route
          path={process.env.PUBLIC_URL + "ActivePage"}
          element={<ActivitiesPage />}
        />
        <Route
          path={process.env.PUBLIC_URL + "ProjectPage"}
          element={<ProjectsPage />}
        />
        <Route
          path={process.env.PUBLIC_URL + "SimplePage"}
          element={<SimpleSlider />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
