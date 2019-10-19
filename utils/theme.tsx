export const breakpoints = ["490px", "1040px", "1920px", "3824px"];

export const space: any = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 144, 172, 330];

space.none = space[0];
space.xxsmall = space[1];
space.xsmall = space[2];
space.small = space[3];
space.medium = space[4];
space.regular = space[5];
space.xregular = space[6];
space.large = space[7];
space.xlarge = space[8];
space.xxlarge = space[9];
space.huge = space[10];
space.xhuge = space[11];
space.xxhuge = space[12];
space.auto = "auto";

export const colors = {
  main: "#f9f9f9",
  mainContrast: "#D45858",
  black: "#212121",
};

export const fontFamilies = {
  body: "'Lato', sans-serif",
};

export const textStyles = {
  logoHeading: {
    tag: "h1",
    fontSize: [24, 38, 60, 90],
    fontWeight: 300,
    fontFamily: fontFamilies.body
  },
  canon: {
    tag: "h1",
    fontSize: [23, 30, 37, 45],
    fontWeight: 300,
    fontFamily: fontFamilies.body
  },
  trafalgar: {
    tag: "h1",
    fontSize: [18, 18, 18, 21],
    fontWeight: 500,
    fontFamily: fontFamilies.body
  },
  bodyText: {
    tag: "p",
    fontSize: [16, 16, 18, 21],
    fontWeight: 300,
    fontFamily: fontFamilies.body
  },
  smallText: {
    tag: "p",
    fontSize: [14, 14, 14, 14],
    fontWeight: 300,
    fontFamily: fontFamilies.body
  },
  tinyText: {
    tag: "p",
    fontSize: [10, 10, 10, 11],
    fontWeight: 300,
    fontFamily: fontFamilies.body
  },
  underline: {
    textDecoration: "underline"
  }
}

export const Theme = {
  space,
  colors,
  breakpoints,
  textStyles,
  fontFamilies
};
