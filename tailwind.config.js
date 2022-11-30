/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        zoomInOut: "zoom 2s linear infinite",
        colorSkating: "colorSkating 2s linear infinite",
      },
      keyframes: {
        zoom: {
          "0%": {
            scale: "1",
          },
          "50%": {
            scale: "1.25",
          },
          "100%": {
            scale: "1",
          },
        },
        colorSkating: {
          "0%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 0%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "1%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 2%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "2%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 4%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "3%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 6%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "4%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 8%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "5%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 10%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "6%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 12%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "7%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 14%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "8%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 16%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "9%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 18%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "10%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 20%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "11%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 22%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "12%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 24%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "13%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 26%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "14%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 28%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "15%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 30%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "16%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 32%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "17%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 34%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "18%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 36%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "19%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 38%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "20%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 40%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "21%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 42%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "22%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 44%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "23%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 46%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "24%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 48%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "25%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 50%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "26%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 52%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "27%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 54%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "28%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 56%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "29%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 58%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "30%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 60%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "31%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 62%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "32%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 64%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "33%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 66%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "34%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 68%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "35%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 70%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "36%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 72%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "37%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 74%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "38%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 76%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "39%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 78%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "40%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 80%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "41%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 82%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "42%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 84%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "43%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 86%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "44%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 88%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "45%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 90%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "46%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 92%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "47%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 94%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "48%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 96%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "49%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 98%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "50%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 0%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },

          "51%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 2%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "52%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 4%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "53%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 6%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "54%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 8%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "55%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 10%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "56%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 12%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "57%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 14%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "58%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 16%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "59%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 18%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "60%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 20%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "61%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 22%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "62%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 24%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "63%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 26%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "64%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 28%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "65%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 30%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "66%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 32%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "67%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 34%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "68%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 36%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "69%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 38%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "70%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 40%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "71%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 42%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "72%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 44%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "73%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 46%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "74%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 48%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "75%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 50%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "76%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 52%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "77%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 54%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "78%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 56%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "79%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 58%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "80%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 60%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "81%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 62%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "82%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 64%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "83%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 66%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "84%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 68%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "85%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 70%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "86%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 72%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "87%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 74%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "88%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 76%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "89%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 78%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "90%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 80%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "91%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 82%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "92%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 84%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "93%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 86%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "94%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 88%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "95%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 90%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "96%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 92%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "97%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 94%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "98%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 96%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "99%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 98%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
          "100%": {
            background:
              "linear-gradient(90deg, rgba(90, 182, 219,1) 100%, rgba(219, 120, 160,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          },
        },
      },
    },
  },
  plugins: [],
  important: true,
};
