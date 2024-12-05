// @ts-check
import i18n from "@astrolicious/i18n";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    i18n({
      defaultLocale: "en",
      locales: ["en", "nl"], // must include the default locale
    }),
  ],
});
