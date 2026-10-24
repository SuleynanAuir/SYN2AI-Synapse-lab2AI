import type { Metadata, Viewport } from "next";
import "./globals.css";
import { OptimizedImage } from "@/components/optimized-image";
import imageManifest from "@/data/image-manifest.json";
import { ProjectJumpSidebar } from "@/components/project-jump-sidebar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl, withBasePath } from "@/lib/site-config";

const siteTitle = "AI Research Laboratory Portfolio";
const siteDescription =
  "A modern AI research portfolio for foundation models, autonomous AI agents, knowledge intelligence, machine learning, and AI for science.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  metadataBase: new URL(`${siteUrl}/`),
  icons: {
    icon: [
      {
        url: withBasePath(imageManifest["/assets/web_page/logo.png"].favicon),
        type: "image/png",
      },
    ],
    shortcut: [withBasePath(imageManifest["/assets/web_page/logo.png"].favicon)],
    apple: [
      {
        url: withBasePath(imageManifest["/assets/web_page/logo.png"].apple),
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-backdrop" aria-hidden="true">
          <OptimizedImage
            src="/assets/web_bg_poster.jpg"
            alt=""
            className="site-background-image"
            sizes="100vw"
            fetchPriority="high"
          />
          <div className="site-background-scrim" />
        </div>
        <SiteHeader />
        <div className="site-page-shell">
          <main>{children}</main>
          <SiteFooter />
        </div>
        <ProjectJumpSidebar />
      </body>
    </html>
  );
}
