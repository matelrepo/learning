import { Component } from '@angular/core';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrl: './router.component.css'
})
export class RouterComponent {

  angular_nested_routes_html =`<h2>AdminComponent</h2>

<nav>
  <ul>
    <li><a routerLink="donut">DonutComponent</a></li>
    <li><a routerLink="donuts">DonutsListComponent</a></li>
  </ul>
</nav>

<router-outlet></router-outlet>`;

  angular_routes_ts =`export const routes: Routes =[
  {path: 'admin', , components: DonutListComponent},
  {path: 'donuts', components: DonutListComponent},
];`;

  angular_data =`export const routes: Routes =[
  {path: 'donuts', components: DonutListComponent},
  {path: 'donuts/new', components: DonutSingleComponent, data: {isEdit: false},
  {path: 'donuts/:id', components: DonutListComponent, data: {isEdit: true},
];`;

  angular_data_var =`this.isEdit = this.route.snapshot.data['isEdit]`

  angular_path_redirect =`{path: '', redirectTo: '/home', pathMatch: 'full' }`
  angular_path_wildcard =`{path: '**', redirectTo: '/home' }`
  route_params =`{path: 'donuts/:id', components: DonutListComponent},`



  angular_nested_routes_ts =`export const routes: Routes =[
  {
    path: 'admin',
    children: [
      {path: 'donuts', components: DonutListComponent},
      {path: 'donut', components: DonutComponent},
    ]
  },
];`;

  angular_nested_routes_ts_module =`  Parent Module

  export const routes: Routes =[
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((x => x.AdminModule)
  },
];`;

  angular_routes_ts2 =`  Child Module

  export const routes: Routes =[
  {path: 'donut', , components: DonutComponent},
  {path: 'donuts', components: DonutListComponent},
  {path: '', pathMatch: full, redirectTo : 'donuts'},
];`;

  angular_module_root=`imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})
  ],`;

  router_outlet=`<router-outlet></router-outlet>`;
  router_link=`<a routerLink="home">
<a [routerLink]="donut.id"`;

  route_params_req_1 = `constructor(private route: ActivatedRoute)`
  route_params_req_2 = `const id = this.route.snapshot.paramMap.get('id');`

  angular_navigate =`this.router.navigate(['admin', 'donuts', donut.id])`


}
