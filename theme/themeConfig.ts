// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';
// https://ant.design/theme-editor
const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: 'black',
    colorText: 'white'
  },
  "components": {
    "Table": {
      "colorBgContainer": "#121418",
      // "colorText": "white",
      // "colorTextHeading": "white"
    },
    "Pagination": {
      "colorTextPlaceholder": "black",
    }
  }
};

export default theme;
