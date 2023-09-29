'use client';

import Image from 'next/image';

import csImage from '@/assets/cs.png';
import { Layout as AntdLayout } from 'antd';

export const Footer = () => {
  console.log('Renderizou Footer');
  return (
    <>
      <AntdLayout.Footer style={{ textAlign: 'center' }}>
        <Image src={csImage} alt='Logo' height={48} />
        <a href='https://google.com.br' target='_blank' rel='noreferrer'>
          Google
        </a>
      </AntdLayout.Footer>
    </>
  );
};
