export class EventHub {
  constructor() {
    this.events = {};
  }

  subscribe(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);

    return () => this.unsubscribe(event, listener);
  }

  publish(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => listener(data));
  }

  unsubscribe(event, listenerToRemove) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      listener => listener !== listenerToRemove
    );
  }

  static instance = null;

  static getInstance() {
    if (!EventHub.instance) {
      EventHub.instance = new EventHub();
    }
    return EventHub.instance;
  }
}
