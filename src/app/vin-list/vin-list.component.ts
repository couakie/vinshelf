import { Component, OnInit, OnDestroy } from '@angular/core';
import { Vin } from '../models/vin.model';
import { Subscription } from 'rxjs';
import { VinsService } from '../services/vins.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vin-list',
  templateUrl: './vin-list.component.html',
  styleUrls: ['./vin-list.component.scss']
})

export class VinListComponent implements OnInit, OnDestroy {

  vins: Vin[];
  vinsSubscription: Subscription;

  constructor(private vinsService: VinsService,  private router: Router) { }

  ngOnInit() {
    this.vinsSubscription = this.vinsService.vinsSubject.subscribe(
      vins => {
        this.vins = vins;
      }
    );
    this.vinsService.emitVins();
  }

  onNewVin() {
    this.router.navigate(['/vins', 'new']);
  }

  onDeleteVin(vin: Vin) {
    this.vinsService.removeVin(vin);
  }

  onViewVin(id: number) {
    this.router.navigate(['/vins', 'view', id]);
  }

  ngOnDestroy(): void {
    this.vinsSubscription.unsubscribe();
  }
}
