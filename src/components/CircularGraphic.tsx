import { JSX } from 'solid-js/jsx-runtime'
import { FallbackSvg } from './FallbackSvg'
import { createSignal } from 'solid-js'

const DEFAULT_CDN_URLS = {
  country: 'https://circle-flags.zeljko.me/flags/',
  language: 'https://circle-flags.zeljko.me/flags/language/',
}

const ENV_CDN_URL = import.meta.env.VITE_PUBLIC_CIRCLE_FLAGS_CDN_URL?.trim() || ''

type GraphicType = 'country' | 'language'

interface CircularGraphicProps {
  code: string
  type: GraphicType
  width: number
  height: number
  cdn?: string
  label?: string
}

export function CircularGraphic(props: CircularGraphicProps): JSX.Element {
  const [imgError, setImgError] = createSignal(false)
  const getCdnUrl = () => {
    const rawCdn = props.cdn?.trim() || ENV_CDN_URL || DEFAULT_CDN_URLS[props.type]
    return rawCdn.replace(/\/+$/, '') + '/'
  }
  const getCleanCode = () => {
    return props.code.replace(/^\/+/, '')
  }
  const getSourceUrl = () => {
    return `${getCdnUrl()}${getCleanCode()}.svg`
  }
  const getAriaLabel = () => {
    return props.label || `${props.type} ${getCleanCode()} flag`
  }
  const handleError = () => {
    setImgError(true)
  }
  return (
    <>
      {!imgError() ? (
        <img
          src={getSourceUrl()}
          width={props.width}
          height={props.height}
          alt={getAriaLabel()}
          onError={handleError}
        />
      ) : (
        <FallbackSvg width={props.width} height={props.height} />
      )}
    </>
  )
}
