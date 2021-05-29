import { Project } from '../shared/classes';

export class ContextService {

  public projects: Project[];
  public paymentOngoing: boolean = false;
  public showLogin: boolean = false;
  public showSignup: boolean = false;

  public userName: string | undefined;

  public tokens: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public endpoint = 'wss://nikau.centrality.me/public/ws';

  constructor() {
    this.projects = [];
    this.addProject("p1", "Global Species Database", "2021-08-22", "donate","IUCN Photo1.jpg", 10);
    this.addProject("p2", "Environmental Coding School", "2021-09-04", "invest", "GirlCodeIncubator1.jpg", 15);
  }

  public addProject(
    code: string,
    name: string,
    releaseDate: string,
    type: string,
    url: string,
    price: number  ) {
    let proj = new Project();
    proj.name = name;
    proj.code = code;
    proj.url = url;
    proj.type = type;
    proj.releaseDate = releaseDate;
    proj.price = price;
    this.projects.push(proj);
  }

  public readCollection() {
   
  }

}
