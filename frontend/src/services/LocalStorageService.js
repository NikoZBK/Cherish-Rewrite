import { Events } from '../eventhub/Events.js';
import Service from './Service.js';

export class LocalStorageService extends Service {
  constructor() {
    super();
    this.dbName = 'calendarDB';
    this.storeName = 'calendar';
    this.db = null;

    this.initDB()
      .then(() => {
        this.loadCalendarFromDB();
      })
      .catch(err => {
        console.error(err);
      });
  }

  async initDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.dbName, 1);

      req.onupgradeneeded = e => {
        const db = e.target.result;
        db.createObjectStore(this.storeName, {
          keyPath: 'id',
          autoIncrement: true,
        });
      };

      req.onsuccess = e => {
        this.db = e.target.result;
        resolve(this.db);
      };

      req.onerror = () => {
        reject('Error initializing IndexedDB');
      };
    });
  }

  async storeDay(dayData) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      store.add(dayData);
      transaction.oncomplete = () => {
        this.publish(Events.StoreUserDataSuccess, dayData);
        resolve('Day data stored successfully');
      };
      transaction.onerror = () => {
        this.publish(Events.StoreUserDataFailure, dayData);
        reject('Error storing day data');
      };
    });
  }

  async unStoreDay(dayData) {
    // TODO
  }

  async loadCalendarFromDB() {
    // TODO
  }

  async clearCalendar() {
    // TODO
  }
}
