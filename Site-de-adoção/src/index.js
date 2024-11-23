
import { createRoot } from "react-dom/cliente";

import App from "./App";

const rootElement = document.getElementByid("root");
const root = createRoot(rootElement);

root.render(
   <App />
);