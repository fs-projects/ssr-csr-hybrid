module.exports = {
  presets: [
    ["@babel/preset-env", { targets: "defaults" }],
    [
      "@babel/preset-react",
      {
        development: process.env.BABEL_ENV === "development",
      },
    ],
  ],
};
