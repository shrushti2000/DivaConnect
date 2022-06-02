import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import { Provider } from "react-redux";
import {store} from './store'

// Call make Server
makeServer();
const theme = extendTheme({
  colors: {
    brand: {
      100: "#BB9981",
      200:"#534340",
      10:"#ffffff",
      20:"#000000",
      // ...
      900: "#1a202c",
    },
  },
})

const borderRadius = {
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider theme={theme} borderRadius={borderRadius}>
      <App />
    </ChakraProvider>
    </Provider>
   
  </React.StrictMode>,
  document.getElementById("root")
);
