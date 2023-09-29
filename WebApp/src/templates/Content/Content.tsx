'use client';

import { Layout as AntdLayout } from 'antd';

export const Content = ({ children }: { children: React.ReactNode }) => {
  console.log('Renderizou Content2');
  return (
    <>
      <AntdLayout.Content style={{ padding: '0 50px' }}>
        {children}
      </AntdLayout.Content>
    </>
  );
};
