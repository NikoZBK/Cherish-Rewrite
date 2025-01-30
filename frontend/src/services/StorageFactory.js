import { IDBStorageService } from './IDBStorageService';

/**
 * Factory class to create instances of user storage services.
 *
 * This class provides a static method to get an appropriate instance
 * of a storage service based on the specified storage type.
 * It cannot be instantiated.
 */
export class StorageFactory {
  constructor() {
    throw new Error('Cannot instantiate a StorageFactory object');
  }

  /**
   * Returns an instance of a storage service based on the given
   * storage type.
   *
   * @param {string} [storageType='local'] - The type of storage service to
   * create. Can be 'local', 'idb'', or 'remote'.
   * @returns {LocalStorageService} An instance
   * of the appropriate storage service.
   * @throws Will throw an error if the storage type is not recognized.
   */
  static get(storageType = 'local') {
    if (storageType === 'local') {
      /* TODO */
    } else if (storageType === 'idb') {
      return new IDBStorageService();
    } else if (storageType === 'remote') {
      /* TODO */
    } else {
      throw new Error('Invalid storage type');
    }
  }
}
