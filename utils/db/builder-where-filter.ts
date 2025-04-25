type FilterValue = string | number;
type Filters<T> = Partial<Record<keyof T, FilterValue>>;

export class WhereFilterBuilder<T> {
  private filters: string[] = [];
  private values: FilterValue[] = [];

  where(filters: Filters<T>): string {
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        const idx = this.values.length + 1;

        // Check if the field is a string or not
        const columnType = typeof value;

        // If the column is a string (e.g., name, email),
        // use ILIKE for partial matching
        if (columnType === "string") {
          this.filters.push(`${key} ILIKE $${idx}`);
          this.values.push(`%${value}%`);
        } else if (columnType === "number") {
          // For numbers (e.g., age, id), use exact matching (=)
          this.filters.push(`${key} = $${idx}`);
          this.values.push(value as FilterValue);
        }
      }
    });

    // Check if the filters are empty
    if (this.filters.length === 0) {
      return "";
    }

    return `WHERE ${this.filters.join(" AND ")}`;
  }
}
