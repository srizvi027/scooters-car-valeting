import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata = {
  title: "Scooter's Car Valeting | Hethersett & Local Areas",
  description:
    "Professional car valeting in Hethersett and local areas. Interior, exterior and combo valets from Scooter's Car Valeting.",
  openGraph: {
    title: "Scooter's Car Valeting",
    description: "Your car. Our obsession. Professional car valeting with attention to every detail.",
    images: ["/logo.png"],
  },
};

export const viewport = {
  themeColor: "#000001",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        <noscript>
          <style>{`.loader{display:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
