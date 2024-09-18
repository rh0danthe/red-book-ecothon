import "../App.css";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Map from "./map/Map";
import AnimalPage from "./animal-details/AnimalPage.tsx";
import { AuthProvider } from "../lib/context/AuthContext";
import NotFound from "./not-found/NotFound";
import Encyclopedia from "./encyclopedia/Encyclopedia";
import AnimalCreateForm from "./animal-create/AnimalCreateForm";
import AnimalUpdateForm from "./animal-update/AnimalUpdateForm";
import ProtectedRoute from "../lib/wrapper/ProtectedRoute";
import LoginPage from "./login-form/LoginPage.tsx";
import RequestsPage from "./request/RequestsPage.tsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/encyclopedia" element={<Encyclopedia />} />
            <Route
              path="/encyclopedia/create"
              element={
                <ProtectedRoute>
                  <AnimalCreateForm />
                </ProtectedRoute>
              }
            />
            <Route path="/animal/:id" element={<AnimalPage />} />
            <Route
              path="/animal/:id/update"
              element={
                <ProtectedRoute>
                  <AnimalUpdateForm />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/requests" element={<RequestsPage/>} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
