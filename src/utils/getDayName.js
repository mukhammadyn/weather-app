const getDayName = (dateStr, locale = 'en-US') => {
  let date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
};

export default getDayName
