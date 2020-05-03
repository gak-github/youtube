import React from "react";
import "../styles/App.scss";
import Header from "../components/Header";
import Main from "../components/Main";
import Layout from "../components/Layout"
import { GlobalProvider } from "../context/GlobalState";
import SEO from '../components/SEO';

function IndexPage() {
  return (
    <GlobalProvider>
      <Layout>
        <SEO title='Home' />
        <Header />
        <Main />
      </Layout>
    </GlobalProvider>
  )
}

export default IndexPage;
