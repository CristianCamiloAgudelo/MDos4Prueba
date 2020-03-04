import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { PageActions } from '../models/pageActions.models';
import { Observable, of, Subject } from 'rxjs';

@Injectable()
export class PageActionsService {
  
  private pageActionsServiceUrl = 'https://prueba.midisappsalud.com/api/get_json_page_actions';

  constructor(private http: HttpClient) { }

  getPageActions(): Observable<PageActions[]> {
    return this.http.get<PageActions[]>(this.pageActionsServiceUrl);
  }

  getPageActionsOption() {
    return this.http.get(this.pageActionsServiceUrl);
  }
}
