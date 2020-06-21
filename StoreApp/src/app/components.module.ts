import { HttpClientModule } from '@angular/common/http';

import { CategoryComponent } from './components/category/category.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CategoryComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    HttpClientModule],

        exports: [
            CategoryComponent]
        })
        export class ComponentsModule { }
