// Main application entry point
console.log('School Circle App initialized');

// Application initialization code here
export default class SchoolCircleApp {
    constructor() {
          this.version = '1.0.0';
          this.users = [];
          this.tasks = [];
    }

  addUser(user) {
        this.users.push(user);
  }

  addTask(task) {
        this.tasks.push(task);
  }
}
