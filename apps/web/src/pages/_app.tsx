import { GlobalStyle } from "@/styles/globals";
import { ThemeProvider } from "styled-components";
import { MainTheme } from "@/styles/themes";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <ThemeProvider theme={MainTheme}>
      <Provider store={store}>
        <GlobalStyle />
        <Layout
          content={<Component {...pageProps} />}
          sidebar={<Sidebar path={pathname} />}
        />
      </Provider>
    </ThemeProvider>
  );
}
