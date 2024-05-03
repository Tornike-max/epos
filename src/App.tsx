import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import PressReleasePage from "./pages/PressReleasePage";
import SupportPage from "./pages/SupportPage";
import CompanyPage from "./pages/CompanyPage";
import CareersPage from "./pages/CareersPage";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";

function App() {
  return (
    <div className="h-full bg-slate-300 max-w-[1920px] w-full">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/description/:id"
              element={<ProductDescriptionPage />}
            />
            <Route path="/press-release" element={<PressReleasePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
