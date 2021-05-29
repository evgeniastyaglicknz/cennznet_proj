import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ContextService } from '../services/context';
import { Project } from '../shared/classes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:  ['./home.component.css']
})
export class HomeComponent {

  selectedProject: Project | undefined;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, public context: ContextService) {
  }

  showPayment(p: Project) {
    this.selectedProject = p;
    this.context.paymentOngoing = true;
  }

  closePayment(pay: boolean) {
    this.context.paymentOngoing = false;
    if (pay && this.selectedProject) {
      this.context.paymentSuccessfull = true;
    }
  }

  closeSuccess() {
    this.context.paymentSuccessfull = false;
  }
}

