# ClickUp HTML & CSS Engineer Mini-Project

- Follows [this mockup](https://www.figma.com/file/qNLG2DvzowucTvhyYoM6KB/HTML-and-CSS-Engineer-Mini-Project?node-id=0%3A1)
- Coded by [Jasmine Webb](https://www.jasminewebb.dev/)
- [Deployed on Netlify](https://jwebb-clickup-mini.netlify.app/)
- Pure HTML/CSS with BEM conventions
- Gulp + Sass (SCSS) + BrowserSync for development

## Dev Log

- I don't have licenses for Helvetica or Avenir, so I substituted them with Open Sans and Nunito, respectively.
- I experienced difficulty configuring Gulp to import Sass partial directories (e.g., `_abstracts`, `_base`) using Dart Sass syntax (`@forward` and `@use` instead of `@import`, which will be deprecated October 2021). In the interest of time, I elected to continue with just one main SCSS file and two partial files (for color variables and mixins). If this were a full-fledge project I would make sure to refactor and modularize the styles after the MVP was finished.
- No mobile mockup was provided, so I made the decision to do desktop-first design and work backward towards a reasonable responsive mobile/tablet layout.
  - In hindsight, this created a mess of media queries that should be avoided at all costs and refactored. And I'm not 100% happy with the aesthetics either.
- ~~I'm unsure of how to incorporate the "blobby" SVGs that sporadically decorate the background of each feature in the Features section, so they have been left out.~~ Figured out how to add them to the background, but still unsure of how to rotate/scale each blob while it's a background element, aside from just having separate SVGs for each feature.
- I added a bit of inline JavaScript just to give the Testimonials carousel some functionality for the demo. It breaks for screens smaller than 900px in width (once the width of the cards change).
