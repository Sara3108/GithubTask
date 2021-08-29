import { Component, OnInit } from '@angular/core';
import { GithubRepos } from 'src/app/modals/repos.modal';
import { GithubreposService } from 'src/app/services/githubrepos.service';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {
  pageNum = 1;
  repos: GithubRepos;
  totalPagesCount: number;
  isLoading: boolean;
  constructor(private githubRreposService: GithubreposService) { }

  ngOnInit() {
    this.getGithubRepos();
  }

  /**
   * get Github repos that were created in the last 30 days
  */
  getGithubRepos(){
    this.isLoading = true;
    this.githubRreposService.getGithubRepos(this.pageNum).subscribe(res => {
      if(res){
        this.repos = res;
        this.totalPagesCount = this.repos.total_count;
      }
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
    });
  }

  /**
   * navigate to next page
  */
  goToNextPage() {
    this.pageNum++;
    this.getGithubRepos();
  }

  /**
   * navigate to previous page
  */
  goToPreviousPage() {
    this.pageNum--;
    this.getGithubRepos();
  }

  /**
   * navigate to the selected page from the user input on change it
   * @param event to get input value
  */
  getPageByNumber(event) {
    const number = event.target.value;
    if (number > this.totalPagesCount || number <= 0) {
      event.target.value = this.pageNum;
    } else {
      this.pageNum = number;
      this.getGithubRepos();
    }
  }

}


