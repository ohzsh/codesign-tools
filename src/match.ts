import { Icon, Svg } from './interface'

const base_css = <String>(prefixIcon: string, size: string) => {
  return `
.${prefixIcon} {
    display: inline-block;
    width: ${size}; 
    height: ${size};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
}
\n
`
}
const generateStyleClass = <String>(name: string, svg: string) => {
  return `
.${name} {
    background: url(${svg});
}
`
}

export class Match {
  content: string
  prefixIcon: string
  icons: Icon[]
  svgs: Svg[]
  css: string

  constructor(prefixIcon: string = 'h-icon', size: string = '16px') {
    this.content = ''
    this.icons = []
    this.svgs = []
    this.prefixIcon = prefixIcon
    this.css = base_css(prefixIcon, size)
  }
  matchesContent(data: string): Match {
    const reg: RegExp = /(\<svg(.|\s)*?\<\/svg\>)/gim
    const content = data.match(reg) || []
    this.content = content.toString()
    return this
  }
  matchesIcon(): Match {
    const { content, prefixIcon } = this
    const reg: RegExp = /(\<symbol(.|\s)*?\<\/symbol\>)/gim
    const icons: string[] = content.match(reg) || []
    this.icons = icons.map(s => {
      s = s.replace('icon-', `${prefixIcon}-`)
      const ids: string[] | null = s.match(/id\=\"(.*?)\"/)
      const name = (ids && ids[1]) || ''
      const icon = s.replace(/symbol/gi, 'svg')
      return { name, icon }
    })
    return this
  }
  generateCss() {
    this.svgs.forEach(({ name, svg }) => {
      this.css += generateStyleClass(name, svg)
    })
    return this
  }
  setContent(content: string): Match {
    this.matchesContent(content)
    return this
  }
  svg2DataUrl(svgStr: string): string {
    svgStr = svgStr
      .replace('xmlns="http://www.w3.org/2000/svg"', '')
      .replace(
        /\<svg/,
        '<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width=\'100%\' height=\'100%\'',
      )
    const encoded: string = encodeURIComponent(svgStr)
      .replace(/'/g, '%27')
      .replace(/"/g, '%22')
    return `"data:image/svg+xml,${encoded}"`
  }
  generateSvg(): Match {
    const { svg2DataUrl, icons } = this
    this.svgs = icons.map(({ name, icon }) => ({ name, svg: svg2DataUrl(icon) }))
    return this
  }
}
