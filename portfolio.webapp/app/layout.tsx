import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nauman Malik",
  description:
    "I develop AI-powered chatbots, voice assistants, and intelligent workflows that reduce manual effort and improve decision-making.",
  icons: {
    icon: "/prolens-assets/images/prolens-favicon.png",
    apple: "/prolens-assets/images/prolens-apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
