import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VinsService } from 'src/app/services/vins.service';
import { Router } from '@angular/router';
import { Vin } from 'src/app/models/vin.model';

@Component({
  selector: 'app-vin-form',
  templateUrl: './vin-form.component.html',
  styleUrls: ['./vin-form.component.scss']
})
export class VinFormComponent implements OnInit {

  vinForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private vinsService: VinsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.vinForm = this.formBuilder.group({
      title: ['', Validators.required],
      annee: ['', Validators.required],
      nbre: ['', Validators.required],
      type: ['', Validators.required],
      region: ['', Validators.required],
      anneeMax : ''
    });
  }

  onSaveVin() {
    const title = this.vinForm.get('title').value;
    const annee = this.vinForm.get('annee').value;
    const anneeMax = this.vinForm.get('anneeMax').value;
    const region = this.vinForm.get('region').value;
    const nbre = this.vinForm.get('nbre').value;
    const type = this.vinForm.get('type').value;
    const newVin = new Vin(title, annee, anneeMax, region, nbre, type);
    this.vinsService.createNewVin(newVin);
    this.router.navigate(['/vins']);
  }
}
