import { Menu } from "antd";
import {
  AppstoreOutlined,
  AreaChartOutlined,
  BarsOutlined,
  HomeOutlined,
  PayCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const MenuList = () => {
  return (
    <Menu mode="inline">
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<AppstoreOutlined />}>
        Activity
      </Menu.Item>
      <Menu.SubMenu key="sub1" icon={<BarsOutlined />} title="Tasks">
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.SubMenu key="subsub" title="Sub Tasks">
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
          <Menu.Item key="13">Option 13</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item key="3" icon={<AreaChartOutlined />}>
        Progress
      </Menu.Item>
      <Menu.Item key="4" icon={<PayCircleOutlined />}>
        Payment
      </Menu.Item>
      <Menu.Item key="5" icon={<SettingOutlined />}>
        Setting
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
