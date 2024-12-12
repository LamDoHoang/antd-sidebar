import { useState } from "react";
import { Button, Drawer, Input, Space } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "motion/react";
const App = () => {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onSearch = () => {
    setOpenSearch(!openSearch);
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title={
          <AnimatePresence mode="wait">
            {!openSearch ? (
              <motion.div
                key="modal"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                // exit={{ scale: 0 }}
              >
                <text>ATN</text>
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
        }
        placement="left"
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space style={{ marginLeft: 10 }}>
            <Button type="primary" onClick={onSearch}>
              {!openSearch ? <SearchOutlined /> : <CloseOutlined />}
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default App;
