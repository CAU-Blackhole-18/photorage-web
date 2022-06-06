import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import * as mixin from "./styles/mixin";
import color from "./styles/color";
import { RecoilRoot } from "recoil";

const theme = { mixin, color };

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle />
        <RecoilRoot>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
