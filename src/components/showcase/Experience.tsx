import React from 'react';

export interface ExperienceProps { }

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>新空安风云系统</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>前端开发</h3>
                        <b>
                            <p>2022 - 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    针对无人机及机场不同使用场景的信息化解决方案，联合行动场景“风云系统”，即开即用的 SaaS 模式和特定环境的私有化部署模式。具有态势显示、实时直播、飞行控制、智能识别、指点飞行、语音通话、多端协同、直播分享、行动复盘、飞行记录、航线复飞、预案管理、素材管理、设备管理、组织管理等功能。它使用JavaScript编写，使用了Vue3、Vue-Router、Pinia、Agora-Sdk、AMap和Cesium。
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            设计并实现了多种功能，以提高程序的可用性和用户体验，同时确保前端的质量、可维护性和可扩展性。
                        </p>
                    </li>
                    <li>
                        <p>
                            设计并制作了地图无人机动态寻路功能，该功能作为航线详情核心功能每日可产生超过2,000次的浏览量。
                        </p>
                    </li>
                    <li>
                        <p>
                            协调针对应用程序优化和性能的主要重构，从而实现更流畅的用户体验，并通过消除超过 50% 的冗余重新渲染和 API 调用来实现。
                        </p>
                    </li>

                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>新空安融合系统</h1>

                    </div>
                    <div style={styles.headerRow}>
                        <h3>前端开发</h3>
                        <b>
                            <p>2024 - 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    智能巡检、接警侦察、多机联合多系统融合。它使用TypeScript编写，使用了Vue3、Vue-Router、Pinia、Agora-Sdk、ZLMediaKit、Cesium。
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            设计并实现了基于ServiceWork的前端资源批量打包下载组件，解决了旧系统存在的下载卡顿、大文件下载失败的痛点。
                        </p>
                    </li>
                    <li>
                        <p>
                            设计并制作了面状航线，该功能作为航线的主要核心功能之一，扩展了一键建模功能，大大增加了用户群体。
                        </p>
                    </li>
                    <li>
                        <p>
                            私有化项目定制开发，协调管理私有化开发进度，完美解决用户需求
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>第三代低空数智平台</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>前端开发</h3>
                        <b>
                            <p>2025 - 2025/4</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    新一代低空数智平台。使用了Vue3、Vue-Router、Pinia、Agora-Sdk、ZLMediaKit、Mars3D
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            设计并实现远程控制、设备管理、文件下载功能，协调针对应用程序优化和性能进行主要重构
                        </p>
                    </li>
                    <li>
                        <p>
                            使用LeaferJS封装图片编辑、查看、标注核心功能，使其他开发者实现更流畅的开发体验
                        </p>
                    </li>
                    <li>
                        <p>
                            基于Cesium VideoSynchronizer源码，重新设计航线-视频同调功能，解决原有多视频循环播放闪烁问题
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
