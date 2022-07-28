import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import GlobalStyle from "@styles/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import * as mixin from "@styles/mixin";
import color from "@styles/color";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./react-query/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = { mixin, color };

const StyledToastContainer = styled(ToastContainer)`
  z-index: 10000;
`;

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
            <StyledToastContainer hideProgressBar autoClose={500} />
          </RecoilRoot>
        </BrowserRouter>
      </React.StrictMode>
    </QueryClientProvider>
  </ThemeProvider>
);
