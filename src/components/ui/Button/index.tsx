import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  primary,
  block,
  children,
  href,
  name
}) =>
  href ? (
    <Styled.ButtonLink href={href} aria-label={name} $primary={primary} $block={block}>
      {children}
    </Styled.ButtonLink>
  ) : (
    <Styled.Button type="button" aria-label={name} $primary={primary} $block={block}>
      {children}
    </Styled.Button>
  );

export default Button;
