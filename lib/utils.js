export const removeEmptyObjects = (objArray) => {
  const isEmpty = (item) =>
    !Object.values(item).some((x) => x !== null && x !== "");

  if (objArray) {
    return objArray.filter((item) => !isEmpty(item));
  } else {
    return [];
  }
};

export const isEmpty = (obj) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
};
