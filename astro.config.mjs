import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://turn.github.io",
  integrations: [
    starlight({
      title: "Piekļūstamības vadlīnijas",
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://my_plausible_domain/js/script.js",
            "data-domain": "vadlinijas.pieklustamiba.lv",
            defer: true,
          },
        },
      ],
      locales: {
        root: {
          label: "Latvian",
          lang: "lv-LV",
        },
      },
      social: {
        github: "https://github.com/turn-digital/vadlinijas.pieklustamiba",
      },
      sidebar: [
        {
          label: "Ievads",
          link: "/",
        },
        {
          label: "Timeklvietnu-novertejuma-metodologija",
          items: [
            {
              label: "Tīmekļvietņu novērtējuma metodoloģija",
              link: "/timeklvietnu-novertejuma-metodologija/timeklvietnu-novertejuma-metodologija",
            },
            {
              label: "Novērtējuma veikšanai nepieciešamie rīki",
              link: "/timeklvietnu-novertejuma-metodologija/novertejuma-veiksanai-nepieciesamie-riki",
            },
            {
              label: "Novērtējuma veikšanas kārtība",
              link: "/timeklvietnu-novertejuma-metodologija/novertejuma-veiksanas-kartiba",
            },
          ],
        },
        {
          label: "Timeklvietnu-novertejuma-instrukcija",
          items: [
            {
              label: "Tīmekļvietņu novērtējuma instrukcija",
              link: "/timeklvietnu-novertejuma-instrukcija/timeklvietnu-novertejuma-instrukcija",
            },
            {
              label: "Galvenā navigācija",
              link: "/timeklvietnu-novertejuma-instrukcija/galvena-navigacija",
            },
            {
              label: "Pamatstruktūras pārbaude",
              link: "/timeklvietnu-novertejuma-instrukcija/pamatstrukturas-parbaude",
            },
            {
              label: "Tastatūras piekļuve un vizuālais fokuss",
              link: "/timeklvietnu-novertejuma-instrukcija/tastaturas-piekluve-un-vizualais-fokuss",
            },
            {
              label: "Formu lauki un kļūdu paziņojumi",
              link: "/timeklvietnu-novertejuma-instrukcija/formu-lauki-un-kludu-pazinojumi",
            },
            {
              label: "Attēlu tekstuālā alternatīva",
              link: "/timeklvietnu-novertejuma-instrukcija/attelu-tekstuala-alternativa",
            },
            {
              label: "Virsraksti",
              link: "/timeklvietnu-novertejuma-instrukcija/virsraksti",
            },
            {
              label: "Krāsu kontrasti",
              link: "/timeklvietnu-novertejuma-instrukcija/krasu-kontrasti",
            },
            {
              label: "Teksta izmēra tālummaiņa",
              link: "/timeklvietnu-novertejuma-instrukcija/teksta-izmera-talummaina",
            },
            {
              label: "Lapu nosaukumi",
              link: "/timeklvietnu-novertejuma-instrukcija/lapu-nosaukumi",
            },
            {
              label: "Saturs, kas kustas, mirgo un zibsnī",
              link: "/timeklvietnu-novertejuma-instrukcija/saturs-kas-kustas-mirgo-un-zibsni",
            },
            {
              label: "Multimediju (audio, video) satura alternatīvas",
              link: "/timeklvietnu-novertejuma-instrukcija/multimediju-audio-video-satura-alternativas",
            },
          ],
        },
        {
          label: "Turpmākie soļi",
          link: "/turpmakie-soli",
        },
        {
          label: "Papildu resursi",
          link: "/papildu-resursi",
        },
        {
          label: "Pielikums",
          link: "/pielikums",
        },
        {
          label: "Izmantoto terminu skaidrojums",
          link: "/izmantoto-terminu-skaidrojums",
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
