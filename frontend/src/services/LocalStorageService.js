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
      const request = indexedDB.open(this.dbName, 1);

      request.onupgradeneeded = e => {
        const db = e.target.result;
        db.createObjectStore(this.storeName, {
          keyPath: 'id',
          autoIncrement: true,
        });
      };

      request.onsuccess = e => {
        this.db = e.target.result;
        resolve(this.db);
      };

      request.onerror = () => {
        reject('Error initializing IndexedDB');
      };
    });
  }

  async storeDay(dayData) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.add(dayData);

      request.onsuccess = () => {
        this.publish(Events.StoreUserDaySuccess, dayData);
        resolve('Day data stored successfully');
      };

      request.onerror = () => {
        this.publish(Events.StoreUserDayFailure, dayData);
        reject('Error storing day data');
      };
    });
  }

  async deleteDay(dayData) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.remove(dayData.id); // TODO: Confirm .id exists

      request.oncomplete = () => {
        this.publish(Events.DeleteUserDaySuccess, dayData);
        resolve('Day data deleted successfully');
      };
      request.onerror = () => {
        this.publish(Events.DeleteUserDayFailure, dayData);
        reject('Error deleting day data');
      };
    });
  }

  async loadCalendarFromDB() {
    const transaction = this.db.transaction([this.storeName], 'readonly');
    const store = transaction.objectStore(this.storeName);
    const request = store.getAll();

    request.onsuccess = e => {
      const days = e.target.result; // TODO: Validation
      days.forEach(day => this.publish(Events.NewDay, day));
    };
  }

  async clearCalendar() {
    // TODO
  }
}
