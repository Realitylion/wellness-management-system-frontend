module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
      screens: {
        lg: { max: "1440px" },
        md: { max: "1050px" },
        sm: { max: "550px" },
      },
      colors: {
        black: "var(--black)",
        color_black: {
          900: "var(--color_black_900)",
          "900_01": "var(--color_black_900_01)",
          "900_3f": "var(--color_black_900_3f)",
        },
        blue_gray: {
          300: "var(--blue_gray_300)",
          700: "var(--blue_gray_700)",
          900: "var(--blue_gray_900)",
          "900_01": "var(--blue_gray_900_01)",
        },
        coolgray: {
          10: "var(--coolgray_10)",
          20: "var(--coolgray_20)",
          30: "var(--coolgray_30)",
          60: "var(--coolgray_60)",
          90: "var(--coolgray_90)",
        },
        default: {
          success: "var(--default_success)",
          white: "var(--default_white)",
        },
        gray: {
          50: "var(--gray_50)",
          100: "var(--gray_100)",
          300: "var(--gray_300)",
          700: "var(--gray_700)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "50_01": "var(--gray_50_01)",
          "900_01": "var(--gray_900_01)",
        },
        grey_background: "var(--grey_background)",
        grey_text: "var(--grey_text)",
        indigo: {
          100: "var(--indigo_100)",
        },
        light_blue: {
          a700: "var(--light_blue_a700)",
        },
        primary: {
          60: "var(--primary_60)",
          90: "var(--primary_90)",
        },
        purple_light: "var(--purple_light)",
        red: {
          700: "var(--red_700)",
        },
        white: {
          a700_99: "var(--white_a700_99)",
        },
        yellow: "var(--yellow)",
        black_600: "var(--black_600)",
        gray_shadow: "var(--gray_shadow)",
      },
      boxShadow: {
        xs: "0 4px 4px 0 #0000003f",
        sm: "0 13px 5px #00000029",
      },
      fontFamily: {
        fontFamily: {
            inter: "Inter",
            spacegrotesk: "Space Grotesk",
            roboto: "Roboto",
            abhayalibre: "Abhaya Libre",
            montserrat: "Montserrat",
        },
        backgroundImage: {
            gradient: "linear-gradient(180deg, #697077, #c3d0dd)",
        },
        plugins: [require("@tailwindcss/forms")],
      },
    },
};