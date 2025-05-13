# solid-circle-flags

[![npm package](https://img.shields.io/npm/v/posthog-js?style=flat-square)](https://www.npmjs.com/package/posthog-js)
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
import { CircularFlag, CircularFlagLanguage } from 'solid-circle-flags';

// Using default cdn
<CircularFlag countryCode="us" width={100} height={100}/>
<CircularFlagLanguage languageCode="an" width={100} height={100}/>

// With custom cdn
// You can also set the CDN via the 'VITE_PUBLIC_CIRCLE_FLAGS_CDN_URL' env.
// Do not set the cdn={} if you plan on using the env
<CircularFlag countryCode="es-ar" width={100} height={100} cdn="https://hatscripts.github.io/circle-flags/flags/"/>
<CircularFlagLanguage languageCode="an" width={100} height={100} cdn='some-language-cdn-url'/>
```
