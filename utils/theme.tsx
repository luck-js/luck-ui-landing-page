export interface TextStyle {
  tag?: string;
  width?: string;
  fontSize?: number[];
  fontWeight?: number;
  fontFamily?: string;
  textDecoration?: string
}

export interface TextStyles {
  [key: string]: TextStyle;
}

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
  main: "#ffffff",
  mainContrast: "#d45858",
  black: "#212121",
  darkGray: "#4d4d4d",
  gray: "#bababa",
};

export const fontFamilies = {
  body: "'Lato', sans-serif",
};

export const textStyles:TextStyles = {
  logoHeading: {
    tag: "h1",
    width: "100%",
    fontSize: [27, 27, 46, 61],
    fontWeight: 300,
    fontFamily: fontFamilies.body
  },
  canon: {
    tag: "h1",
    width: "100%",
    fontSize: [20, 20, 42, 48],
    fontWeight: 700,
    fontFamily: fontFamilies.body
  },
  trafalgar: {
    tag: "h1",
    width: "100%",
    fontSize: [18, 18, 18, 21],
    fontWeight: 700,
    fontFamily: fontFamilies.body
  },
  bodyText: {
    tag: "p",
    width: "100%",
    fontSize: [16, 16, 18, 21],
    fontWeight: 400,
    fontFamily: fontFamilies.body
  },
  mediumText: {
    tag: "p",
    width: "100%",
    fontSize: [16, 16, 16, 18],
    fontWeight: 400,
    fontFamily: fontFamilies.body
  },
  smallText: {
    tag: "p",
    width: "100%",
    fontSize: [14, 14, 14, 14],
    fontWeight: 400,
    fontFamily: fontFamilies.body
  },
  tinySecond: {
    tag: "p",
    width: "100%",
    fontSize: [10, 10, 12, 14],
    fontWeight: 400,
    fontFamily: fontFamilies.body
  },
  tinyText: {
    tag: "p",
    width: "100%",
    fontSize: [10, 10, 10, 11],
    fontWeight: 400,
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
