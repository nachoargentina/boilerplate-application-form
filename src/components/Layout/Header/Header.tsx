import React from 'react';
import { Padding, Text } from '@/ui';
import { HeaderProps } from './types';

const Header = React.memo(
  ({ title, description }: HeaderProps): JSX.Element => {
    return (
      <Padding bottom={32}>
        <Text color="#000000" marginBottom={8} size="large" weight={600}>
          {title}
        </Text>
        {description && <Text color="#546A83">{description}</Text>}
      </Padding>
    );
  },
);

export default Header;
