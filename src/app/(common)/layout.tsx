import Footer from "@/components/shared/Footer/Footer";


import ScrollToTopButton from "@/components/ui/ScrollToTopButton/ScrollToTopButton";
import { NextUiProvider } from "@/lib/providers/NextUIProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import type { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "THE TRADING HUB",
  description: "Best trading company in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NextUiProvider>
        <ReduxProvider>
          <>
            <div className="min-h-screen scroll-smooth grid grid-rows-[auto_1fr_auto] max-w-[100vw] overflow-hidden">
              {/* <Navbar /> */}
              <div className="!min-h-screen">{children}
 <Footer />
              </div>

             
            </div>
            <ScrollToTopButton />
            <Toaster />
          </>
        </ReduxProvider>
      </NextUiProvider>
    </div>
  );
}
