import React from "react";
import { Link } from "gatsby";
import { Typography, Row, Col, Card } from 'antd';
import { Post } from './../types/post.type';

const About = () => (
  <div style={{padding: '0 20px'}}>
    <Typography.Title level={2}>About Me</Typography.Title>
    <Typography.Paragraph>Hi，我是 Kat Chou。</Typography.Paragraph>
    <Typography.Paragraph>我是一個 Web 前端開發人員，對各種 Web 技術充滿熱情，喜歡自學且持續學習。</Typography.Paragraph>
    <Typography.Paragraph>我有 5 年左右的網頁開發經驗；其中包含形象網站、公司內部系統建置，並且我有個人獨立作業以及團隊合作的經驗。</Typography.Paragraph>
    <Typography.Paragraph>目前，我主要使用 JavaScript 技術，例如 ReactJS 和 NodeJS。我還具有一些關於 CI / CD 的經驗。</Typography.Paragraph>
    <Typography.Paragraph>未來，我將朝著豐富全端經驗這個目標前進，正在進行 RESTful API 開發，以及 MVC、ORM 觀念的學習。</Typography.Paragraph>
    <Typography.Title level={4}>一些特別的事</Typography.Title>
    <Typography.Paragraph>我國中畢業後因為一些原因去中國上海讀高中，高中畢業後有在上海工作過一段時間，主要是設計相關，之後回到臺灣。</Typography.Paragraph>
    <Typography.Paragraph>我並非是軟體開發相關本科系畢業，是工作後才知道有網頁開發這個工作，最一開始是從 Dreamweaver 開始的 😂，因為有了興趣，才又註冊了大學修了相關的課程，並完成大學學業。</Typography.Paragraph>
    <Typography.Paragraph>如我上一段描述，因為一開始非本科畢業，所以要投入軟體開發相關工作相對比較困難，於是先從在上海工作時沾上邊的設計開始網頁設計的工作。</Typography.Paragraph>
    <Typography.Paragraph>使用者需求訪談、Wireframe、切版、與後端討論 API、API介接、測試、需求調整...在各個工作階段取得這些經驗。</Typography.Paragraph>
    <Typography.Title level={4}>關於這個網站</Typography.Title>
    <Typography.Paragraph>一開始就是想試試看用 gatsby 建一個 blog；預計這邊的內容會久久才更新一次，大部分會是零散的技術相關筆記，或是生活隨便亂寫心得文。</Typography.Paragraph>
    <Typography.Paragraph strong type="danger">想看 Blog 就點擊「 Blog 」頁籤，想看我的專案經驗就點擊「 Projects 」頁籤。</Typography.Paragraph>
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <Card>
          <img src='/static/map_pin.png' style={{height: 100, display: 'block', margin: '0 auto'}} />
          <Typography.Text type="secondary" style={{ display: 'block', margin: 10, textAlign: 'center' }} >地點</Typography.Text>
          <Typography.Title style={{ margin: 10, textAlign: 'center' }} level={4}>臺灣</Typography.Title>
        </Card>
      </Col>
      <Col span={8}>
        <Card>
            <img src='/static/hotpot.png' style={{height: 100, display: 'block', margin: '0 auto'}} />
            <Typography.Text type="secondary" style={{ display: 'block', margin: 10, textAlign: 'center' }} >喜歡的食物</Typography.Text>
            <Typography.Title style={{ margin: 10, textAlign: 'center' }} level={4}>火鍋</Typography.Title>
        </Card>
      </Col>
      <Col span={8}>
        <Card>
            <img src='/static/learning.png' style={{height: 100, display: 'block', margin: '0 auto'}} />
            <Typography.Text type="secondary" style={{ display: 'block', margin: 10, textAlign: 'center' }} >學習方式</Typography.Text>
            <Typography.Title style={{ margin: 10, textAlign: 'center' }} level={4}>書 & 網路資源</Typography.Title>
        </Card>
      </Col>
      <Col span={8}>
        <Card>
            <img src='/static/violin.png' style={{height: 100, display: 'block', margin: '0 auto'}} />
            <Typography.Text type="secondary" style={{ display: 'block', margin: 10, textAlign: 'center' }} >最近才開始</Typography.Text>
            <Typography.Title style={{ margin: 10, textAlign: 'center' }} level={4}>小提琴</Typography.Title>
        </Card>
      </Col>
      <Col span={8}>
        <Card>
            <img src='/static/swimming.png' style={{height: 100, display: 'block', margin: '0 auto'}} />
            <Typography.Text type="secondary" style={{ display: 'block', margin: 10, textAlign: 'center' }} >興趣</Typography.Text>
            <Typography.Title style={{ margin: 10, textAlign: 'center' }} level={4}>游泳</Typography.Title>
        </Card>
      </Col>
      <Col span={8}>
        <Card>
            <img src='/static/bike.png' style={{height: 100, display: 'block', margin: '0 auto'}} />
            <Typography.Text type="secondary" style={{ display: 'block', margin: 10, textAlign: 'center' }} >興趣</Typography.Text>
            <Typography.Title style={{ margin: 10, textAlign: 'center' }} level={4}>騎腳踏車</Typography.Title>
        </Card>
      </Col>
    </Row>
  </div >
);

export default About;