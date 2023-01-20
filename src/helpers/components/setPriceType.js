export function setPriceType (price) {
  return Number(price)
    ? `${Number(price).toLocaleString('ru-RU')} ₴`
    : Number(price.replace(/[^0-9]/g, ''))
}
