'use client';

import antdTheme from '@/themes/AntdTheme';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/locale/pt_BR';

import AntdStyledComponentsRegistry from './AntdRegistry';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AntdStyledComponentsRegistry>
        <ConfigProvider theme={antdTheme} locale={ptBR}>
          {children}
        </ConfigProvider>
      </AntdStyledComponentsRegistry>
    </>
  );
};
