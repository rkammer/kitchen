import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinComponent } from './kitchen-forms/checkin/checkin.component';
import { CheckoutComponent } from './kitchen-forms/checkout/checkout.component';
import { DashboardComponent } from './util/dashboard/dashboard.component';
import { FrameComponent } from './util/frame/frame.component';

const routes: Routes = [
   {
        path:      '',
        component: FrameComponent,
        children: [
            {
                path:      'checkin',
                component: CheckinComponent
            },
            {
                path:      'checkout',
                component: CheckoutComponent
            },
            {
                path:      'dashboard/:message',
                component: DashboardComponent
            },
            {
                path:      'dashboard',
                component: DashboardComponent
            },
            {
                path:       '',
                redirectTo: 'dashboard',
                pathMatch:  'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
