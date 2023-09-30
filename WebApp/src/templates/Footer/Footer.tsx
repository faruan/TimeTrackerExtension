'use client';

import Image from 'next/image';

import googleImage from '@/assets/Google.png';
import { Layout as AntdLayout } from 'antd';

export const Footer = () => {
  console.log('Renderizou Footer');
  return (
    <>
      <AntdLayout.Footer className='flex items-center justify-center'>
        <Image src={googleImage} alt='Logo' height={48} />
        <a href='https://google.com.br' target='_blank' rel='noreferrer'>
          Google
        </a>
      </AntdLayout.Footer>
    </>
  );
};
