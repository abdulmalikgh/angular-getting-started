 import { Iproduct } from './product.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    id: number;
    private productUrl = 'api/products/products.json';
    constructor(private http: HttpClient) {

    }
    getProducts(): Observable<Iproduct[]> {
     return this.http.get<Iproduct[]>(this.productUrl).pipe(
         tap(data => console.log(`All: ${JSON.stringify(data)}`),
         catchError(this.handleError)
     )
     );  
    }

    private handleError(err: HttpErrorResponse){
        // in a real world app, we may send the server to some remote
        // logging insfrastructure instead of throwing the error to the console
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            // a client-side or network error occured
            errorMessage = `An error occured : ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);

    }
}
