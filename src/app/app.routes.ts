import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';

export const router: Routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full'},
    { path: 'about', component: AboutComponent },
    { path: 'product', component: ProductComponent }
]


export const routes: ModuleWithProviders = RouterModule.forRoot(router);