import { SpecificItemComponent } from './components/specific-item/specific-item.component';
import { CategoryComponent } from './components/category/category.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CategoryComponent,
    SpecificItemComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule],

        exports: [
            CategoryComponent,
        SpecificItemComponent]
        })
        export class ComponentsModule { }
