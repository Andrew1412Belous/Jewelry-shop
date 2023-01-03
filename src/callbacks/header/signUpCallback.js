import {
  toggleDisplayMain,
  updateMainContent,
} from '../../helpers'

import { headerElems } from '../../configs'
import { regForm } from '../../components'

export function signUpCallback () {
  toggleDisplayMain(true)
  updateMainContent(headerElems.main, regForm)
}
