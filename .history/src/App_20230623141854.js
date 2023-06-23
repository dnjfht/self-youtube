import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Root from "./page/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [{ index: true, element: <Home /> }],
      errorElement: <p>Not Found...!</p>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
