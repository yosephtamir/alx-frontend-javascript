function location(city, student) {
  return student.location.includes(city);
}

export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((student) => location(city, student));
}
