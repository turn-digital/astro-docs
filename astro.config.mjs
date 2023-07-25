import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // site: 'https://turn.github.io',
  // base: '/astro-docs',
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Home page",
          link: "/",
        },
        {
          label: "Hello World",
          link: "/hello-world",
        },
        {
          label: "Nested pages",
          items: [
            { label: "Inner page 1", link: "/inner-page/inner-page-1" },
            { label: "Inner page 2", link: "/inner-page/inner-page-2" },
            { label: "Inner page 3", link: "/inner-page/inner-page-3" },
          ],
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
