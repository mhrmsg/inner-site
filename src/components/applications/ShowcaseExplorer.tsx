import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import VerticalNavbar from '../showcase/VerticalNavbar';
import Home from '../showcase/Home';
import About from '../showcase/About';
import Contact from '../showcase/Contact';
import Experience from '../showcase/Experience';

export interface ShowcaseExplorerProps extends WindowAppProps { }

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="MHR - Showcase 2025"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2025 MHR'}
        >
            <Router>
                <div className="site-page">
                    <VerticalNavbar></VerticalNavbar>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        </Window>
    );
};

export default ShowcaseExplorer;
