import type { Component } from 'solid-js'
import styles from './App.module.css'
import { CircleFlag, CircleFlagLanguage } from 'src'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <CircleFlag countryCode="af-emirate" width={100} height={100} />
      <CircleFlag countryCode="xx" width={100} height={100} />

      <CircleFlag
        countryCode="as"
        width={100}
        height={100}
        cdn="https://hatscripts.github.io/circle-flags/flags/"
      />
      <CircleFlag countryCode="es-ar" width={100} height={100} />
      <CircleFlagLanguage languageCode="an" width={100} height={100} />
    </div>
  )
}

export default App
