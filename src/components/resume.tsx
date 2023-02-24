import React, { useState } from "react";
import { Typography, Row, Col, Radio } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { Post } from '../types/post.type';

const Resume = () => {
  const [language, setLanguage] = useState('en');
  const handleSwitchLanguage = (e) => {
    setLanguage(e.target.value);
  }

  const employmentHistoryContent = (value) => {
    switch (value) {
      case 'en': 
        return (
          <>
            <Typography.Title level={3} className="jobTitle">Frontend Engineer, 
              <Typography.Link href="https://www.clinico.com.tw/" target="_blank"> FRANKLIN TEMPLETON INVESTMENTS</Typography.Link>
            </Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined /> May 2022 - PRESENT</Typography.Text>
            <Typography.Paragraph>
              <ul>
                <li>
                  Collaborated with product team members to implement new feature developments.
                </li>
                <li>
                  Maintaining, optimizing, troubleshooting, and improving websites.
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Title level={5}>Projects:</Typography.Title>
            <Typography.Paragraph>
              <ul>
                <li>
                  <a href="https://www.franklin.com.tw/Fund/BasicInformation/0839" target="_blank">Fund Details</a>
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Text type="secondary" className="skill">Skill: #VueJS #JavaScript #CSS #HTML #Git #Sass</Typography.Text>

            <Typography.Title level={3} className="jobTitle">Frontend Software Engineer, 
              <Typography.Link href="https://www.clinico.com.tw/" target="_blank"> Hygeai Informatix, Inc</Typography.Link>
            </Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined /> JUNE 2021 - APRIL 2022</Typography.Text>
            <Typography.Paragraph>
              <ul>
                <li>
                  Identify business requirements.
                </li>
                <li>
                  Collaborated with product team members to implement new feature developments.
                </li>
                <li>
                  Maintaining, optimizing, troubleshooting, and improving websites.
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Title level={5}>Projects:</Typography.Title>
            <Typography.Paragraph>
              <ul>
                <li>
                  HIS system
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Text type="secondary" className="skill">Skill: #Javascript, #Vue, #CSS, #SASS, #Tailwind, #Git</Typography.Text>

            <Typography.Title level={3} className="jobTitle">Front end developer, 
              <Typography.Link href="https://www.clinico.com.tw/" target="_blank"> Clinico</Typography.Link>
            </Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined /> OCTOBER 2018 - MAY 2021</Typography.Text>
            <Typography.Paragraph>
              <ul>
                <li>
                  Identify business requirements.
                </li>
                <li>
                  Helped to achieve a consistent look and visual theme across the website by promoting uniform fonts, formatting, images, and layout.
                </li>
                <li>
                  Worked on internal and external projects with great care.
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Title level={5}>Projects:</Typography.Title>
            <Typography.Paragraph>
              <ul>
                <li>
                  Wishvision internal CRM, HIS system, external booking page
                </li>
                <li>
                  Resmed internal CRM system, external booking page
                </li>
                <li>
                  Clinico Store management system
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Text type="secondary" className="skill">Skill: #Javascript, #Typescript, #React, #CSS, #SASS, #Git</Typography.Text>
          

            <Typography.Title level={3} className="jobTitle">Front end developer, 
              <Typography.Link href="https://www.finemifi.com/" target="_blank"> HurrayCloud</Typography.Link>
            </Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined /> APRIL 2018 - OCTOBER 2018</Typography.Text>
            <Typography.Paragraph>
              <ul>
                <li>
                  Identify business requirements.
                </li>
                <li>
                  Developed internal management system.
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Title level={5}>Projects:</Typography.Title>
            <Typography.Paragraph>
              <ul>
                <li>
                  VSIM internal management system
                </li>
                <li>
                  Fine WiFi website
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Text type="secondary" className="skill">Skill: #Javascript, #Vue, #CSS, #SASS, #SVN</Typography.Text>

            <Typography.Title level={3} className="jobTitle">Web Designer, 
              <Typography.Link href="https://www.cowell.com.tw/" target="_blank"> Cowell</Typography.Link>
            </Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined /> MARCH 2016 - APRIL 2018</Typography.Text>
            <Typography.Paragraph>
              <ul>
                <li>
                  Interfaced with clients to identify business requirements.
                </li>
                <li>
                  Helped to achieve a consistent look and visual theme across the website by promoting uniform font, formatting, images and layout.
                </li>
                <li>
                  Refactored and developed clients (Travel agency) website.
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Title level={5}>Projects:</Typography.Title>
            <Typography.Paragraph>
              <ul>
                <li>
                  Spunk Tour, etc.
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Text type="secondary" className="skill">Skill: #Javascript, #jQuery, #CSS, #RWD</Typography.Text>

            <Typography.Title level={3} className="jobTitle">Web Designer, 
              <Typography.Link href="https://www.smartchip.com.tw/indexsmartchip.html" target="_blank"> SmartChip</Typography.Link>
            </Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined /> JANUARY 2013 - MARCH 2016</Typography.Text>
            <Typography.Paragraph>
              <ul>
                <li>
                  Developed and Design Website.
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Title level={5}>Projects:</Typography.Title>
            <Typography.Paragraph>
              <ul>
                <li>
                  iHoin website
                </li>
                <li>
                  iHoin internal management system
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Text type="secondary" className="skill">Skill: #Javascript, #jQuery, #CSS, #RWD</Typography.Text>
            <Typography.Title level={2}>Education</Typography.Title>
            <Typography.Title level={3} className="jobTitle">National Open University</Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined /> JULY 2013 - JULY 2019</Typography.Text>
        </>
      )
      case 'zh': 
        return (
          <>
          <Typography.Title level={3} className="jobTitle">前端工程師, 
              <Typography.Link href="https://www.clinico.com.tw/" target="_blank">富蘭克林證券投資顧問股份有限公司</Typography.Link>
            </Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined /> 2022/05 - 仍在職</Typography.Text>
            <Typography.Paragraph>
              <ul>
                <li>
                  官網： 新版官網切版、RWD，使用 nuxt.js 
                </li>
                <li>
                  交易系統維護： 根據 PM 提出需求實作功能
                </li>
                <li>
                  活動頁面製作：根據行銷企劃提出需求實作活動頁
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Title level={5}>Projects:</Typography.Title>
            <Typography.Paragraph>
              <ul>
                <li>
                  <a href="https://www.franklin.com.tw/Fund/BasicInformation/0839" target="_blank">官網</a>
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Text type="secondary" className="skill">Skill: #VueJS #JavaScript #CSS #HTML #Git #Sass</Typography.Text>

            <Typography.Title level={3} className="jobTitle">前端工程師, 
              <Typography.Link href="https://www.clinico.com.tw/" target="_blank"> 采醫智展</Typography.Link>
            </Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined /> 2021/06 - 2022/04</Typography.Text>
            <Typography.Paragraph>
              <ul>
                <li>
                  醫療資訊系統前端開發。
                </li>
                <li>
                  根據需求規劃新的版面改版及功能實現，改善原系統介面操作複雜問題。
                </li>
                <li>
                  重構原系統架構，將看診畫面使用之元件化，有效改善程式擴充性、複用性，節省維護時間。
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Title level={5}>Projects:</Typography.Title>
            <Typography.Paragraph>
              <ul>
                <li>
                  醫療資訊系統 HIS
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Text type="secondary" className="skill">Skill: #Javascript, #Vue, #CSS, #SASS, #Tailwind, #Git</Typography.Text>

            <Typography.Title level={3} className="jobTitle">前端工程師, 
              <Typography.Link href="https://www.clinico.com.tw/" target="_blank"> 科林儀器</Typography.Link>
            </Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined /> 2018/10 - 2021/05</Typography.Text>
            <Typography.Paragraph>
              <ul>
                <li>
                  集團內各品牌內部營運系統前端開發、維護
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Title level={5}>Projects:</Typography.Title>
            <Typography.Paragraph>
              <ul>
                <li>
                  濰視眼科診所: 內部 CRM, HIS 系統
                </li>
                <li>
                  濰視眼科診所: 外部顧客預約頁面
                </li>
                <li>
                  睡得美呼吸器: CRM 系統
                </li>
                <li>
                  睡得美呼吸器: 外部顧客預約頁面、會員呼吸器使用狀況頁面
                </li>
                <li>
                  科林儀器:門市系統
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Text type="secondary" className="skill">Skill: #Javascript, #Typescript, #React, #CSS, #SASS, #Git</Typography.Text>
          

            <Typography.Title level={3} className="jobTitle">前端工程師, 
              <Typography.Link href="https://www.finemifi.com/" target="_blank"> 懋雲科技</Typography.Link>
            </Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined />2018/04 - 2018/10</Typography.Text>
            <Typography.Paragraph>
              <ul>
                <li>
                  與系統分析師、後端工程師合作公司內部ERP開發。
                </li>
                <li>
                  與行銷、業務部門、系統分析師合作公司官網規劃與製作。
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Title level={5}>Projects:</Typography.Title>
            <Typography.Paragraph>
              <ul>
                <li>
                  VSIM: WiFi 分享器內部管理系統
                </li>
                <li>
                  Fine WiFi 官網
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Text type="secondary" className="skill">Skill: #Javascript, #Vue, #CSS, #SASS, #SVN</Typography.Text>

            <Typography.Title level={3} className="jobTitle">網頁視覺設計師, 
              <Typography.Link href="https://www.cowell.com.tw/" target="_blank"> 科威資訊</Typography.Link>
            </Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined /> 2016/03 - 2018/04</Typography.Text>
            <Typography.Paragraph>
              <ul>
                <li>
                  與顧客洽談需求，規劃UI/UX，製作設計稿，切版，串接API
                </li>
                <li>
                  內部系統UI/UX設計
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Title level={5}>Projects:</Typography.Title>
            <Typography.Paragraph>
              <ul>
                <li>
                  世邦旅行社-重構為 RWD
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Text type="secondary" className="skill">Skill: #Javascript, #jQuery, #CSS, #RWD</Typography.Text>

            <Typography.Title level={3} className="jobTitle">網頁設計師, 
              <Typography.Link href="https://www.smartchip.com.tw/indexsmartchip.html" target="_blank"> 瑞新電子</Typography.Link>
            </Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined /> 2013/01 - 2016/03</Typography.Text>
            <Typography.Paragraph>
              <ul>
                <li>
                  製作與維護公司官網，更新產品資訊，設計網頁互動程式
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Title level={5}>Projects:</Typography.Title>
            <Typography.Paragraph>
              <ul>
                <li>
                  iHoin 官網
                </li>
                <li>
                  SmartChip 官網
                </li>
                <li>
                  iHoin 內部管理系統
                </li>
              </ul>
            </Typography.Paragraph>
            <Typography.Text type="secondary" className="skill">Skill: #Javascript, #jQuery, #CSS, #RWD</Typography.Text>
            <Typography.Title level={2}>學歷</Typography.Title>
            <Typography.Title level={3} className="jobTitle">國立空中大學</Typography.Title>
            <Typography.Text type="secondary" className="workPeriod"><CalendarOutlined /> 2013/07 - 2019/07</Typography.Text>
        </>
      );
    }
  }
  return (
    <div className="resume">
      <Row justify="space-between">
        <Col><Typography.Title level={2}>{language == 'en' ? 'Employment History' : '工作經歷'}</Typography.Title></Col>
        <Col>
        <Radio.Group defaultValue="en" onChange={handleSwitchLanguage}>
          <Radio.Button value="en">English</Radio.Button>
          <Radio.Button value="zh">中文</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      {employmentHistoryContent(language)}
    </div>
  )
};

export default Resume;