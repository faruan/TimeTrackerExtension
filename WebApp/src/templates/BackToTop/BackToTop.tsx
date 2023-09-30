'use client';
import { FloatButton as AntdFloatButton } from 'antd';

type BackToTopProps = {
  icon: string;
};
export const BackToTop = ({ icon }: BackToTopProps) => {
  return (
    <>
      <AntdFloatButton.BackTop type='primary' icon={<i className={icon} />} />
    </>
  );
};
