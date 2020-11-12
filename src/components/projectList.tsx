import React from "react";
import { Link } from "gatsby";
import { Row, Col, Card, Tag, Carousel, Image } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';

const ProjectList = () => (
  <Row gutter={[8,8]} className="projectList">
      <Col span={8}>
        <Card
            cover={
                <Carousel autoplay>
                    <Image
                        alt="fine-官網"
                        src="/projects/fine-website.png"
                    />
                    <Image
                        alt="fine-官網-內頁"
                        src="/projects/fine-website-order.png"
                    />
                </Carousel>
            }
            actions={[
                <Link to="https://github.com/YuningChou/fine" target="_blank">
                    <GithubOutlined key="git" />
                </Link>,  
                <Link to="https://yuningchou.github.io/fine/" target="_blank">
                    <LinkOutlined />
                </Link>      
            ]}
        >
            <Card.Meta
                title="Fine 官網製作 (前端)"
                description={
                    <div>
                        <Tag color="#4fc08d">vue.js</Tag>
                        <Tag color="#00c58e">nuxt.js</Tag>
                        <Tag color="#7952b3">bootstrap 4</Tag>
                    </div>
                }
            />
        </Card>
      </Col>
      <Col span={8}>
        <Card
            cover={
                <Carousel autoplay>
                    <Image
                        alt="fine-官網規劃"
                        src="/projects/fine-web.png"
                    />
                    <Image
                        alt="fine-官網規劃-手機"
                        src="/projects/fine-mobile.png"
                    />
                </Carousel>
            }
            actions={[
                <Link to="https://github.com/YuningChou/web-demo" target="_blank">
                    <GithubOutlined key="git" />
                </Link>,  
                <Link to="https://yuningchou.github.io/web-demo/" target="_blank">
                    <LinkOutlined />
                </Link>      
            ]}
        >
            <Card.Meta
                title="Fine 官網製作2 (前端)"
                description={
                    <div>
                        <Tag color="#4fc08d">vue.js</Tag>
                        <Tag color="#00c58e">nuxt.js</Tag>
                        <Tag color="#1d39c4">RWD</Tag>
                    </div>
                }
            />
        </Card>
      </Col>
      <Col span={8}>
        <Card
            cover={
                <Carousel autoplay>
                    <Image
                        alt="世邦旅行社官網"
                        src="/projects/4p-web.png"
                    />
                    <Image
                        alt="世邦旅行社官網-手機"
                        src="/projects/4p-phone.png"
                    />
                </Carousel>
            }
            actions={[
                <Link to="https://www.4p.com.tw/eWeb_spunktour/index.asp" target="_blank">
                    <LinkOutlined />
                </Link>      
            ]}
        >
            <Card.Meta
                title="世邦旅行社官網-RWD"
                description={
                    <div>
                        <Tag color="#7952b3">bootstrap 3</Tag>
                        <Tag color="#1d39c4">RWD</Tag>
                    </div>
                }
            />
        </Card>
      </Col>
      <Col span={8}>
        <Card
            cover={
                <Carousel autoplay>
                    <Image
                        alt="Resmed-subscribe"
                        src="/projects/resmed-subscribe.png"
                    />
                    <Image
                        alt="Resmed-questionnaire"
                        src="/projects/resmed-questionnaire.png"
                    />
                </Carousel>
            }
            actions={[
                <Link to="https://member.resmed.ear.com.tw/login" target="_blank">
                    <LinkOutlined /> Resmed 訂閱
                </Link>,
                <Link to="https://stop-bang.resmed.ear.com.tw/" target="_blank">
                    <LinkOutlined /> Resmed 問卷
                </Link>      
            ]}
        >
            <Card.Meta
                title="Resmed-科林睡得美"
                description={
                    <>
                    呼吸器會員訂閱 & 問卷
                    <div>
                        <Tag color="#61dafb">React.js</Tag>
                        <Tag color="#1890ff">Ant Design</Tag>
                    </div>
                    </>
                }
            />
        </Card>
      </Col>
      <Col span={8}>
        <Card
            cover={
                <Carousel autoplay>
                    <Image
                        alt="wishvision"
                        src="/projects/wishvision.png"
                    />
                </Carousel>
            }
            actions={[
                <Link to="https://www.wishision.com.tw/" target="_blank">
                    <LinkOutlined /> WishVision 官網
                </Link>      
            ]}
        >
            <Card.Meta
                title="WishVision 濰視眼科"
                description={
                    <>
                    WishVision 管理系統
                    <div>
                        <Tag color="#61dafb">React.js</Tag>
                        <Tag color="#1890ff">Ant Design</Tag>
                        <Tag color="#2079ed">BizCharts</Tag>
                    </div>
                    </>
                }
            />
        </Card>
      </Col>
      <Col span={8}>
        <Card
            cover={
                <Carousel autoplay>
                    <Image
                        alt="store-login"
                        src="/projects/store-login.png"
                    />
                    <Image
                        alt="store-dash"
                        src="/projects/store-dash.png"
                    />
                </Carousel>
            }
            actions={[
                <Link to="https://www.clinico.com.tw/" target="_blank">
                    <LinkOutlined /> 科林儀器 官網
                </Link>      
            ]}
        >
            <Card.Meta
                title="科林儀器"
                description={
                    <>
                    Clinic 門市管理系統
                    <div>
                        <Tag color="#61dafb">React.js</Tag>
                        <Tag color="#1890ff">Ant Design</Tag>
                        <Tag color="#e10098">GraphQL</Tag>
                    </div>
                    </>
                }
            />
        </Card>
      </Col>
      <Col span={8}>
        <Card
            cover={
                <Carousel autoplay>
                    <Image
                        alt="clc-store"
                        src="/projects/clc-store.png"
                    />
                </Carousel>
            }
            actions={[
                <Link to="https://github.com/YuningChou/clc-store" target="_blank">
                    <GithubOutlined key="git" />
                </Link>     
            ]}
        >
            <Card.Meta
                title="CLC 書房管理"
                description={
                    <div>
                        <Tag color="#61dafb">React.js</Tag>
                        <Tag color="#1890ff">Ant Design</Tag>
                        <Tag color="#f58209">Firebase</Tag>
                    </div>
                }
            />
        </Card>
      </Col>
  </Row>
);

export default ProjectList;