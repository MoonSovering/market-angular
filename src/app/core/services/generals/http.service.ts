import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrosService } from './errors.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private readonly http: HttpClient,
    private readonly errorService: ErrosService,
  ) { }


  get<T>(url: string, header?: HttpHeaders): Observable<T> {
    return this.http.get<T>(url, {
      headers: header ? header : null
    })
    .pipe(
      catchError((error) => this.handleError(error))
    )
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body)
    .pipe(
      catchError((error) => this.handleError(error))
    )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => this.errorService.extract(error));
  }
}
