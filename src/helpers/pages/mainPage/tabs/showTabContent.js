import { tabs } from './tabs'
import { tabsContent } from './tabsContent'

export function showTabContent (index = 0) {
  tabs[index].classList.add('catalog-tab-active');

  tabsContent[index].classList.add('catalog-content-active');
}
