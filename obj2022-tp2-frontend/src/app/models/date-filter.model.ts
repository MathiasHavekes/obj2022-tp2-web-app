export interface DateRange {
  start: Date | undefined,
  end: Date | undefined,
}

export class ChartFilters implements DateRange {
  start: Date | undefined;
  end: Date | undefined;

  constructor(start: Date, end: Date) {
    this.start = start;
    this.end = end;
  }

  topParam = () => {
    if(!(this.start && this.end)) return;

    return {
      start: this.start.toDateString(),
      end: this.end.toDateString(),
    };
  }
}