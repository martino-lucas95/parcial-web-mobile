import { Injectable } from '@angular/core';
import { Auto } from './autos.model';
import { AUTOS } from './autoList';

@Injectable({
  providedIn: 'root'
})
export class AutoListService {

  constructor() { }

  getAutos(): Auto[] {
    return AUTOS;
  }
}
