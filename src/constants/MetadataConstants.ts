/**
 * Below are the metadata list that are used in the app to increase SEO performance.
 */

import { Metadata } from "next";
import { keywordConstants } from "./KeywordMetadataConstants";
import { authorsConstants } from "./AuthorMetadataConstants";
import { openGraphConstant } from "./OpenGraphMetadatConstants";

const metadataConstant: Metadata = {
  title: "Anugerah Coating Powder Blora",
  description: "Layanan coating terbaik dengan kualitas tinggi untuk melindungi dan mempercantik berbagai produk logam anda. Hubungi kami untuk informasi lebih lanjut dan penawaran spesial",
  keywords: keywordConstants,
  authors: authorsConstants,
  abstract: "Anugerah Coating Powder Blora",
  publisher: "Overlogic Universe",
  openGraph: openGraphConstant,
  metadataBase: new URL("https://anugerahpowdercoating.com"),
};

export { metadataConstant };