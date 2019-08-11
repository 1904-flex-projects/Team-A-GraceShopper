export const convertEmptyToNull = object => {
  for (let key in object) {
    // changed to Object.prototype for linting purpose, should still work the same way
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (object[key] === '') {
        object[key] = null;
      }
    }
  }
  return object;
};

export const truncate = (desc, someHeight) => {
  // double height length
  const max = 2 * someHeight;
  if (desc.length > max) {
    return `${desc.slice(0, max)}...`;
  }
  return desc;
};

import React from 'react';
export const filterHelper = prodArr => {
  return prodArr
    .map(product => {
      const { category } = product;
      return category.name;
    })
    .filter((elem, ind, arr) => {
      if (arr.indexOf(elem) === ind) return elem;
    })
    .map((catName, ind) => {
      return (
        <option key={ind} value={catName}>
          {catName}
        </option>
      );
    });
};
