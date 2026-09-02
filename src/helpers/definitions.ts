export interface ImageSharpFluid {
  aspectRatio?: number;
  sizes?: string;
  src: string;
  srcSet?: string;
}

export interface ImageSharpFixed {
  height: number;
  src: string;
  srcSet?: string;
  width: number;
}

export type ObjectType = Record<string, any>;

export interface SectionTitle {
  title: string;
  subtitle: string;
}
