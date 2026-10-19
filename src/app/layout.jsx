import "./globals.css";
import { Roboto, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider";
import { getHeader, getFooter } from "@/lib/api/layout";
import SidebarWidget from "@/components/layout/common/sidebar-widget";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dayananda Sagar University",
  description: "Dayananda Sagar University description.",
};

export default async function RootLayout({ children }) {
  const [header, footer] = await Promise.all([getHeader(), getFooter()]);

  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <Header data={header ?? undefined} />
            <main className="flex-1">{children}</main>
            <Footer data={footer ?? undefined} />
            <SidebarWidget />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
