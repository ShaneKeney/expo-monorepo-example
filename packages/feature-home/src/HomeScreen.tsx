import { Paragraph, Strong } from '@acme/ui';
import React, { ComponentProps } from 'react';

type HomeScreenProps = ComponentProps<typeof Paragraph>;

export const HomeScreen = (props: HomeScreenProps) => (
  <Paragraph {...props}>
    Hello a from an <Strong>Expo monorepo</Strong>!
  </Paragraph>
);
