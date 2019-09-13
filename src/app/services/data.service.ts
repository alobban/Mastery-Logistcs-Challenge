import { Injectable } from '@angular/core';

import loads from '../../assets/loads.json';
import { Load } from '../type-definitions/load';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loads: Load[] = loads;

  constructor() { }

  getLoads(): Load[] {
    return this.loads;
  }
}
