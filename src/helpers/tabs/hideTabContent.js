import { tabsContent } from './tabsContent'
import { tabs } from './tabs'

export function hideTabContent () {
  tabsContent.forEach(item => {
    item.classList.remove('catalog-content-active');
    // item.style.display = 'none';
  });

  tabs.forEach(item => {
    item.classList.remove('catalog-tab-active');
  });
}
