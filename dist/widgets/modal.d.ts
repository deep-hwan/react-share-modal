import React from "react";
interface ShareModalProps {
    view: boolean;
    onCancel: () => void;
    theme: string;
    children: React.ReactNode;
    lang: string;
}
export declare const ShareModal: React.FC<ShareModalProps>;
export {};
