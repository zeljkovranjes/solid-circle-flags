import { JSX } from 'solid-js/jsx-runtime'
import { Country, countryToCountryMap, MappableCountry } from './countries'
import { Language, languageToCountryMap, MappableLanguage } from './languages'
import { CircularGraphic } from './components/CircularGraphic'

interface CircularFlagProps {
  countryCode: Country
  width: number
  height: number
  cdn?: string
  label?: string
}

interface CircularFlagLanguageProps {
  languageCode: Language
  width: number
  height: number
  cdn?: string
  label?: string
}

export function CircularFlag(props: CircularFlagProps): JSX.Element {
  const { countryCode, width, height, cdn, label } = props
  const mappedCountryCode = countryToCountryMap[countryCode as MappableCountry]
  if (mappedCountryCode !== undefined) {
    return (
      <CircularGraphic
        code={mappedCountryCode}
        type="country"
        width={width}
        height={height}
        cdn={cdn}
        label={label}
      />
    )
  } else {
    return (
      <CircularGraphic
        code={countryCode}
        type="country"
        width={width}
        height={height}
        cdn={cdn}
        label={label}
      />
    )
  }
}

export function CircularFlagLanguage(props: CircularFlagLanguageProps): JSX.Element {
  const { languageCode, width, height, cdn, label } = props
  const mappedCountryCode = languageToCountryMap[languageCode as MappableLanguage]
  if (mappedCountryCode !== undefined) {
    return (
      <CircularFlag
        countryCode={mappedCountryCode}
        width={width}
        height={height}
        cdn={cdn}
        label={label}
      />
    )
  } else {
    return (
      <CircularGraphic
        code={languageCode}
        type="language"
        width={width}
        height={height}
        cdn={cdn}
        label={label}
      />
    )
  }
}
