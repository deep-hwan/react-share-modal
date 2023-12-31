# <div>

 <h1>react-share-modal</h1>

<p>
You can share the current url on various social media by opening the Share modal
</p>
</div>

## Install

    npm install react-share-modal
    # or
    yarn add react-share-modal

---

## Usage

Information about the example code, prop type, and style for the package modal.

#### basic

 <div style="width: 500px;">
  <img src="https://github.com/deep-hwan/react-share-modal/blob/main/public/modal-img2.png?raw=true" width="500" alt="Title Image">
</div>

#### children & lang = 'ko'

 <div style="width: 500px;">
  <img src="https://github.com/deep-hwan/react-share-modal/blob/main/public/modal-img.png?raw=true" width="500" alt="Title Image">
</div>

### Example

```jsx
import { ShareModal } from "react-share-modal";

export default function App() {
  const [isOpen, setIsOpen] = useState < boolean > false;

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        open
      </button>

      <ShareModal
        view={isOpen}
        onCancel={() => setIsOpen(false)}
        theme="light"
        lang="ko"
      >
        // children
        <button type="type">
          <KakaoIcon />
          <span>Kakao</span>
        </button>
      </ShareModal>
    </>
  );
}
```

---

### Default Kind

- Facebook

* Twitter

* Telegram

* Line

* What's App

* Clipboard

---

### Props

| props        | type            | description                                     |
| ------------ | --------------- | ----------------------------------------------- |
| **view**     | bool            | Use isOpen state to open the modal              |
| **onCancel** | () => void      | Use this function to close the modal            |
| **theme**    | string          | default: 'light' / 'dark'                       |
| **lang**     | string          | default: 'en' / 'ko'                            |
| **children** | React.ReactNode | You can add a sharing function through chlidren |

---

### Size

| name     | size                    |
| -------- | ----------------------- |
| **icon** | 50px // max-width: 48px |
| **span** | 12px                    |
