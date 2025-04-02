import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steamforce Medical",
  description:
    "Dissinkfect - The Solution. Our innovative self-disinfecting sink system eliminates bacteria using advanced heat technology, preventing the spread of infections.",
  generator: "v0.dev",
  icons: {
    icon: "/medicalicon.png", // Corrected path for favicon
  },
  openGraph: {
    title: "Steamforce Medical",
    description:
      "Dissinkfect - The Solution. Our innovative self-disinfecting sink system eliminates bacteria using advanced heat technology, preventing the spread of infections.",
    images: [
      {
        url: "./handfat.png", // Path to your desired image in the public folder
        width: 1200, // Recommended width for Open Graph
        height: 630, // Recommended height for Open Graph
        alt: "Steamforce Medical Preview Image",
      },
    ],
    url: "https://www.steamforcemedical.com", // Your website URL
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon (already handled by metadata, but you can keep this if you prefer manual control) */}
        <link rel="icon" href="/medicalicon.png" />

        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PQLV2VWV');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager Noscript Fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQLV2VWV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
