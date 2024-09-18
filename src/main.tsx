import { createRoot } from 'react-dom/client'
import App from './pages/App.tsx'
import './index.css'
import { store } from "./components/review-slicer/Store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
