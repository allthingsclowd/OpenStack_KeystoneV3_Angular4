import { Injectable } from '@angular/core';
import { Http, RequestMethod, Request, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/user';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    

    login(username: string, password: string, contract: string, region: string) {
  
        // With CORS Proxy Service in use here
        let authURL = 'http://localhost:2337/identity.'.concat(region,'.cloud.global.fujitsu.com:443/v3/auth/tokens')

        // Without CORS Proxy Service in use
        //let authURL = 'https://identity.'.concat(region,'.cloud.global.fujitsu.com:443/v3/auth/tokens')      
        
        let body = {"auth":
                        {"identity":
                                {"methods": ["password"], "password":
                                {"user":
                                    {"domain":
                                            {"name": contract},
                                             "name": username,
                                             "password": password
                                            }}}}}
                                            
        let bodyString = JSON.stringify(body); // Stringify payload

        let postheaders: Headers = new Headers();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');

        let postopts: RequestOptions = new RequestOptions();
        postopts.headers = postheaders;

        return this.http.post(authURL, bodyString, postopts)
            .map((res: Response)=>{
                let user = new User();
                
                // retrieve the K5/OpenStack authentication token from the response header
                user.token = res.headers.get('x-subject-token');
                
                // retrieve the remainder of the values from the response body
                user.name = res.json().token.user.name;
                user.id = res.json().token.user.id;
                user.catalog = res.json().token.catalog;
                user.roles = res.json().token.roles;
                user.expires = res.json().token.expires_at;


                if (user.token != null) {
                    // store user details local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUsertoken', JSON.stringify(user));
                }
            });



    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUsertoken');
    }
}


