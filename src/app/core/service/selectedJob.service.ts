import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SelectedJobsService {
  private projectNamesSource = new BehaviorSubject<string>('');
  projectNames$ = this.projectNamesSource.asObservable();

  updateProjectNames(names: string) {
    this.projectNamesSource.next(names);
  }
}
