'use client';

import { useEffect, useState } from 'react';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

import antdTheme from '@/themes/AntdTheme';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/locale/pt_BR';

import AntdProvider from './AntdProvider';

const AntdConfigProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ConfigProvider theme={antdTheme} locale={ptBR}>
        <AntdProvider>{children}</AntdProvider>
      </ConfigProvider>
    </>
  );
};

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // use your loading page
    return <div className='hidden'>{children}</div>;
  }

  return (
    <NextThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <AntdConfigProvider>{children}</AntdConfigProvider>
    </NextThemeProvider>
  );
};
