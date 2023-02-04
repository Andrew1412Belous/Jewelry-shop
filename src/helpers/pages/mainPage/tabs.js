export const tabs = document.querySelectorAll('.catalog-tab')
export const tabsContent = document.querySelectorAll('.catalog-content')

export function hideTabContent () {
  tabsContent.forEach(item => {
    item.classList.remove('catalog-content-active');
  });

  tabs.forEach(item => {
    item.classList.remove('catalog-tab-active');
  });
}

export function showTabContent (index = 0) {
  tabs[index].classList.add('catalog-tab-active');

  tabsContent[index].classList.add('catalog-content-active');
}
