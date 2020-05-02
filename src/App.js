import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="Title" scroll>
          <Navigation>
            <a href="a">Link</a>
            <a href="a">Link</a>
            <a href="a">Link</a>
            <a href="a">Link</a>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <a href="a">Link</a>
            <a href="a">Link</a>
            <a href="a">Link</a>
            <a href="a">Link</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
