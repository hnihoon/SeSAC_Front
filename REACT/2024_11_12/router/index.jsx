import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../RootLayout";
import NotFound from "../pages/NotFound";
import WebsoList from "../pages/WebsoList";
import WebtoonList from "../pages/WebtoonList";
import WebDetail from "../pages/WebDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/webtoon",
        element: <WebtoonList />,
      },
      {
        path: "/web/:webid",
        element: <WebDetail />,
      },
      {
        path: "/webso",
        element: <WebsoList />,
      }
    ],
  },
  // {
  //   path: '/music',
  //   element: <musiclayout></musiclayout>
  // }
]);

export default router;
