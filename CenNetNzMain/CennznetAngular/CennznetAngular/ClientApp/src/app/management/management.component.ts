import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ContextService } from '../services/context';
import { Project } from '../shared/classes';

@Component({
  selector: 'management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent {

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, public context: ContextService) {
  }

  releaseTokensForProject(name: string) {
    alert("Tokens are being released for the project: " + name);
  }
}

