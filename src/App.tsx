import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/home";
import CategoryPage from "./pages/categoryPage";
import DiscoverPage from "./pages/DiscoverPage";
import ExploreBy from "./pages/ExploreByPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import TVDetailsPage from "./pages/TVDetailsPage";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:type/:category" element={<CategoryPage />} />
        <Route path="/discover/:type/:category" element={<DiscoverPage />} />
        <Route
          path="/discover/:type/:category/:value"
          element={<ExploreBy />}
        />
        <Route
          path="/discover/:type/watch/:id"
          element={<MovieDetailsPage />}
        />
        <Route path="/discover/:type/stream/:id" element={<TVDetailsPage />} />
        <Route path="*" element={<main className="global-loading" role="status">Page not found</main>} />
      </Route>
    </Routes>
  );
};

export default App;
