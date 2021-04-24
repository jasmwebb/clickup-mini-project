# ClickUp HTML & CSS Engineer Mini-Project

- Follows [this mockup](https://www.figma.com/file/qNLG2DvzowucTvhyYoM6KB/HTML-and-CSS-Engineer-Mini-Project?node-id=0%3A1)
- Coded by [Jasmine Webb](https://www.jasminewebb.dev/)
- Pure HTML/CSS with BEM conventions
- SCSS + Gulp

## Issue Log

- Experienced difficulty configuring Gulp to import Dart Sass partial directories (e.g., `_abstracts`, `_base`). Elected to continue with just one main SCSS file and two partial files (for color variables and mixins) in the interest of time.
- No mobile mockup was provided, so made the decision to do desktop-first design and work backward towards a reasonable responsive mobile/tablet layout.
- ~~Unsure of how to incorporate "blobby" SVGs that sporadically decorate the background of each feature in the Features section, so they have been left out.~~ Figured out how to add them to the background, but still unsure of how to rotate/scale each blob while it's a background element, aside from just having separate SVGs for each feature.