import { Inter, JetBrains_Mono } from "next/font/google";

/**
 * Inter — primary typeface for all UI, headings, and body copy.
 * Loaded with the weight range the type scale in DESIGN.md requires
 * (400 body, 500 labels, 600 headline, 700 display).
 */
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * JetBrains Mono — reserved for technical identifiers and data values
 * (mono-code type token): reference numbers, invoice IDs, ticket IDs, etc.
 */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
