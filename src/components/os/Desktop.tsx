import React, { useCallback, useState } from "react";
import colors from "../../constants/colors";
import type { DesktopShortcutProps } from "./DesktopShortcut";
import Toolbar from "./Toolbar";


export interface DesktopProps { }

const Desktop: React.FC<DesktopProps> = (props) => {
    const [windows, setWindows] = useState<DesktopWindows>({});
    const [shortcuts, setShortcuts] = useState<DesktopShortcutProps[]>([]);
    const [shutdown, setShutdown] = useState(false);
    //关闭计数
    const [numShutdowns, setNumShutdowns] = useState(1);


    const toggleMinimize = useCallback(
        (key: string) => {
        },
        [windows]
    );


    const startShutdown = useCallback(() => {
        setTimeout(() => {
            setShutdown(true);
            setNumShutdowns(numShutdowns + 1);
        }, 600);
    }, []);

    return !shutdown ? (
        <div style={styles.desktop}>


            <Toolbar windows={windows}
                toggleMinimize={toggleMinimize}
                shutdown={startShutdown}></Toolbar>
        </div>
    ) : (
        <div>Shut Down</div>
    );
};

const styles: StyleSheetCSS = {
    desktop: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: colors.turquoise,
    },
    shutdown: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: '#1d2e2f',
    },
    shortcutContainer: {
        position: 'absolute',
    },
    shortcuts: {
        position: 'absolute',
        top: 16,
        left: 6,
    },
    minimized: {
        pointerEvents: 'none',
        opacity: 0,
    },
};

export default Desktop;