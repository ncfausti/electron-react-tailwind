import React from 'react';
import IHeaderInfo from '../interfaces/IHeaderInfo';

export default function StickyHeader(props: IHeaderInfo) {
  const { bgColor, title }: { bgColor: string; title: string } = props;
  return (
    <h3
      className={`${bgColor} sticky p-6 text-lg leading-6
    rounded-t-4xl  font-light text-white`}
    >
      {title}
    </h3>
  );
}
