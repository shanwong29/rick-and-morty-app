const dateWithinRangeChecker = (targetDate, rangeStartDate, rangeEndDate) => {
  targetDate = new Date(targetDate);

  if (rangeStartDate) {
    rangeStartDate = new Date(rangeStartDate);
    rangeStartDate.setHours(0, 0, 0);
    if (targetDate < rangeStartDate) {
      return false;
    }
  }

  if (rangeEndDate) {
    rangeEndDate = new Date(rangeEndDate);
    rangeEndDate.setHours(23, 59, 0);
    if (targetDate > rangeEndDate) {
      return false;
    }
  }

  return true;
};

export { dateWithinRangeChecker };
