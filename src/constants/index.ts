import routeApis from './route-apis'
import routePages from './route-pages'

export interface ConstantsProps {
  routePages: typeof routePages
  routeApis: typeof routeApis
}

const constants: ConstantsProps = {
  routePages,
  routeApis,
}

export default constants
