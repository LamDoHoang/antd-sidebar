import { AppstoreOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  Button,
  Divider,
  Drawer,
  Flex,
  Input,
  Space,
  Tooltip,
  Typography,
} from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "motion/react";
const LeftHeader = () => {
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
    paddingLeft: "1.5rem",
  };
  const MenuContainerStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    // backgroundColor: "black",
  };

  return (
    <Space style={ContainerStyle}>
      <Space style={MenuContainerStyle} size="large">
        <Tooltip title="Chức năng">
          <Button icon={<AppstoreOutlined />} onClick={showDrawer} />
        </Tooltip>
        <Divider type="vertical" />
        <Space style={MenuContainerStyle}>
          <Typography>Ant Design</Typography>
          <Button type="primary" onClick={onSearch} icon={<SearchOutlined />} />
        </Space>
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
                  <Typography>Ant Design</Typography>
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
        placement="left"
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

export default LeftHeader;
