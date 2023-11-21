import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import DetailedNews from "./pages/NewsDetailed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/details:id",
    element: <DetailedNews />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};


export default App;
