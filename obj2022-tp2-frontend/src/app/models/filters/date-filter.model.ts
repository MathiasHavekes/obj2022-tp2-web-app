export interface DateRange {
  start: Date,
  end: Date,
}

export class ChartFilters implements DateRange {
  start: Date;
  end: Date;

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