declare interface LogsModel {
  dateTime: string;
  type: 'info'|'warning'|'error';
  message: string;
  extra?: unknown;
}

type getLogListCallback = (logs: LogsModel[]) => void;
type getChangeCounterCallback = (counter: number) => void;

export default class EmisysLogsManager {
  /**
   * Add info message to logs
   * @param message
   * @param extra
   */
  addInfo(message: string, extra?:unknown): void;

  /**
   * Add warning message to logs
   * @param message
   * @param extra
   */
  addWarning(message: string, extra?:unknown): void;

  /**
   * Add error message to logs
   * @param message
   * @param extra
   */
  addError(message: string, extra?:unknown): void;

  /**
   * Return logs LogsModel[]
   * @return LogsModel[]
   */
  getLogs(): LogsModel[];

  /**
   * Purge the log of the bridge.
   */
  clearLogs(): void;

  /**
   * Set the maximum number of log lines to keep in memory.
   * @param {number} length How many entries to keep in the log. Older entries are discarded.
   */
  setMaxLogListLength(length: number): void;

  /**
   * Get a counter incremented each time an entry is added to the log.
   * @param {getChangeCounterCallback} callback Function called with the counter value.
   */
  getChangeCounter(callback: getChangeCounterCallback)

  /**
   * Get the log entries as a list.
   * @param {getLogListCallback} callback Function called when the list is ready.
   */
  getLogList(callback: getLogListCallback): void;
}
