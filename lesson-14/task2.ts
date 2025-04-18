interface Rated {
  rating: number;
}

function identity2<T extends Rated>(items: T[]): number {
  const totalRating = items.reduce((acc, item) => acc + item.rating, 0);
  return totalRating / items.length;
}
