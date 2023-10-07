import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Component/Page/MainPage";
import ActivitiesPage from "./Component/Page/ActivitiesPage";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="ActivePage" element={<ActivitiesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
