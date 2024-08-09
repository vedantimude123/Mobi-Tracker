import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  rows = [
    { name: 'Ethel Price', gender: 'female', company: 'Johnson' },
    { name: 'Claudine Neal', gender: 'female', company: 'Sealoud' },
    { name: 'Beryl Rice', gender: 'female', company: 'Velity' },
    { name: 'Wilder Gonzales', gender: 'male', company: 'Geekko' },
    { name: 'Georgina Schultz', gender: 'female', company: 'Suretech' },
    { name: 'Carroll Buchanan', gender: 'male', company: 'Ecosys' },
    { name: 'Valarie Atkinson', gender: 'female', company: 'Hopeli' },
    { name: 'Schroeder Mathews', gender: 'male', company: 'Polarium' },
    { name: 'Lynda Mendoza', gender: 'female', company: 'Dogspa' },
    { name: 'Sarah Massey', gender: 'female', company: 'Bisba' },
  ];

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  constructor() { }

  ngOnInit() { }
}
