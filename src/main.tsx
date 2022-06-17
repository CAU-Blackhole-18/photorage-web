import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import * as mixin from "./styles/mixin";
import color from "./styles/color";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./react-query/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";

const theme = { mixin, color };

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <BrowserRouter>
          <GlobalStyle />
          <RecoilRoot>
            <Routes>
              <Route path="*" element={<App />} />
            </Routes>
            <ReactQueryDevtools />
          </RecoilRoot>
        </BrowserRouter>
      </React.StrictMode>
    </QueryClientProvider>
  </ThemeProvider>
);
