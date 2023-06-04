import { complement, includes, map, partialRight, when } from "ramda";
import { dateIsInList, sortDates, toVisualText } from "./dateUtils";
import {
  tasks,
  availableTodoLists,
  relevantDates,
  thereIsOverdueTasks,
} from "../state";

let dates: Date[] = [];
let todoLists: string[] = [];

availableTodoLists.subscribe((newTodoLists) => (todoLists = newTodoLists));
relevantDates.subscribe((newDates) => (dates = newDates));

relevantDates.subscribe(() => thereIsOverdueTasks.set(overdueTasksExist()));

export default function watchForNewTaskOptions() {
  tasks.subscribe((newTasks) => {
    newTasks.forEach((task) => {
      if (!todoLists.includes(task.todoList)) {
        availableTodoLists.update((oldTodoLists) => [
          ...oldTodoLists,
          task.todoList,
        ]);
      }

      if (dateIsNew(task.date)) {
        relevantDates.update((oldDates) =>
          sortDates(filterDuplicateDates([...oldDates, task.date]))
        );
      }
    });
  });
}

function overdueTasksExist() {
  return includes("overdue", map(toVisualText, dates));
}

const dateIsNew = complement(partialRight(dateIsInList, [dates]));

function filterDuplicateDates(dates: Date[]) {
  const dateStrings = dates.map((date) => date.toDateString());

  const savedDates: string[] = [];
  const dateIsSaved = partialRight(includes, [savedDates]);

  const filteredDateSrings = dateStrings.filter((dateString) => {
    if (dateIsSaved(dateString)) return false;
    savedDates.push(dateString);
    return true;
  });

  const filteredDates = map(
    (dateString) => new Date(dateString),
    filteredDateSrings
  );

  return filteredDates;
}
