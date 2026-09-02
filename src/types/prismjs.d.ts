declare module 'prismjs' {
  interface Grammar {
    [key: string]: unknown;
  }

  const Prism: {
    highlight(code: string, grammar: Grammar, language: string): string;
    languages: Record<string, Grammar>;
  };

  export default Prism;
}

declare module 'prismjs/components/*';
