import { tabsContent } from './tabsContent'
import { tabs } from './tabs'

export function hideTabContent () {
  tabsContent.forEach(item => {
    item.classList.remove('catalog-content-active');
  });

  tabs.forEach(item => {
    item.classList.remove('catalog-tab-active');
  });
}
