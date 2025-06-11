import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import  mockProjects from '../../../assets/mocks/projects.json'

@Injectable()
export class MockApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET' && req.url.endsWith('/api/projects')) {
      const projects = mockProjects
      return of(new HttpResponse({ status: 200, body: projects }));
    }
    return next.handle(req);
  }
}
