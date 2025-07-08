import type { IconName } from "../../assets/icons";

export interface DesktopShortcutProps {
    icon: IconName;
    shortcutName: string;
    invertText?: boolean;
    onOpen: () => void;
}