import type { TypeDefinition } from "../lib/define.ts";
import { artPair } from "./objects/artPair.ts";
import { blockContent } from "./objects/blockContent.ts";
import { sectionTypes } from "./objects/sections.ts";
import { globalSettings } from "./documents/globalSettings.ts";
import { navigation } from "./documents/navigation.ts";
import {
  blogPost,
  campaignStory,
  craftPage,
  homepage,
  productOverlay,
} from "./documents/pages.ts";

/**
 * The complete schema.
 *
 * Drop this array into a Studio's `schema.types` and the content model is live.
 * Nothing here imports the `sanity` package — see ../lib/define.ts for why.
 */

export const documentTypes: TypeDefinition[] = [
  // Singletons first — they are the ones an editor touches most.
  globalSettings,
  navigation,
  homepage,
  // Then the repeatable content.
  campaignStory,
  craftPage,
  blogPost,
  productOverlay,
];

export const objectTypes: TypeDefinition[] = [artPair, blockContent, ...sectionTypes];

export const schemaTypes: TypeDefinition[] = [...documentTypes, ...objectTypes];

/** Documents there must only ever be one of, for the Studio's structure config. */
export const singletonTypes: string[] = documentTypes
  .filter((type) => type.__singleton)
  .map((type) => type.name);

export { artPair, blockContent, globalSettings, navigation };
export { blogPost, campaignStory, craftPage, homepage, productOverlay };
export { sectionTypes };
