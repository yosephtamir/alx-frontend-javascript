export default function getListStudentIds(arr) {
  if (!(Array.isArray(arr))) {
    return [];
  }
  const len = arr.length;
  const newArr = [];
  for (let i = 0; i < len; i += 1) {
    console.log(arr[i].location.includes('San Francisco'))
    newArr.push(arr[i].id);
  }
  return newArr;
}
