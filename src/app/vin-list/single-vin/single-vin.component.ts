import { Component, OnInit } from '@angular/core';
import { Vin } from 'src/app/models/vin.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VinsService } from 'src/app/services/vins.service';

@Component({
  selector: 'app-single-vin',
  templateUrl: './single-vin.component.html',
  styleUrls: ['./single-vin.component.scss']
})
export class SingleVinComponent implements OnInit {

  vin: Vin;

  constructor(private route: ActivatedRoute, private vinsService: VinsService,
              private router: Router) {}

  ngOnInit() {
    this.vin = new Vin('', '', '', '', '', '');
    const id = this.route.snapshot.params.id;
    this.vinsService.getSingleVin(+id).then(
      (vin: Vin) => {
        this.vin = vin;
      }
    );
  }

  onBack() {
    this.router.navigate(['/vins']);
  }

}
