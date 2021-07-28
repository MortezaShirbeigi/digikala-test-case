export const numberWithCommas = (number) => {
  return number
    ? number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    : "";
};

export const numberWithoutCommas = (number) => {
  return number ? number.toString().replace(/,/g, "") : "";
};

export const getDiscount = (price, paidPrice) => {
  const totalDiscount = paidPrice && price - paidPrice;
  const percentDiscount = (totalDiscount / price) * 100;
  return `${percentDiscount.toFixed()}%`;
};
