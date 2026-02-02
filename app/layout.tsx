import "./globals.css";

export const metadata = {
  title: "Link.Hub",
  description: "All your links in one hub"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
