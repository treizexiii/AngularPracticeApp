import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { SingleDeviceComponent } from './single-device/single-device.component';

const routes: Routes = [
  { path: 'devices', component: DeviceViewComponent },
  { path: 'devices/:id', component: SingleDeviceComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: DeviceViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
