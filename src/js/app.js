export default function orderByProps(obj, array) {
  const result = [];
  const tmpArr = Object.keys(obj).filter((key) => !array.includes(key)).sort();
  array.concat(tmpArr).forEach((element) => {
    result.push({ key: element, value: obj[element] });
  });
  return result;
}
