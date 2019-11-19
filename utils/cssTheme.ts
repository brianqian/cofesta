interface HexCodes {
  [index: number]: string;
}

interface ThemeT {
  [index: string]: any;
}

const darkColor = {
  backgroundColor: 'black',
  strokeColor: 'white',
};

const theme: ThemeT = {
  backgroundColor: 'white',
  strokeColor: 'black',
  // ORIGINAL VALUE bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  bs: '0 12px 24px 0 rgba(0, 0, 0, 1)',
  textFont: 'Source Sans Pro',
  accent: 'darkorange',
  changeOpacity: (color: string, opacity: number): string => {
    const opacityHexCodes: HexCodes = {
      0: '00',
      1: '03',
      2: '05',
      3: '08',
      4: '0A',
      5: '0D',
      10: '1A',
      20: '33',
      25: '40',
      30: '4D',
      40: '66',
      50: '80',
      60: '99',
      70: 'B3',
      75: 'BF',
      80: 'CC',
      90: 'E6',
      100: 'FF',
    };
    return color + opacityHexCodes[opacity];
  },
  tailwind: {
    green1: '#F0FFF4',
    green2: '#C6F6D5',
    green3: '#9AE6B4',
    green4: '#68D391',
    green5: '#48BB78',
    green6: '#38A169',
    green7: '#2F855A',
    green8: '#276749',
    green9: '#22543D',

    gray1: '#F7FAFC',
    gray2: '#EDF2F7',
    gray3: '#E2E8F0',
    gray4: '#CBD5E0',
    gray5: '#A0AEC0',
    gray6: '#718096',
    gray7: '#4A5568',
    gray8: '#2D3748',
    gray9: '#1A202C',

    teal1: '#E6FFFA',
    teal2: '#B2F5EA',
    teal3: '#81E6D9',
    teal4: '#4FD1C5',
    teal5: '#38B2AC',
    teal6: '#319795',
    teal7: '#2C7A7B',
    teal8: '#285E61',
    teal9: '#234E52',

    blue1: '#EBF8FF',
    blue2: '#BEE3F8',
    blue3: '#90CDF4',
    blue4: '#63B3ED',
    blue5: '#4299E1',
    blue6: '#3182CE',
    blue7: '#2B6CB0',
    blue8: '#2C5282',
    blue9: '#2A4365',

    indigo1: '#EBF4FF',
    indigo2: '#C3DAFE',
    indigo3: '#A3BFFA',
    indigo4: '#7F9CF5',
    indigo5: '#667EEA',
    indigo6: '#5A67D8',
    indigo7: '#4C51BF',
    indigo8: '#434190',
    indigo9: '#3C366B',

    purple1: '#FAF5FF',
    purple2: '#E9D8FD',
    purple3: '#D6BCFA',
    purple4: '#B794F4',
    purple5: '#9F7AEA',
    purple6: '#805AD5',
    purple7: '#6B46C1',
    purple8: '#553C9A',
    purple9: '#44337A',

    pink1: '#FFF5F7',
    pink2: '#FED7E2',
    pink3: '#FBB6CE',
    pink4: '#F687B3',
    pink5: '#ED64A6',
    pink6: '#D53F8C',
    pink7: '#B83280',
    pink8: '#97266D',
    pink9: '#702459',

    orange1: '#FFFAF0',
    orange2: '#FEEBC8',
    orange3: '#FBD38D',
    orange4: '#F6AD55',
    orange5: '#ED8936',
    orange6: '#DD6B20',
    orange7: '#C05621',
    orange8: '#9C4221',
    orange9: '#7B341E',

    yellow1: '#FFFFF0',
    yellow2: '#FEFCBF',
    yellow3: '#FAF089',
    yellow4: '#F6E05E',
    yellow5: '#ECC94B',
    yellow6: '#D69E2E',
    yellow7: '#B7791F',
    yellow8: '#975A16',
    yellow9: '#744210',
  },
};

export { theme, darkColor };
