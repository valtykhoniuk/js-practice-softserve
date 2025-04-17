type SortFunction = (arr: string[], direction: "asc" | "desc") => string[];

const superSort: SortFunction = (arr, direction) => {
  const sorted = [...arr];

  sorted.sort((a, b) => {
    if (direction === "asc") {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  });

  return sorted;
};
