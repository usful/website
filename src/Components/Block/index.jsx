import React from 'react';

import CarouselBlock from './CarouselBlock';
import ImageBlock from './ImageBlock';
import QuoteBlock from './QuoteBlock';
import TextBlock from './TextBlock';
import VideoBlock from './VideoBlock';

const blocks = {
  CarouselBlock: CarouselBlock,
  ImageBlock: ImageBlock,
  QuoteBlock: QuoteBlock,
  TextBlock: TextBlock,
  VideoBlock: VideoBlock
};

export default function Block(props) {
  const FBlock = blocks[props.type];

  return <FBlock {...props} />;
}
