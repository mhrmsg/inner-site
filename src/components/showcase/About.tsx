import React from 'react';
import { Link } from 'react-router-dom';
export interface AboutProps { }

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>欢迎</h1>
            <h3>我是马浩然</h3>
            <br />
            <div className="text-block">
                <p>
                    一名从事Web开发的软件工程师，目前没有工作。2023年普通本科毕业。
                </p>
                <br />
                <p>
                    感谢您花时间查看我的页面，真心希望您能享受来自Win98页面带来的回忆以及乐趣。如果你有什么问题，清随时使用
                    <Link to="/contact">此表格</Link> 或者发送email{' '}
                    <a href="mailto:mhrmsg@gmail.com">
                        mhrmsg@gmail.com
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h3>关于我</h3>
                <br />
                <p>
                    我很小的时候就对计算机产生了浓厚的兴趣，眼巴巴地看着有着臃肿屁股的“白色大机器”，从它的荧屏上出现各种奇特画面，从那时起我彻底喜欢上了计算机。
                    虽然小时候更多的是对计算机游戏产生了浓厚的兴趣，也就导致我的学习成绩并不理想。
                </p>
                <p>

                </p>
                <br />

                <p>
                    我在大学时开始学习计算机，最基础的是C语言，随后从HTML开始，到JavaWeb。当然最开始的工作是实习于一家新兴的无人机公司，我也参与了我的第一份{' '}
                    <Link to="/projects/software">项目</Link> .
                </p>
                <br />
                <p>
                    在 2022年年末，我收到了新空安无人机软件公司的入职Offer，正值疫情，实习时不幸惨遭毒手，好在最后顺利通过了实习期。同时这份工作打开了我学习Web3D、WebGis的大门。
                    工作过程中要使用Cesium，在地图上展示无人机的各种实时数据，同时还需要了解一定的地理信息知识，这可给当时仅仅是前端入门的我带来了很多的困扰。
                    为什么使用Cesium会这么卡？为什么在前端批量打包下载无人机拍摄的图片有问题？为什么加载不了大规模的模型？怎么样才能画出面状航线？大疆司空他们是怎么做的？随着不断深入这些问题，一边感慨知识的无穷尽一边不断扩充着我的个人知识库。很遗憾在2025年4月我选择了离职，在这期间我从THREE社区了解到Bruno Simon，从他的Threejs-Journey课程中正式开始我的Threejs学习，这是我Web3D的正式启程。
                </p>
                <br />
                <p>
                    学了三年的前端，我认为前端必须要流畅，必须要炫酷，必须要帅。
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>兴趣爱好</h3>
                        <br />
                        <p>
                            除了软件开发，我在空闲时间也有很多爱好。最大的兴趣爱好莫过于写作，
                            在郁郁沉沉时，写作是我最好的发泄方式，写出些许文青的语句组成故事。
                        </p>
                        <br />
                        <p>
                            当然我也喜欢在互联网上探索新的领域，比如说随机输入单词拼接上.com的后缀访问网页。日常时从掘金、V站看一些程序员们的技术分享。
                        </p>
                    </div>

                </div>
                <br />
                <p>
                    如果您有任何问题或者意见，我很乐意听取。您可以通过{' '}
                    <Link to="/contact">联系页面</Link> 联系我，或者发送电子邮件{' '}
                    <a href="mailto:mhrmsg@gmail.com">
                        mhrmsg@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
