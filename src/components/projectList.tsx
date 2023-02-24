import React, { useState } from "react";
import { Link } from "gatsby";
import { Row, Col, Card, Tag, Carousel, Image, Divider, Typography } from 'antd';
import ProjectModal from './projectModal';
import { GithubOutlined, LinkOutlined, MessageOutlined } from '@ant-design/icons';

const ProjectList = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState(null);
    const [modalContent, setModalContent] = useState(null);
    const handleCloseModal = () => {
        setModalVisible(false);
        setModalTitle(null);
        setModalContent(null);
    }
    return (
        <>
            <Typography.Title level={2}>Projects</Typography.Title>
            <Typography.Paragraph>以下是我參與過的專案，有從零開始草創規劃，也有經過需求訪談後製作的專案。</Typography.Paragraph>
            <Typography.Paragraph>主要參與較多內部系統的建置，在顧客管理流程及相關功能有較多的經驗。</Typography.Paragraph>
            <Typography.Paragraph>點擊專案描述，可以查看簡單描述，比如想解決的問題或有些什麼功能。</Typography.Paragraph>
            <ProjectModal 
                projectTitle={modalTitle} 
                projectContent={modalContent} 
                isModalVisible={modalVisible} 
                onCloseModal={handleCloseModal} 
            />
            <Row gutter={[8,8]} className="projectList">
            <Col sm={{span: 24}} md={{span: 12}} lg={{span: 8}}>
                <Card
                    cover={
                        <Carousel style={{ background: '#1c2022' }}>
                            <Image
                                alt="富蘭克林投顧"
                                src="/projects/franklin.png"
                            />
                            <Image
                                alt="富蘭克林投顧官網-SEO"
                                src="/projects/franklin-seo.png"
                            />
                        </Carousel>
                    }
                    actions={[
                        <span 
                            onClick={() => {
                                setModalTitle('富蘭克林投顧官網');
                                setModalContent(
                                    <Row gutter={16}>
                                        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                                            <Carousel style={{ background: '#1c2022' }}>
                                                <Image
                                                    alt="富蘭克林投顧官網"
                                                    src="/projects/franklin.png"
                                                />
                                                <Image
                                                    alt="富蘭克林投顧官網-SEO"
                                                    src="/projects/franklin-seo.png"
                                                />
                                            </Carousel>
                                            <Divider />
                                            <div>
                                                <Tag color="#4fc08d">nuxt.js</Tag>
                                                <Tag color="#3f9eff">Element UI</Tag>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={14} xl={14}>
                                            <h3>描述：</h3>
                                            <p> 
                                                富蘭克林投顧原來網站並無 RWD，而是採用另作一版 mobile 版的網頁，需求改為使用 RWD 方式將網頁改版，
                                                目前經手項目為：基金明細頁、基金總覽等等...。
                                            </p>
                                            <p> 
                                                專案採用 Nuxt 框架，達到 SSR 目的進而優化 SEO，
                                                目前基金明細頁在 Google PageSpeed Insights SEO 跑分達到90以上分數
                                            </p>   
                                        </Col>
                                    </Row>
                                )
                                setModalVisible(true);
                            }}>
                                <MessageOutlined /> 專案描述
                        </span>,       
                        <Link to="https://www.franklin.com.tw/Fund/InvestmentTarget/0839" target="_blank">
                            <LinkOutlined />
                        </Link>      
                    ]}
                >
                    <Card.Meta
                        title="富蘭克林投顧官網"
                        description={
                            <div>
                                <Tag color="#4fc08d">nuxt.js</Tag>
                                <Tag color="#3f9eff">Element UI</Tag>
                            </div>
                        }
                    />
                </Card>
            </Col>
            <Col sm={{span: 24}} md={{span: 12}} lg={{span: 8}}>
                <Card
                    cover={
                        <Image
                            alt="hixcare-clinic-opdMaster"
                            src="/projects/hixcare-opdMaster.png"
                        />
                    }
                    actions={[
                        <span 
                            onClick={() => {
                                setModalTitle('HygeAI-Hixcare');
                                setModalContent(
                                    <Row gutter={16}>
                                        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                                            <Carousel style={{ background: '#1c2022' }}>
                                                <Image
                                                    alt="hixcare-clinic-opdMaster"
                                                    src="/projects/hixcare-opdMaster.png"
                                                />
                                                <Image
                                                    alt="hixcare-clinic-order"
                                                    src="/projects/hixcare-order.png"
                                                />
                                                <Image
                                                    alt="kit"
                                                    src="/projects/kit.png"
                                                />
                                            </Carousel>
                                            <Divider />
                                            <div>
                                                <Tag color="#4fc08d">vue.js</Tag>
                                                <Tag color="#38bdf8">Tailwind</Tag>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={14} xl={14}>
                                            <h3>描述：</h3>
                                            <p> 
                                                主專案為診所使用的營運系統: 主要功能有診所的行政作業（掛號、批價、門診醫令）。
                                            </p>
                                            <p>
                                                畫面為門診醫令: 醫師使用此畫面來做看診，紀錄病患主訴、下醫令、診斷，派單等功能。
                                            </p>
                                            <h3>備註： </h3>
                                            <p> 
                                                因應診所業務需要，客製的 Component 增加，因此捨棄原來專案使用的 BootstrapVue 框架提供的 Components，改為自製 Component 搭配 Tailwind 的樣式設計。
                                            </p>
                                        </Col>
                                    </Row>
                                )
                                setModalVisible(true);
                            }}>
                                <MessageOutlined /> 專案描述
                        </span> 
                    ]}
                >
                    <Card.Meta
                        title="Hixcare 醫師看診"
                        description={
                            <>
                            Hixcare 醫師看診
                            <div>
                                <Tag color="#4fc08d">vue.js</Tag>
                                <Tag color="#38bdf8">Tailwind</Tag>
                            </div>
                            </>
                        }
                    />
                </Card>
                </Col>
                <Col sm={{span: 24}} md={{span: 12}} lg={{span: 8}}>
                <Card
                    cover={
                        <Image
                            alt="Resmed-subscribe"
                            src="/projects/resmed-subscribe.png"
                        />
                    }
                    actions={[
                        <span 
                            onClick={() => {
                                setModalTitle('Resmed-科林睡得美');
                                setModalContent(
                                    <Row gutter={16}>
                                        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                                            <Carousel style={{ background: '#1c2022' }}>
                                                <Image
                                                    alt="Resmed-subscribe"
                                                    src="/projects/resmed-subscribe.png"
                                                />
                                                <Image
                                                    alt="Resmed-questionnaire"
                                                    src="/projects/resmed-questionnaire.png"
                                                />
                                            </Carousel>
                                            <Divider />
                                            <div>
                                                <Tag color="#61dafb">React.js</Tag>
                                                <Tag color="#1890ff">Ant Design</Tag>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={14} xl={14}>
                                            <h3>描述：</h3>
                                            <p> 
                                                <Link to="https://member.resmed.ear.com.tw/login" target="_blank">
                                                    <LinkOutlined /> Resmed 會員
                                                </Link>
                                            </p>
                                            <p> 
                                                提供呼吸器顧客登入查看自己使用呼吸器的狀況，每日及每月使用時數、AHI數值、呼吸是否中斷等等，
                                                並提供顧客購買訂單相關資訊。
                                            </p>
                                            <p> 
                                                <Link to="https://stop-bang.resmed.ear.com.tw/" target="_blank">
                                                    <LinkOutlined /> Resmed 問卷
                                                </Link>
                                            </p> 
                                            <p> 
                                                提供問卷讓造訪官網的用戶簡單測試是否有潛在睡眠呼吸問題，也讓行銷人員分析潛在顧客。
                                            </p>
                                            <h3>備註： </h3>
                                            <p> 
                                                因應 header & footer 有多專案共同使用，另外打包到 private npm repo 供其他專案直接 npm install  使用。
                                            </p>
                                        </Col>
                                    </Row>
                                )
                                setModalVisible(true);
                            }}>
                                <MessageOutlined /> 專案描述
                        </span> 
                    ]}
                >
                    <Card.Meta
                        title="Resmed-科林睡得美"
                        description={
                            <>
                            會員服務功能 & 問卷
                            <div>
                                <Tag color="#61dafb">React.js</Tag>
                                <Tag color="#1890ff">Ant Design</Tag>
                                <Tag color="#003a8c">Typescript</Tag>
                            </div>
                            </>
                        }
                    />
                </Card>
                </Col>
                <Col sm={{span: 24}} md={{span: 12}} lg={{span: 8}}>
                <Card
                    cover={               
                        <Image
                            alt="wishvision"
                            src="/projects/wishvision.png"
                        /> 
                    }
                    actions={[
                        <span 
                            onClick={() => {
                                setModalTitle('WishVision 濰視眼科');
                                setModalContent(
                                    <Row gutter={16}>
                                        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                                            <Image
                                                alt="wishvision"
                                                src="/projects/wishvision.png"
                                            /> 
                                            <Divider />
                                            <div>
                                                <Tag color="#61dafb">React.js</Tag>
                                                <Tag color="#1890ff">Ant Design</Tag>
                                                <Tag color="#2079ed">Chart</Tag>
                                                <Tag color="#08979c">React-i18n</Tag>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={14} xl={14}>
                                            <h3>描述：</h3>
                                            <p> 
                                                主要功能為營運報表、顧客預約管理、顧客管理、顧客就診紀錄、儀器檢查結果，及醫師看診介面，且提供繁簡中文。
                                            </p>
                                            <p> 
                                                另有 <Link to="https://booking.wishvision.com.tw/" target="_blank">預約頁面</Link>
                                            </p>
                                        
                                            <h3>備註： </h3>
                                            <p> 
                                                預約頁面的資料會進到診所系統，並協助行銷使用 GA 追蹤，及相關 SEO 設定。
                                            </p>
                                            <p> 
                                                預約頁面使用 react-i18n 來提供中英語系功能。
                                            </p>
                                        </Col>
                                    </Row>
                                )
                                setModalVisible(true);
                            }}>
                                <MessageOutlined /> 專案描述
                        </span> 
                    ]}
                >
                    <Card.Meta
                        title="WishVision 濰視眼科"
                        description={
                            <>
                            診所管理系統
                            <div>
                                <Tag color="#61dafb">React.js</Tag>
                                <Tag color="#1890ff">Ant Design</Tag>
                                <Tag color="#2079ed">Chart</Tag>
                            </div>
                            </>
                        }
                    />
                </Card>
                </Col>
                <Col sm={{span: 24}} md={{span: 12}} lg={{span: 8}}>
                <Card
                    cover={
                        <Image
                            alt="store-dash"
                            src="/projects/store-dash.png"
                        />
                    }
                    actions={[
                        <span 
                            onClick={() => {
                                setModalTitle('Clinico 門市管理系統');
                                setModalContent(
                                    <Row gutter={16}>
                                        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                                            <Carousel style={{ background: '#1c2022' }}>
                                                <Image
                                                    alt="store-login"
                                                    src="/projects/store-login.png"
                                                />
                                                <Image
                                                    alt="store-dash"
                                                    src="/projects/store-dash.png"
                                                />
                                            </Carousel>
                                            <Divider />
                                            <div>
                                                <Tag color="#61dafb">React.js</Tag>
                                                <Tag color="#1890ff">Ant Design</Tag>
                                                <Tag color="#e10098">GraphQL</Tag>
                                                <Tag color="#003a8c">Typescript</Tag>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={14} xl={14}>
                                            <h3>描述：</h3>
                                            <p> 
                                                主要提供門市人員進行預約管理、顧客管理、門市相關作業的系統。
                                            </p>
                                        
                                            <h3>備註： </h3>
                                            <p>主要解決 WPC 限制 U 數問題，以及整個門市針對集團各品牌顧客的服務及管理。</p>
                                        </Col>
                                    </Row>
                                )
                                setModalVisible(true);
                            }}>
                                <MessageOutlined /> 專案描述
                        </span>                     
                    ]}
                >
                    <Card.Meta
                        title="科林儀器"
                        description={
                            <>
                            門市管理系統
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
                <Col sm={{span: 24}} md={{span: 12}} lg={{span: 8}}>
                <Card
                    cover={
                        <Carousel autoplay>
                            <Image
                                alt="fine-官網"
                                src="/projects/fine-website.png"
                            />
                        </Carousel>
                    }
                    actions={[
                        <span 
                            onClick={() => {
                                setModalTitle('Fine 官網製作 (前端)');
                                setModalContent(
                                    <Row gutter={16}>
                                        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                                            <Carousel style={{ background: '#1c2022' }}>
                                                <Image
                                                    alt="fine-官網"
                                                    src="/projects/fine-website.png"
                                                />
                                            </Carousel>
                                            <Divider />
                                            <div>
                                                <Tag color="#4fc08d">vue.js</Tag>
                                                <Tag color="#00c58e">nuxt.js</Tag>
                                                <Tag color="#7952b3">bootstrap 4</Tag>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={14} xl={14}>
                                            <h3>描述：</h3>
                                            <p> 
                                                Fine 是一個租借 WiFi 分享器的公司，此為當初負責形象網站規劃與建制，除產品介紹外另有租借流程畫面。
                                            </p>  
                                            <p> 
                                                另有設計一個內部系統，用於管理租借的機器，使用狀態、所配合的旅行社顧客等等相關管理功能。
                                            </p>  
                                            <Row gutter={16}>
                                                <Col>
                                                    <Link to="https://github.com/YuningChou/fine" target="_blank">
                                                        GitHub
                                                    </Link>
                                                </Col>
                                                <Col>
                                                    <Link to="https://yuningchou.github.io/fine/" target="_blank">
                                                        Demo
                                                    </Link>  
                                                </Col>
                                            </Row>                           
                                            <h3>備註： </h3>
                                            
                                            <p>參與時為草創階段，設計了兩個頁面，另一個偏向 mobile 呈現為主，後來並未採用。</p>
                                            <Row gutter={16}>
                                                <Col>
                                                    <Link to="https://github.com/YuningChou/web-demo" target="_blank">
                                                        GitHub
                                                    </Link>
                                                </Col>
                                                <Col>
                                                    <Link to="https://yuningchou.github.io/web-demo/" target="_blank">
                                                        Demo
                                                    </Link>  
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                )
                                setModalVisible(true);
                            }}>
                                <MessageOutlined /> 專案描述
                        </span>                  
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

                <Col sm={{span: 24}} md={{span: 12}} lg={{span: 8}}>
                <Card
                    cover={
                        <Carousel>
                            <Image
                                alt="世邦旅行社官網"
                                src="/projects/4p-web.png"
                            />
                            
                        </Carousel>
                    }
                    actions={[
                        <span 
                            onClick={() => {
                                setModalTitle('世邦旅行社官網-RWD');
                                setModalContent(
                                    <Row gutter={16}>
                                        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                                            <Carousel>
                                                <Image
                                                    alt="世邦旅行社官網"
                                                    src="/projects/4p-web.png"
                                                />
                                            </Carousel>
                                            <Divider />
                                            <div>
                                                <Tag color="#7952b3">bootstrap 3</Tag>
                                                <Tag color="#1d39c4">RWD</Tag>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={14} xl={14}>
                                            <h3>描述：</h3>
                                            <p> 
                                                世邦旅行社原來網站並無 RWD，需求為在不更動版面設計設計情況下規劃為 RWD 網站；
                                                包括首頁、產品清單頁面、產品詳細頁、活動行銷頁等等...整站改版。
                                            </p>   
                                        </Col>
                                    </Row>
                                )
                                setModalVisible(true);
                            }}>
                                <MessageOutlined /> 專案描述
                        </span>,       
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
                
                <Col sm={{span: 24}} md={{span: 12}} lg={{span: 8}}>
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
                        <span 
                            onClick={() => {
                                setModalTitle('CLC 書房管理');
                                setModalContent(
                                    <Row gutter={16}>
                                        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                                            <Carousel autoplay>
                                                <Image
                                                    alt="clc-store"
                                                    src="/projects/clc-store.png"
                                                />
                                            </Carousel>
                                            <Divider />
                                            <div>
                                                <Tag color="#61dafb">React.js</Tag>
                                                <Tag color="#1890ff">Ant Design</Tag>
                                                <Tag color="#f58209">Firebase</Tag>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={14} xl={14}>
                                            <h3>描述：</h3>
                                            <p> 
                                                Side project, 目標是要解決使用 excel 來庫存管理的問題。
                                                主要用 Firebase的 Realtime Database 存取資料，還有 Storage 來存取圖片， Authentication 來管理使用者登入。
                                            </p>   
                                        </Col>
                                    </Row>
                                )
                                setModalVisible(true);
                            }}>
                                <MessageOutlined /> 專案描述
                        </span>,
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
        </>
    )
};

export default ProjectList;