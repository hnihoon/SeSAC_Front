import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostList from "../pages/PostList";
import RootLayout from "../RootLayout";
import PostDetail from "../pages/PostDetail";
import PostCreate from "../pages/PostCreate";

  const router = createBrowserRouter([
    {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/posts",
        element: <PostList />,
      },
      {
        path: "/posts/create",
        element: <PostCreate />,
      },
      {
        path: "/posts/:postId",
        element: <PostDetail />,
      },
    ],
  },
]);

export default router;
