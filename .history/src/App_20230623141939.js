import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Videos from "./page/Videos";
import Root from "./page/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "/videos", element: <Videos /> },
      ],
      errorElement: <p>Not Found...!</p>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
