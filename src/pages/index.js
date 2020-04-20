import React from "react";
import "../styles/App.scss";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Main from "../components/Main";
import Layout from "../components/Layout"
import { GlobalProvider } from "../context/GlobalState";

function IndexPage() {
  return (
    <GlobalProvider>
      <Layout>
        <Header />
        <SideNav />
        <Main />
      </Layout>
    </GlobalProvider>
  )
}

export default IndexPage;
