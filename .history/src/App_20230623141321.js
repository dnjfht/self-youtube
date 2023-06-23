import { createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <p>Not Found...!</p> },
  ]);
  return <div></div>;
}

export default App;
