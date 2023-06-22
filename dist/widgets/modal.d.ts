import React from "react";
interface ShareModalProps {
    view: boolean;
    onCancel: () => void;
    theme: string;
    children: React.ReactNode;
    lang: string;
}
export default function ShareModal(props: ShareModalProps): import("react/jsx-runtime").JSX.Element;
export {};
