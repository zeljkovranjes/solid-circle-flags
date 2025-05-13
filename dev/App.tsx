import type { Component } from 'solid-js'
import styles from './App.module.css'
import { CircularFlag, CircularFlagLanguage } from 'src'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <CircularFlag countryCode="bq" width={100} height={100} />
      <CircularFlag
        countryCode="as"
        width={100}
        height={100}
        cdn="https://hatscripts.github.io/circle-flags/flags/"
      />
      <CircularFlag countryCode="es-ar" width={100} height={100} />
      <CircularFlagLanguage languageCode="an" width={100} height={100} />
    </div>
  )
}

export default App
