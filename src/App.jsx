import { Col, Layout, Row } from "antd";
import MenuList from "./components/MenuList";
import LeftHeader from "./components/LeftHeader";
import RightHeader from "./components/RightHeader";

const { Header, Sider } = Layout;

const layoutStyle = {
  overflow: "hidden",
  width: "100vw",
  maxWidth: "100vw",
  height: "100vh",
};

const siderStyle = {
  overflow: "scroll",
  textAlign: "center",
  lineHeight: "120px",
  scrollbarWidth: "none" /* Firefox */,
  msOverflowStyle: "none" /* Internet Explorer 10+ */,
  "&::-webkit-scrollbar": {
    /* WebKit */ width: "0",
    height: "0",
  },
};

const headerStyle = {
  backgroundColor: "#fff",
  padding: 0,
};

const App = () => {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Row>
          <Col span={12}>
            <LeftHeader />
          </Col>
          <Col span={12}>
            <RightHeader />
          </Col>
        </Row>
      </Header>

      <Layout>
        <Sider theme="light" style={siderStyle} collapsible>
          <MenuList />
        </Sider>
      </Layout>
    </Layout>
  );
};
export default App;
