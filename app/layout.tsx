import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "SIVASAKTHI — Jr. DevOps Engineer",
  description:
    "DevOps engineer portfolio — CI/CD pipelines, infrastructure as code, container orchestration, and zero-downtime deployment systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
