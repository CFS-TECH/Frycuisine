import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: '--font-cursive' });

export const metadata = {
  title: "FryCuisine | Explore Trending, Global & Healthy Food",
  description: "From viral food trends and world-famous dishes to healthy diets and easy recipes — everything about food in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${dancingScript.variable}`}>
        {children}
      </body>
    </html>
  );
}

