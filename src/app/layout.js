import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Instagram-clone",
  description: "This is the instagram clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
