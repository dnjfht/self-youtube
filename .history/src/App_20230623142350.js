import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Videos from "./page/Videos";
import Root from "./page/Root";
import Detail from "./page/Detail";
import NotFoundPage from "./page/NotFoundPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Videos /> },
        { path: "/videos", element: <Videos /> },
        { path: "/videos/:keyword", element: <Videos /> },
        { path: "/videos/watch/:videoId", element: <Detail /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
