import type { IconName } from "../../assets/icons";
import Doom from "../applications/Doom";
import Monopoly from "../applications/Monopoly";
import Tetris from "../applications/Tetris";
import ShowcaseExplorer from "../applications/ShowcaseExplorer";
import XianJian from "../applications/XianJian";
import Bomberman from "../applications/Bomberman";
type ExtendedWindowAppProps<T> = T & WindowAppProps;

export const APPLICATIONS: {
    [key in string]: {
        key: string;
        name: string;
        shortcutIcon: IconName;
        component: React.FC<ExtendedWindowAppProps<any>>;
    };
} = {
    // computer: {
    //     key: 'computer',
    //     name: 'This Computer',
    //     shortcutIcon: 'computerBig',
    //     component: ThisComputer,
    // },
    showcase: {
        key: 'showcase',
        name: '个人展示',
        shortcutIcon: 'showcaseIcon',
        component: ShowcaseExplorer,
    },
    doom: {
        key: 'doom',
        name: 'doom',
        shortcutIcon: 'doomIcon',
        component: Doom,
    },
    xianJian: {
        key: 'xianJian',
        name: '仙剑奇侠传',
        shortcutIcon: 'xianJianIcon',
        component: XianJian,
    },
    monopoly: {
        key: 'monopoly',
        name: '大富翁',
        shortcutIcon: 'monopolyIcon',
        component: Monopoly,
    },
    tetris: {
        key: 'tetris',
        name: '3D俄罗斯方块',
        shortcutIcon: 'tetrisIcon',
        component: Tetris,
    },
    bomberman: {
        key: 'bomberman',
        name: '3D炸弹人',
        shortcutIcon: 'bombermanIcon',
        component: Bomberman,
    },
};

