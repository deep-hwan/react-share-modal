import React, { useState, useEffect, useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  FacebookShareButton,
  LineShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FaceBooxIcon,
  LineIcon,
  TeleIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "./icons";

import styled from "@emotion/styled";
import URLClipboard from "./clipboard";

interface ShareModalProps {
  view: boolean;
  onCancel: () => void;
  theme: string;
  children: React.ReactNode;
  lang: string;
}

export default function ShareModal(props: Partial<ShareModalProps>) {
  const { view, onCancel, theme, children, lang } = props as ShareModalProps;
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

  const clickModalOutside = (event: MouseEvent) => {
    if (view && ref.current && !ref.current.contains(event.target as Node)) {
      onCancel();
    }
  };

  useEffect(() => {
    ref.current?.scrollTo(0, 0);

    if (view) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    document.addEventListener("mousedown", clickModalOutside);
    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  }, [view]);

  useEffect(() => {
    const url = window.location.href;
    setCurrentUrl(url);
  }, []);

  return (
    <>
      <Layer isActive={view} />

      <Wrap isActive={view}>
        <Box ref={ref} theme={theme}>
          <Title theme={theme}>{lang === "ko" ? "공유하기" : "SHARE"}</Title>

          <CancelTab type="button" onClick={onCancel}>
            <svg
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 22.018C17.0751 22.018 22 17.0931 22 11.018C22 4.94287 17.0751 0.0180054 11 0.0180054C4.92487 0.0180054 0 4.94287 0 11.018C0 17.0931 4.92487 22.018 11 22.018Z"
                fill={theme === "dark" ? "#999" : "#fff"}
              />
              <path
                d="M18.779 3.239C17.2407 1.70058 15.2807 0.652879 13.1468 0.228401C11.013 -0.196076 8.80128 0.021732 6.79127 0.854281C4.78125 1.68683 3.06326 3.09673 1.85454 4.90568C0.645823 6.71463 0.000671387 8.84139 0.000671387 11.017C0.000671387 13.1926 0.645823 15.3194 1.85454 17.1283C3.06326 18.9373 4.78125 20.3472 6.79127 21.1797C8.80128 22.0123 11.013 22.2301 13.1468 21.8056C15.2807 21.3811 17.2407 20.3334 18.779 18.795C20.8418 16.7321 22.0007 13.9343 22.0007 11.017C22.0007 8.09971 20.8418 5.30189 18.779 3.239ZM13.217 14.524L11.001 12.308L8.78302 14.525C8.61087 14.6915 8.38017 14.7838 8.14065 14.7818C7.90114 14.7798 7.67199 14.6838 7.50262 14.5144C7.33325 14.345 7.23722 14.1159 7.23524 13.8764C7.23326 13.6369 7.32548 13.4062 7.49202 13.234L9.71002 11.016L7.49702 8.803C7.33048 8.63085 7.23826 8.40015 7.24024 8.16063C7.24222 7.92112 7.33825 7.69197 7.50762 7.5226C7.67699 7.35323 7.90613 7.25721 8.14565 7.25522C8.38517 7.25324 8.61587 7.34546 8.78802 7.512L11.001 9.726L13.214 7.513C13.3861 7.34871 13.6157 7.25828 13.8536 7.26105C14.0916 7.26382 14.319 7.35956 14.4872 7.52781C14.6555 7.69606 14.7512 7.92346 14.754 8.16139C14.7567 8.39932 14.6663 8.62888 14.502 8.801L12.289 11.014L14.507 13.23C14.6736 13.4022 14.7658 13.6329 14.7638 13.8724C14.7618 14.1119 14.6658 14.341 14.4964 14.5104C14.3271 14.6798 14.0979 14.7758 13.8584 14.7778C13.6189 14.7798 13.3882 14.6875 13.216 14.521"
                fill={theme === "dark" ? "#444" : "#ccc"}
              />
            </svg>
          </CancelTab>

          <ScrollContainer className="scroll">
            {children}

            <FacebookShareButton url={currentUrl}>
              {FaceBooxIcon()}
              <span>facebook</span>
            </FacebookShareButton>

            <TwitterShareButton url={currentUrl}>
              {TwitterIcon()}
              <span>Twitter</span>
            </TwitterShareButton>

            <TelegramShareButton url={currentUrl}>
              {TeleIcon()}
              <span>Telegram</span>
            </TelegramShareButton>

            <LineShareButton url={currentUrl}>
              {LineIcon()}
              <span>Line</span>
            </LineShareButton>

            <WhatsappShareButton url={currentUrl}>
              {WhatsAppIcon()}
              <span>Whats App</span>
            </WhatsappShareButton>

            <URLClipboard />
          </ScrollContainer>
        </Box>
      </Wrap>
    </>
  );
}

// styled
const Layer = styled.div<{ isActive: boolean }>`
  z-index: 9000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.35);
`;

const Wrap = styled.div<{ isActive: boolean }>`
  z-index: 9999;
  position: fixed;
  top: ${({ isActive }) => (isActive ? "45%" : "-100%")};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  transition: 0.45s ease-in-out;
`;

const Box = styled.div<{ theme: string }>`
  position: relative;
  width: 100%;
  max-width: 440px;
  padding: 20px 0 20px 20px;
  border-radius: 18px;
  background-color: ${({ theme }) => (theme === "dark" ? "#2a2a2a" : "#fff")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .scroll {
    padding-top: 16px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    column-gap: 22px;
    padding-right: 20px;

    @media (max-width: 500px) {
      cursor: grab;
      column-gap: 18px;
    }

    button {
      max-width: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 5px;
      cursor: pointer;
      border: none;
      outline: none;
      background-color: transparent;

      svg,
      circle {
        width: 50px;
        min-width: 50px;
        height: 50px;
        min-height: 50px;
        transition: 0.3s ease-in-out;

        &:hover {
          opacity: 0.85;
        }

        @media (max-width: 500px) {
          width: 48px;
          min-width: 48px;
          height: 48px;
          min-height: 48px;
        }
      }

      span {
        color: #999;
        font-size: 0.6875rem;
        line-height: 1.2;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
    ::-webkit-scrollbar-track {
      display: none;
    }
    ::-webkit-scrollbar-thumb {
      display: none;
    }
    ::-webkit-scrollbar-thumb:hover {
      display: none;
    }
    ::-webkit-scrollbar-button:start:decrement,
    ::-webkit-scrollbar-button:end:increment {
      display: none;
    }
  }
`;

const Title = styled.strong`
  font-size: 1.125rem;
  color: ${({ theme }) => (theme === "dark" ? "#e0e0e0" : "#333")};
`;

const CancelTab = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  min-width: 24px;
  height: 24px;
  min-height: 24px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    min-width: 24px;
    height: 24px;
    min-height: 24px;
  }
`;
