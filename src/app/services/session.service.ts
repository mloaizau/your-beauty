import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _storage: Storage | null = null;

  constructor(
      private storage: Storage
    ) {
      this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage.set(key, value);
  }

  public get(key: string) {
    return new Promise((resolve, reject) => {
      this.storage.get(key).then(data => {
        console.log("data in session ", data);
        resolve(data);
      });
    });
  }

  public remove(key: string) {
    console.log("removeindo ", key);
    this._storage.remove(key);
    console.log(this.get('sessionActive'));
  }
}
