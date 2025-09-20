import type { Metadata } from "next";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "스탯 메이커",
  description: "나의 스탯을 자유롭게 만들어 보세요!",
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-icon-180x180.png",
    shortcut: "/icons/favicon-32x32.png",
  },
  openGraph: {
    title: "스탯 메이커",
    type: "website",
    description: "나의 스탯을 자유롭게 만들어 보세요!",
    url: "https://stats-maker.surge.sh/",
    siteName: "stat-maker",
    images: [
      {
        url: "https://stats-maker.surge.sh/img/meta-img.jpg",
        width: 1200,
        height: 628,
        alt: "사이트 썸네일 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "스탯 메이커",
    description: "나의 스탯을 자유롭게 만들어 보세요!",
    creator: "seraleedev",
    images: ["https://stats-maker.surge.sh/img/meta-img.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="hydrated" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className={`bg-gray-100`}>{children}</body>
    </html>
  );
}
