import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  goToHome(){
    this.router.navigateByUrl('admin-layout');
  }
  
}
