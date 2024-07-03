// 5. Advanced types Part 1
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home'
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break'
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home'
  }
  getCoffeeBreak(): string {
    return 'cannot have a break'
  }
  workTeacherTasks(): string {
    return 'Getting to work'
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === 'string') {
    return new Director;    
  } else {
  if (salary > 500) {
    return new Director;
  } else {
    return new Teacher;
  }
  }
}

// 6. Creating functions specific to employees

function isDirector(employee: Teacher | Director) {
  if (employee instanceof Teacher) {
    return false;
  }
  return true;
}

function executeWork(employee: Teacher | Director) {
  if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
  return employee.workDirectorTasks();
}

// 7. String literal types
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}