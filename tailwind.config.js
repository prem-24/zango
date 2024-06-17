/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        myPrimary: '#121416',
        mySecondary: '#6BDDB9',
        tab: '#2CBE90',
        myBtn: '#473FEA',
        secBtBg: '#1C1E22',
        tabbtn: '#0F1012',
      },
      backgroundImage: {
        'myGradient': 'linear-gradient(to right, #b584c9, #d17fbc, #e77ca9, #f57d93, #fb837c)',
      },
      width: {
        '4/5': '95%',
        '2/5': '50%',
        '3/5': '65%',
        'customVid': '85%',
        '98': '90rem',
      },
      height: {
        '4/5': '85%',
        '7h': '7.5%',
      },
      borderRadius: {
        'custom': '30px',
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = Object.values(theme("colors")).reduce((acc, colors) => {
    Object.entries(colors).forEach(([key, value]) => {
      acc[key] = value;
    });
    return acc;
  }, {});

  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
