import React from 'react';

import CarouselBlock from './CarouselBlock';
import MediaBlock from './MediaBlock';
import QuoteBlock from './QuoteBlock';
import TextBlock from './TextBlock';

const blocks = {
  CarouselBlock: CarouselBlock,
  MediaBlock: MediaBlock,
  QuoteBlock: QuoteBlock,
  TextBlock: TextBlock,
};

export default function Block(props) {
  const FBlock = blocks[props.type];

  if (!FBlock) {
    return null;
  }

  return <FBlock {...props} />;
}
