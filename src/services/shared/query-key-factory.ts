export class QueryKeyFactory {
  private baseKey: string;

  constructor(baseKey: string) {
    this.baseKey = baseKey;
  }

  all() {
    return [...this.baseKey];
  }

  lists() {
    return [...this.all(), "lists"];
  }

  details(id: string) {
    return [...this.all(), "details", id];
  }
}
