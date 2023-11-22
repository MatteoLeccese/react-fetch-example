import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import DetailedPost from "./pages/DetailedPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/details/:id",
    element: <DetailedPost />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};


export default App;
