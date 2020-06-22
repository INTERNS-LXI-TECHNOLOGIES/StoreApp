import { CategoryListComponent } from 'src/app/components/category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CategoryListComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    HttpClientModule],

        exports: [
            CategoryListComponent]
        })
        export class ComponentsModule { }
