# solid-circle-flags

[![npm package](https://img.shields.io/npm/v/solid-circle-flags?style=flat-square)](https://www.npmjs.com/package/solid-circle-flags)
[![MIT License](https://img.shields.io/badge/License-MIT-red.svg?style=flat-square)](https://opensource.org/licenses/MIT)

SolidJS component with 300+ minimal circular SVG country flags.

## Quick start

Install it:

```bash
npm i solid-circle-flags
# or
yarn add solid-circle-flags
# or
pnpm add solid-circle-flags
```

Use it:

```tsx
import { CircleFlag, CircleFlagLanguage } from 'solid-circle-flags';

// Using default cdn
<CircleFlag countryCode="us" width={100} height={100}/>
<CircleFlagLanguage languageCode="an" width={100} height={100}/>

// With custom cdn
// You can also set the CDN via the 'VITE_PUBLIC_CIRCLE_FLAGS_CDN_URL' env.
// Do not set the cdn={} if you plan on using the env
<CircleFlag countryCode="es-ar" width={100} height={100} cdn="https://hatscripts.github.io/circle-flags/flags/"/>
<CircleFlagLanguage languageCode="an" width={100} height={100} cdn='some-language-cdn-url'/>
```
