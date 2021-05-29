import { Component } from '@angular/core';
import { ContextService } from '../services/context';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  userName: string = '';

  constructor(public context: ContextService) {
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  login() {
    this.context.userName = this.userName;
    this.closeSignup();
    this.closeLogin();
  }

  cancelLogin() {
    this.closeSignup();
    this.closeLogin();
  }

  showLogin() {
    this.context.showLogin = true;
  }

  showSignup() {
    this.context.showSignup = true;
  }

  closeSignup() {
    this.context.showSignup = false;
  }

  closeLogin() {
    this.context.showLogin = false;
  }
}
