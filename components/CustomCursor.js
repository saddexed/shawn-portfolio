'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatedCursor
      key={pathname}
      innerSize={8}
      outerSize={35}
      color="255, 255, 255"
      outerAlpha={1}
      innerScale={1}
      outerScale={1.3}
      clickables={[
        'a',
        'input:not([type="hidden"])',
        'textarea',
        'select',
        'summary',
        'label',
        'button',
        '[tabindex]',
        '[role="button"]',
        '.link',
        '.link-button',
        '.cursor-pointer'
      ]}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: '#1a1a1a'
      }}
      outerStyle={{
        mixBlendMode: 'difference',
        backgroundColor: '#fff'
      }}
    />
  );
}
