import {
  toggleDisplayMain,
  updateMainContent,
} from '../../helpers'

import { headerElems } from '../../configs'
import { authForm } from '../../components'

export function signInCallback () {
  toggleDisplayMain(true)
  updateMainContent(headerElems.main, authForm)
}
