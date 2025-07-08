import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import VerticalNavbar from '../showcase/VerticalNavbar';

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

                    </Routes>
                </div>
            </Router>
        </Window>
    );
};

export default ShowcaseExplorer;
