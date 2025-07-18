
export const taskPool = {
  tasks: [],
  add(task) {
    this.tasks.push(task);
    console.log("[TaskPool] ➕ Task added:", task);
  },
  list() {
    return this.tasks;
  }
};
