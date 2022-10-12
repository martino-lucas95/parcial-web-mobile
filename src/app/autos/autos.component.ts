import { Component, OnInit } from '@angular/core';
import { Auto } from '../autos.model';
import { AutoListService } from '../auto-list.service';
@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit {

  constructor(private AutoListService: AutoListService ) { }

  ngOnInit(): void {
    this.getAutos();
  }

  autos: Auto[]= []

  getAutos(): void {
    this.autos = this.AutoListService.getAutos();
  }
}
