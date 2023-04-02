import "./globals.css";

export const metadata = {
  title: "Instagram-clone",
  description: "This is the instagram clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
