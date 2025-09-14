# 스탯 메이커

![프로젝트 배너 이미지](https://stats-maker.surge.sh/img/meta-img.jpg)

## 개요

[사이트 바로가기](https://stats-maker.surge.sh/)
>제작기간: 1주

tailwind와 chart.js를 연습하기 위한 개인 프로젝트입니다.

## 주요 기능

- 작성한 폼을 토대로 그래프를 생성하고, png 다운로드 기능을 지원합니다.
- 모바일 퍼스트 디자인

## 설치된 패키지

- Next.js(ts) (ver:15.5.2)
- tailwindcss (ver:4)
- react-chartjs-2
- file-saver
- remixicon/react

## 파일구조

```
📦src
 ┣ 📂app
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂button
 ┃ ┃ ┣ 📜BlockButton.tsx
 ┃ ┃ ┣ 📜iconButton.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂form
 ┃ ┃ ┣ 📜ColorInput.tsx
 ┃ ┃ ┣ 📜CounterInput.tsx
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┣ 📜InputBox.tsx
 ┃ ┃ ┣ 📜RangeInput.tsx
 ┃ ┃ ┗ 📜StatBox.tsx
 ┃ ┣ 📂graph
 ┃ ┃ ┗ 📜Graph.tsx
 ┃ ┣ 📜common.tsx
 ┃ ┣ 📜Footer.tsx
 ┃ ┣ 📜Switch.tsx
 ┃ ┗ 📜typhography.tsx
 ┣ 📂configs
 ┃ ┣ 📜initial.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂hook
 ┃ ┣ 📜useDownload.ts
 ┃ ┣ 📜useInput.ts
 ┃ ┗ 📜useStatMaker.ts
 ┣ 📂styles
 ┃ ┣ 📜font.css
 ┃ ┗ 📜global.css
 ┗ 📂util
 ┃ ┗ 📜colorFn.ts
```

## 문의

버그,기능 개선,코드 리뷰 등은 Issues에 부탁드립니다.

급한 문의는 [카카오톡](https://open.kakao.com/o/sxEs8kCd)으로 문의해주세요!
