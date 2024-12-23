import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import GlobalStyle from "./styles/globalStyles";
import HomePage from "./pages/Home/Home";
import WordPage from "./pages/Word/Word";
import NotFoundPage from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":id",
        element: <WordPage />
      },
    ],
  },
]);

function App() {
  return (
    <div className="pageContainer">
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;