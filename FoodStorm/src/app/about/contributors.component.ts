import { Component, OnInit } from '@angular/core';
import { ContributorsService } from './contributors.service';
import { IContributor } from './contributor';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {
  pageTitle : string = 'Contributeurs du projet Foodstorm';
  contributors : IContributor[];
  errorMessage: string;
  constructor(private _contributorService : ContributorsService) { }

  ngOnInit(): void {
    this._contributorService.getContributors()
            .subscribe(contributors => {
                this.contributors = contributors;

            },
                error => this.errorMessage = <any>error);
}

}
