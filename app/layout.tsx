import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import localFont from "next/font/local";
import Link from "next/link";
import { Button } from "@nextui-org/button";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { CallIcon, Logo, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

const clashDisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className={clashDisplay.className} lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen  overflow-x-hidden">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* <!--Grid--> */}
                <div className="grid grid-cols-12 gap-8 py-14 lg:grid-cols-10">
                  <div className="mb-0 col-span-full lg:col-span-3 ">
                    <a
                      className="flex justify-center lg:justify-start"
                      href="https://uifry.com/"
                    >
                      <Logo />
                    </a>
                    <div className="lg:max-w-xs flex flex-row gap-2 lg:justify-start justify-center items-center pt-4">
                      <MailIcon />
                      <p className="text-center lg:text-left">
                        help@frybix.com
                      </p>
                    </div>
                    <div className="lg:max-w-xs flex flex-row gap-2 lg:justify-start justify-center items-center pt-4">
                      <CallIcon />
                      <p className="text-center lg:text-left">
                        +1 234 456 678 89
                      </p>
                    </div>
                  </div>
                  {/* <!--End Col--> */}
                  <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:col-span-4 md:col-span-4 lg:col-span-2 ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">
                      Links
                    </h4>
                    <ul className="text-gray-600  transition-all duration-500">
                      <li className="mb-6">Home</li>
                      <li className="mb-6">About As</li>
                      <li className="mb-6">Bookings</li>
                      <li>Blogs</li>
                    </ul>
                  </div>
                  {/* <!--End Col--> */}
                  <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:col-span-4 md:col-span-4 lg:col-span-2 ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">
                      Legal
                    </h4>
                    <ul className="text-gray-600  transition-all duration-500">
                      <li className="mb-6">Terms Of Use</li>
                      <li className="mb-6">Privacy Policy</li>
                      <li>Cookie Policy</li>
                    </ul>
                  </div>
                  {/* <!--End Col--> */}
                  <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:order-last sm:col-span-4 md:col-span-4 lg:order-none lg:col-span-1">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">
                      Products
                    </h4>
                    <ul className="text-gray-600 transition-all duration-500  ">
                      <li className="mb-6">
                        <Link
                          className="text-gray-600 hover:text-gray-900"
                          href="javascript:;"
                        >
                          Take Tour
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          className=" text-gray-600 hover:text-gray-900"
                          href="javascript:;"
                        >
                          Live Chat
                        </Link>
                      </li>
                      <li className="sm:mb-6">
                        <Link
                          className=" text-gray-600 hover:text-gray-900"
                          href="javascript:;"
                        >
                          Reviews
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!--End Col--> */}
                  <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:col-span-4 md:col-span-4 lg:col-span-2 ">
                    <h4 className="text-lg text-center text-gray-900 font-medium mb-7 lg:text-left">
                      Newsletter
                    </h4>
                    <div className="flex flex-col items-center lg:items-start">
                      <input
                        className="w-full h-12 border border-gray-300 rounded-[4px] py-2.5 px-5 shadow-sm text-gray-800 mb-5 text-center lg:text-left placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
                        placeholder="Your email here.."
                        type="text"
                      />
                      <Button
                        as={Link}
                        className="text-lg font-normal text-white bg-black px-6 rounded-[4px]"
                        href="https://uifry.com/"
                        variant="flat"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
                {/* <!--Grid--> */}
                <div className="py-7 border-t border-gray-200">
                  <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span className="text-sm text-gray-500 ">
                      ©<a href="https://uifry.com/">uifry</a> 2024, All rights
                      reserved.
                    </span>
                    <ul className="flex items-center gap-9 mt-4 lg:mt-0">
                      <li>
                        <Link
                          className="text-sm text-gray-500"
                          href="javascript:;"
                        >
                          Terms
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-500"
                          href="javascript:;"
                        >
                          Privacy
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-500"
                          href="javascript:;"
                        >
                          Cookies
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
