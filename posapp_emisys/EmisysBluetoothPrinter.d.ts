/* eslint-disable no-unused-vars */

// https://github.com/CesarBalzer/Cordova-Plugin-BTPrinter

export default class EmisysBluetoothPrinter {
  /**
   *  Init Bluetooth printer
   */
  initPrinter(charset?: string | null): void;

  /**
   * Send command to Bluetooth printer
   */
  printPOSCommand(command: string): void;

  /**
   * Register a callback called when printing completes.
   * In case of success, the message is null.
   * In case of failure, the message contains the error text
   */
  setDoneCallback(callback: (message: string | null) => void): void;

  /**
   *  Print text with size and align configuration
   */
  printText(
      text: string,
      size: 'normal' | 'normalBold' | 'doubleHeight' | 'doubleWidth',
      align: 'left' | 'center' | 'right'
  ): void;
}
