import React from 'react';

import Lottie from 'react-lottie';

function Animation({ loop, autoplay, size, data }) {
  const animationSetting = {
    loop: !!loop,
    autoplay: !!autoplay,
    animationData: data.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={animationSetting} height={size} width={size} />;
}

export default Animation;
