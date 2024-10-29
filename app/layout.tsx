import '@/app/ui/global.css';
import React from "react";
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      {/*<body>{children}</body>*/}

      <body className={`${inter.className} antialiased `}>
      {children}</body>
      </html>
  );
}


// This layout is default for nextjs and will render first