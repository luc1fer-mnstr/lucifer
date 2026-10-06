// App.jsx
// Root of the app. Hands control to RouterProvider.
// All layout and page rendering happens inside the router.

import { RouterProvider } from "react-router-dom";
import { router }         from "./router";

const App = () => <RouterProvider router={router} />;

export default App;
