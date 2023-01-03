import { defaultProfileAvatar } from '../../assets'

export function changeProfileIcon (url = defaultProfileAvatar) {
  Object.assign(document.getElementsByClassName('header-profile-logo')[0], {
    style: `
      border-radius: ${url === defaultProfileAvatar ? '' : '100%'};
    `,
    src: url,
  })
}
