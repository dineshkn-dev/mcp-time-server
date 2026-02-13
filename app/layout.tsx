import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time Aware MCP Server",
  description: "MCP server that makes ChatGPT time-aware across all conversations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
