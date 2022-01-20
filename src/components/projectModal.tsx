import React from "react";
import { Link } from "gatsby";
import { Carousel, Image, Modal } from 'antd';
import { GithubOutlined, LinkOutlined, MessageOutlined } from '@ant-design/icons';

const ProjectModal = (props) => {
    const { projectTitle, projectContent, isModalVisible, onCloseModal }  = props;
    return (
        <Modal width={800} title={projectTitle} visible={isModalVisible} onCancel={onCloseModal} footer={null}>
            {projectContent}
        </Modal>
    )
};

export default ProjectModal;