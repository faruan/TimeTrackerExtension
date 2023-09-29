import type { ThemeConfig } from 'antd';

import colors from './colors';

const AntdTheme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: colors.primary,
    colorTextSecondary: colors.textSecondary,
    colorBgLayout: colors.mainBg,
  },
};

export default AntdTheme;
