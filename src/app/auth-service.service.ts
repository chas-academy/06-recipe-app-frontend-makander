import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TokenServiceService } from "./token-service.service";

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {
  private loggedIn = new BehaviorSubject<boolean>(this.Token.userLoggedIn());
  authStatus = this.loggedIn.asObservable();
  changeAuthStaus(value: boolean) {
    this.loggedIn.next(value);
  }
  constructor(private Token: TokenServiceService) {}
}
