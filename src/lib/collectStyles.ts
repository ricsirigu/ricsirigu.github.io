import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

export function collectStyles<TProps extends object>(
  Component: React.ComponentType<TProps>,
  props: TProps,
): string {
  const sheet = new ServerStyleSheet();

  try {
    renderToString(sheet.collectStyles(React.createElement(Component, props)));
    return sheet.getStyleTags();
  } finally {
    sheet.seal();
  }
}
