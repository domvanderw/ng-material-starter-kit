import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoComponent } from './components/crypto/crypto.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ListNamesComponent } from './components/list-names/list-names.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CheckboxComponentModule } from './components/checkbox/checkbox.component-module';
import { ListNamesComponentModule } from './components/list-names/list-names.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'crypto', component: CryptoComponent }, { path: 'checkbox', component: CheckboxComponent }, { path: 'list-names', component: ListNamesComponent }, { path: 'categories-menu', component: CategoriesMenuComponent }]), CryptoComponentModule, CheckboxComponentModule, ListNamesComponentModule, CategoriesMenuComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
