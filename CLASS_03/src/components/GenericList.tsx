import type React from "react";

type GenericListProps<T> = {
    item: T[];
    render: (item: T) => React.ReactNode
}

export function GenericList<T>({items, render}: GenericListProps<T>) {
  return <ul>
    {items.map((item, i) => <li key={i}>{render(item)}</li>)}
  </ul>
}


