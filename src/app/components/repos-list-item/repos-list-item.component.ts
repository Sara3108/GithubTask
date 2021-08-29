import { Component, OnInit, Input} from '@angular/core';
import { GithubRepo } from 'src/app/modals/repos.modal';

@Component({
  selector: 'app-repos-list-item',
  templateUrl: './repos-list-item.component.html',
  styleUrls: ['./repos-list-item.component.scss']
})
export class ReposListItemComponent implements OnInit {
  @Input() repoItem: GithubRepo;
  constructor() { }

  ngOnInit() {
  }

}
