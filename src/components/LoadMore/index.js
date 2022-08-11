import React from 'react';
import Button from './../forms/button/button.component';

const LoadMore = ({
  onLoadMoreEvt = () => { },
}) => {
  return (
    <Button onClick={() => onLoadMoreEvt()}>
      Incarca mai multe
    </Button>
  );
};

export default LoadMore;