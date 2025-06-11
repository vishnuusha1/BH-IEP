import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DrawerService {
    private drawerState = new BehaviorSubject<boolean>(false);

  drawerState$ = this.drawerState.asObservable();

  toggle(): void {
    this.drawerState.next(!this.drawerState.value);
}
}
