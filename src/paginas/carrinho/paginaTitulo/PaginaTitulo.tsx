import React from 'react';

const PaginaTitulo = ({ data }) => {
  return <div className='page-title'>{data || '{insira um titulo}'}</div>;
};

export default PaginaTitulo;