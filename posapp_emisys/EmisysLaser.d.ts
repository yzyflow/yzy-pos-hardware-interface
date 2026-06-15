export type ScannedBarcodeCallback = (barcode: string) => void;

export default class EmisysLaser {
  /**
   * Init laser listener
   */
  initScannedBarcodeListener(): void;

  /**
   * Get scanned barcode
   */
  getScannedBarcode(): string;

  /**
   * Register a callback to be called when a barcode or a QR code is scanned by the device.
   * The scan is usually triggered by the user pressing on some button on the device.
   * @return {number} The index to pass to removeScannedBarcodeListener() to remove this callback.
   */
  setScannedBarcodeListener(callback: ScannedBarcodeCallback | null): number;

  /**
   * Remove the scanned callback installed by setScannedBarcodeListener().
   */
  removeScannedBarcodeListener(index: number): void;
}
