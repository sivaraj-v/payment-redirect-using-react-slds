export class Logger {
  constructor() {}
  dateTime = () => new Date().toISOString();
  local = (errorSpec) => this.log({ ...errorSpec, dateTime: this.dateTime() });
  kibana = (errorSpec) => this.log({ ...errorSpec, dateTime: this.dateTime() });
  log = (error) => console.log(error);
}
