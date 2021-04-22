import { FixedObject, FluidObject } from 'gatsby-plugin-image';

export type ImageSharpFluid = FluidObject | FluidObject[] | undefined;

export type ImageSharpFixed = FixedObject | FixedObject[] | undefined;

export type ObjectType = Record<string, any>;

export interface SectionTitle {
  title: string;
  subtitle: string;
}
