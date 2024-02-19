import React from 'react';
import { Card, Space, ConfigProvider, Flex, Row, Col } from 'antd';

const CV = () => {
  return (
    <div className='w-3/4'>
      <ConfigProvider
        theme={{
          token: {
            colorText: "#999999",
          },
        }}
      >
        <Flex gap="middle" vertical>
          <Row>
            <Col span={24} xs={{ offset: 1 }} sm={{ offset: 2 }} md={{ offset: 3 }} lg={{ offset: 4 }}>
              <h2 className="text-3xl">Personal Information</h2>
            </Col>
            <Col span={24} xs={{ offset: 1 }} sm={{ offset: 2 }} md={{ offset: 3 }} lg={{ offset: 4 }}>
              <h2 className="text-2xl">Linkang(Junity) Zhan</h2>
            </Col>
            <Col span={24} xs={{ offset: 2 }} sm={{ offset: 3 }} md={{ offset: 4 }} lg={{ offset: 5 }}>
              <Flex gap="middle" wrap='wrap'>
                <div className="text-xl">
                  x@junity.ai
                </div>
                <div className="text-xl">
                  +1 216-551-2999
                </div>
                <div className="text-xl">
                  North Residential Village, Cutter, 11301 Juniper Rd
                </div>
                <div className="text-xl">
                  OH, The United States
                </div>
                <div className="text-xl">
                  junity.ai
                </div>
                <div className="text-xl">
                  linkedin Linkang Zhan
                </div>
                <div className="text-xl">
                  Github Junity Zhan
                </div>
                <div className="text-xl">
                  0009-0003-5357-1894
                </div>
                <div className="text-xl">
                  https://huggingface.co/Junity
                </div>
              </Flex>
            </Col>
          </Row>
        </Flex>
      </ConfigProvider>
    </div>
  );
};

export default CV;
