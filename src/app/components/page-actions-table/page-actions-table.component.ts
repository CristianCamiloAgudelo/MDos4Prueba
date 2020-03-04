import { Component, OnInit } from '@angular/core';
import { PageActionsService } from '../../services/page-actions.service'

@Component({
  selector: 'app-page-actions-table',
  templateUrl: './page-actions-table.component.html',
  styleUrls: ['./page-actions-table.component.scss']
})
export class PageActionsTableComponent implements OnInit {
  pageActions: any=[];

  headElements = ['PMC.id', 'PMC.Nombre', 'PMC.Padre', 'A.Nombre'];
  
  constructor( private pageActionsServices: PageActionsService) { 

  }

  ngOnInit() {
    this.pageActionsServices.getPageActionsOption().subscribe (
      pageActiosSource =>
      {
        this.pageActions = pageActiosSource;
        
      }
        , err=>{console.log(err);
      }
      )
  }

}


