import React, { Suspense } from "react";
// import Layout from "../components/Layout";
import "../styles/globals.css";
const Layout = React.lazy(() => import("../components/Layout"));

function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Suspense>
  );
}

export default MyApp;
