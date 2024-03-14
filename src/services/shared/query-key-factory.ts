import { QueryKey } from "@tanstack/react-query";

export class QueryKeyFactory {
  private baseKey: string;

  constructor(baseKey: string) {
    this.baseKey = baseKey;
  }

  all(): QueryKey {
    return [...this.baseKey];
  }

  lists(): QueryKey {
    return [...this.all(), "lists"];
  }

  details(id: string): QueryKey {
    return [...this.all(), "details", id];
  }
}
