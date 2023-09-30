import { Layout as AntdLayout } from 'antd';

import { BackToTop } from '../BackToTop';
import { Content } from '../Content';
import { Footer } from '../Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  console.log('Renderizou Layout');
  return (
    <>
      <AntdLayout className='min-h-screen'>
        <Content>{children}</Content>
        <BackToTop icon='fa-solid fa-arrow-up' />
        <Footer />
      </AntdLayout>
    </>
  );
};
