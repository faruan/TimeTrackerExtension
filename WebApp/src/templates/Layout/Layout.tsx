import { Layout as AntdLayout } from 'antd';

import { Content } from '../Content';
import { Footer } from '../Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  console.log('Renderizou Layout');
  return (
    <>
      <AntdLayout
        // className='bg-gray-800 m-2 min-h-screen'
        style={{ minHeight: '100vh' }}
      >
        <Content>{children}</Content>
        <Footer />
      </AntdLayout>
    </>
  );
};
