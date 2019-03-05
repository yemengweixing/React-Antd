import React from "react";

import { Row, Col } from "antd";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./style/common.less"


export default class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span={3} className="nav-lefa">
          <Nav />
        </Col>

        <Col span={21} className="main">
                <Header />
                
                <Row className='content'>
            {/**<Home />*/}
                        {this.props.children}  {/** 因为这个 所以下级路由出现这个位置！！！！！！！！！！！*/}
                </Row>
                
                <Footer />
        </Col>
      </Row>
    );
  }
}
/**主页 分成左右（col）  左边是导航  右边分成上中*/