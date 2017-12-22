import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { PostAdComponent } from './post-ad/post-ad.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'product-list', component: ProductListComponent },
    { path: 'company-list', component: CompanyListComponent },
    { path: 'company-login', component: CompanyLoginComponent },
    { path: 'post-ad', component: PostAdComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'contactus', component: ContactUsComponent }

];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [

    ]
})

export class AppRoutingModule { }