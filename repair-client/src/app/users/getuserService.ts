  import { Injectable }              from '@angular/core';
import { Http, Response ,Jsonp,URLSearchParams}          from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
 
@Injectable()
export class GetUserService {
  private getUsersUrl = 'http://localhost:3000/getUsers/getUsers'; // URL to web API
  private createUsersUrl = 'http://localhost:3000/createUser/createuser?' // URL to web API




  constructor (private http: Http) {}
 
  getUsers(lat:number,lng:number): Observable<any> {
  let params = new URLSearchParams();
   //params.set('search', term); // the user's search value
   //params.set('action', 'opensearch');
   params.set('format', 'json');
   params.set('callback', 'JSONP_CALLBACK');

    return this.http.get(this.getUsersUrl+'?lat='+lat+'&lng='+lng)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  createUsers(newUser:any): Observable<any> {

    return this.http.get(this.createUsersUrl+'name='+newUser.name+'&phone='+newUser.phone+'&description='+newUser.description+'&lat='+newUser.latitude+'&lng='+newUser.longitude)
                    .map(this.extractData)
                .catch(this.handleError);
  }

  private extractData(res: Response) {
  console.log(res);
    let body = res.json();
    return body || { };
  }
 
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
