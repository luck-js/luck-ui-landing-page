export const breakpoints: any = ["490px", "640px", "1040px", "1920px"];
breakpoints.small = breakpoints[0];
breakpoints.medium = breakpoints[1];
breakpoints.large = breakpoints[2];

export const colours = {
  main: "#2d2d2d",
  mainContrast: "#ffffff",
  primary: "#f9c43c",
};

export const fontFamilies = {
  body: "'Lato', sans-serif",
};

export const textStyles = {
  logoHeading: {
    tag: "p",
    fontSize: [34, 50, 70, 80],
    fontWeight: 300,
    fontFamily: fontFamilies.body
  },
  underline: {
    textDecoration: "underline"
  }
}
