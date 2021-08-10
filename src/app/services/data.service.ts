import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountService } from './account.service';

const API = 'https://peaceful-beyond-74495.herokuapp.com/api';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private httpClient: HttpClient,
    private accountService: AccountService
  ) {}

  public getProducts(): Observable<any> {
    return this.httpClient
      .get(`${API}/products`)
      .pipe(catchError(this.handleError));
  }

  // view a product
  getProduct(productId: string): Observable<any> {
    return this.httpClient
      .get(`${API}/products/${productId}`)
      .pipe(catchError(this.handleError));
  }

  // create a cart item
  createCartItem(productId: string, quantity: number): Observable<any> {
    let cartItem = { product_id: productId, quantity: quantity };
    return this.httpClient
      .post(`${API}/cartItems`, {
        cartItem,
      })
      .pipe(catchError(this.handleError));
  }

  // get all cart items
  getAllCartItems(): Observable<any> {
    const token = this.accountService.userToken;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient
      .get(`${API}/cartItems`, { headers })
      .pipe(catchError(this.handleError));
  }

  // edit a cart item
  editCartItem(cartItemId: string, quantity: string): Observable<any> {
    const token = this.accountService.userToken;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient
      .patch(
        `${API}/cartItems/${cartItemId}`,
        { quantity },
        { headers: headers }
      )
      .pipe(catchError(this.handleError));
  }

  // delete cart item
  deleteCartItem(cartItemId: string): Observable<any> {
    const token = this.accountService.userToken;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient
      .delete(`${API}/cartItems/${cartItemId}`, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  // handle error
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}
