import { availableTodoLists, relevantDates, tasks } from "../state";
import { dateIsInList, sortDates } from "./dateUtils";

let dates: Date[] = [];
let todoLists: string[] = [];

availableTodoLists.subscribe((newTodoLists) => (todoLists = newTodoLists));
relevantDates.subscribe((newDates) => (dates = newDates));

export default function watchForNewTaskOptions() {
  tasks.subscribe((newTasks) => {
    newTasks.forEach((task) => {
      if (!todoLists.includes(task.todoList)) {
        availableTodoLists.update((oldTodoLists) => [
          ...oldTodoLists,
          task.todoList,
        ]);
      }

      if (!dateIsInList(task.date, dates)) {
        relevantDates.update((oldDates) => sortDates([...oldDates, task.date]));
      }
    });
  });
}
