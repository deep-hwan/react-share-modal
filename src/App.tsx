import React, { useState } from "react";
import { ShareModal } from "./lib/index";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button type="button" onClick={() => setIsOpen(true)}>
        open
      </button>

      <ShareModal
        view={isOpen}
        onCancel={() => setIsOpen(false)}
        theme=""
        lang="ko"
      ></ShareModal>
    </div>
  );
}
