/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    export class Cpp extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for Cpp";
      }
      getAvailableTeacher(): string {
        const exp = this.teacher.experienceTeachingC;
        return exp > 0 ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
      }
    }
  }