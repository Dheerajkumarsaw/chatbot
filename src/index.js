import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomChatbot from "./components/CustomChatbot";
import App from "./App";
import StudentInfo from "./components/studentInfo/StudentInfo";
import { Provider } from "react-redux";
import store from "./components/store/store";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/chatbot", element: <CustomChatbot /> },
  { path: "/info", element: <StudentInfo /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}> </RouterProvider>
    </Provider>
  </React.StrictMode>
);
