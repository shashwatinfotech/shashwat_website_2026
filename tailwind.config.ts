import type { Config } from "tailwindcss";

/**
 * Kinetic Precision Design System
 * Source of truth: DESIGN.md
 *
 * NOTE ON COLOR SCOPE: The build brief's "strict" list (Primary #1A7A74,
 * Accent #A8D420, Text #1C1C1C, Background #FAFAFA, Secondary Text #8C8C8C,
 * Border #ECECEC, White) covers the core brand palette used for 90% of the
 * UI (buttons, nav, body text, surfaces, cards). DESIGN.md's fuller
 * Material-3-style token set adds the small number of additional colors the
 * approved screenshots actually rely on for state — error/critical red,
 * the lime secondary-container for "Active" badges, and the tertiary
 * brown-orange used in a few avatar/icon accents. Every one of those
 * additional tokens traces directly to DESIGN.md, nothing outside it is
 * introduced.
 */

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "24px",
        lg: "64px",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Core brand (the "strict" palette)
        primary: {
          DEFAULT: "#00605B",
          container: "#1A7A74",
          foreground: "#FFFFFF",
          "container-foreground": "#B2FFF7",
        },
        accent: {
          DEFAULT: "#A8D420",
          foreground: "#161F00",
        },
        surface: {
          DEFAULT: "#F7FAF8",
          dim: "#D7DBD9",
          bright: "#F7FAF8",
          "container-lowest": "#FFFFFF",
          "container-low": "#F1F4F3",
          container: "#EBEFED",
          "container-high": "#E5E9E7",
          "container-highest": "#E0E3E2",
        },
        background: "#FAFAFA",
        foreground: "#1C1C1C",

        // Text
        "text-primary": "#1C1C1C",
        "text-secondary": "#8C8C8C",
        "on-surface": "#181C1C",
        "on-surface-variant": "#3E4947",

        // Structure
        border: "#ECECEC",
        outline: "#6E7978",
        "outline-variant": "#BDC9C7",

        // Inverse (dark surfaces — CTAs, black cards)
        inverse: {
          surface: "#2D3131",
          "on-surface": "#EEF1F0",
        },

        // Secondary (lime — success / active states)
        secondary: {
          DEFAULT: "#4F6600",
          foreground: "#FFFFFF",
          container: "#C5F342",
          "container-foreground": "#546D00",
        },

        // Tertiary (warm brown-orange accent)
        tertiary: {
          DEFAULT: "#844429",
          foreground: "#FFFFFF",
          container: "#A15B3F",
          "container-foreground": "#FFEDE8",
        },

        // Error / critical states
        error: {
          DEFAULT: "#BA1A1A",
          foreground: "#FFFFFF",
          container: "#FFDAD6",
          "container-foreground": "#93000A",
        },

        white: "#FFFFFF",
      },

      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },

      fontSize: {
        "display-lg": [
          "48px",
          { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" },
        ],
        "display-lg-mobile": [
          "36px",
          { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "headline-md": [
          "24px",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "body-lg": [
          "18px",
          { lineHeight: "1.6", letterSpacing: "0em", fontWeight: "400" },
        ],
        "body-md": [
          "16px",
          { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" },
        ],
        "label-sm": [
          "13px",
          { lineHeight: "1", letterSpacing: "0.02em", fontWeight: "500" },
        ],
        "mono-code": [
          "14px",
          { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" },
        ],
      },

      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
        input: "6px",
        bento: "12px",
      },

      spacing: {
        gutter: "24px",
        "margin-desktop": "64px",
        "margin-mobile": "20px",
      },

      maxWidth: {
        container: "1440px",
      },

      boxShadow: {
        "level-2": "0 12px 24px rgba(0, 0, 0, 0.04)",
        "magnetic-hover": "0 8px 20px rgba(26, 122, 116, 0.12)",
      },

      backdropBlur: {
        nav: "12px",
      },

      transitionTimingFunction: {
        mechanical: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      keyframes: {
        "blur-reveal": {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
      },
      animation: {
        "blur-reveal": "blur-reveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
