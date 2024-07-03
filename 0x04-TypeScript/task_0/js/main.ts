interface Student {
  firstName: string;
  lastName: string;
  age: Number;
  location: string;
}

const student1: Student ={
  firstName: "Yoseph",
	lastName: "Tamirat",
	age: 26,
	location: "Nekemte"
};

const student2: Student = {
  firstName: "Nagasa",
  lastName: "Fufa",
  age: 24,
  location: "Addis Ababa"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "#00FFFF";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.borderBottom = "1px solid pink";
  locationCell.style.borderBottom = "1px solid pink";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);
