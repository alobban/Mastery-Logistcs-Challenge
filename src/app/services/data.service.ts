import { Injectable } from '@angular/core';

import loads from '../../assets/loads.json';
import { Load } from '../type-definitions/load';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loadData: Load[];
  data: Subject<Load[]> = new Subject<Load[]>();

  constructor() {
    this.loadData = loads;
  }

  getDataObservable() {
    this.data.next(this.loadData);
  }

  getLoads(): Observable<Load[]> {
    return this.data.asObservable();
  }

  updateLoadDetails(updatedLoad: Load) {
    this.loadData = this.loadData.map(load => {
      if (load.id === updatedLoad.id) {
        return updatedLoad;
      }
      return load;
    });
    this.getDataObservable();
  }

  lockLoad(lockedId: string) {
    this.loadData = this.loadData.map(load => {
      if (load.id === lockedId) {
        load.locked = !load.locked;
        return load;
      }
      return load;
    });
    this.getDataObservable();
  }
}
