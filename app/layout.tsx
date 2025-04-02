import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steamforce Medical",
  description: "Dissinkfect",
  generator: "v0.dev",
  icons: {
    icon: "./medicalicon.png", // Path to your favicon in the public folder
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
        <link rel="icon" href="./medicalicon.png" />

        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PQLV2VWV');</script>

      </head>
      <body>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PQLV2VWV"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {children}</body>
    </html>
  );
}
