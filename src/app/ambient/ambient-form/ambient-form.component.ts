import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ambient } from 'src/app/core/models/ambient.interface';
import { AmbientService } from 'src/app/core/services/ambient.service';

@Component({
  selector: 'app-ambient-form',
  templateUrl: './ambient-form.component.html',
  styleUrls: ['./ambient-form.component.scss']
})
export class AmbientFormComponent implements OnInit {

  showingForm = false;

  ambient: Ambient;

  constructor(
    private ambientService: AmbientService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params.id);
    this.ambientService.getAmbient(id).subscribe(ambient => this.ambient = ambient);
  }

  showForm(): void {
    this.ambient.formUrl = this.ambientService.fillUrl(this.ambient.formUrl);
    this.showingForm = true;
  }

}
