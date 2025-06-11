import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

export interface UserList {
    id: number
    name: string
    username: string
    email: string
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
}


@Injectable({
    providedIn:'root'
})

export class UserService {
    constructor(private http:HttpClient){}

    private apiUrl = "https://jsonplaceholder.typicode.com/users"
    
    getUsers():Observable<UserList[]>{
        return this.http.get<UserList[]>(this.apiUrl)
    }
}