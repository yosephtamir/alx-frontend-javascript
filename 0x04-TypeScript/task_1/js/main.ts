
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastname: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

interface classInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface constructorinterface {
  new (firstName: string, lastName: string): classInterface;
}

const StudentClass: constructorinterface = class StudentClass implements classInterface {
  firstName;
  lastName;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return `${this.firstName}`;
  }
}
