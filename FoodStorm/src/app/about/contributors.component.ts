import { Component, OnInit } from '@angular/core';
import { ContributorsService } from './contributors.service';
import { IContributor } from './Contributor';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {

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
