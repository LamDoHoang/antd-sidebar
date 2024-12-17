import {
  Avatar,
  Badge,
  Button,
  Drawer,
  Dropdown,
  Flex,
  Input,
  Space,
  Tooltip,
  Typography,
} from "antd";
import {
  BellOutlined,
  CloseOutlined,
  HomeOutlined,
  KeyOutlined,
  LogoutOutlined,
  MessageOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const items = [
  {
    key: "1",
    label: "Đỗ Hoàng Lâm",
  },
  {
    type: "divider",
  },
  {
    key: "2",
    label: "Trang cá nhân",
    extra: "⌘P",
  },
  {
    key: "3",
    label: "Đơn từ",
    extra: "⌘B",
  },
  {
    key: "4",
    label: "Cài đặt",
    icon: <SettingOutlined />,
    extra: "⌘S",
  },
  {
    type: "divider",
  },
  {
    key: "5",
    label: "Đổi mật khẩu",
    icon: <KeyOutlined />,
  },
  {
    key: "6",
    label: "Đăng xuất",
    icon: <LogoutOutlined />,
  },
];
const RightHeader = () => {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    setOpenSearch(false);
  };

  const onSearch = () => {
    setOpenSearch(!openSearch);
  };
  const ContainerStyle = {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "1.5rem",
  };
  const MenuContainerStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
  };

  return (
    <Space style={ContainerStyle}>
      <Space style={MenuContainerStyle} size="large">
        <Tooltip title="Trang cá nhân">
          <Button type="dashed" icon={<HomeOutlined />} />
        </Tooltip>
        <Tooltip title="Tin Nhắn">
          <Badge count={100} overflowCount={99}>
            <Button type="dashed" icon={<MessageOutlined />} />
          </Badge>
        </Tooltip>
        <Tooltip title="Thông Báo">
          <Badge count={100} overflowCount={99}>
            <Button
              type="dashed"
              icon={<BellOutlined />}
              onClick={showDrawer}
            />
          </Badge>
        </Tooltip>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
          arrow
        >
          <Button
            onClick={(e) => e.preventDefault()}
            shape="circle"
            icon={<Avatar size="medium" icon={<UserOutlined />} />}
          />
        </Dropdown>
      </Space>
      <Drawer
        title={
          <Flex gap="small" vertical>
            <AnimatePresence mode="wait">
              {!openSearch ? (
                <motion.div
                  key="modal"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  // exit={{ scale: 0 }}
                >
                  <Typography>Thông Báo</Typography>
                </motion.div>
              ) : (
                <motion.div
                  key="search"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  // exit={{ scale: 0 }}
                >
                  <Input
                    addonBefore={<SearchOutlined />}
                    placeholder="large size"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Flex>
        }
        placement="right"
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button
              type="primary"
              onClick={onSearch}
              icon={!openSearch ? <SearchOutlined /> : <CloseOutlined />}
            />
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Space>
  );
};

export default RightHeader;
