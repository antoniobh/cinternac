import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatDialogModule
} from '@angular/material';


import { AppLoaderComponent } from './services/app-loader/app-loader.component';

// DIRECTIVES
import { FontSizeDirective } from './directives/font-size.directive';


// SERVICES
import { AuthGuard } from './services/auth/auth.guard';
import {LangService} from './services/lang.service';
import { AppLoaderService } from './services/app-loader/app-loader.service';
import { LandingFixService } from '../shared/services/landing-fix.service';
import {TranslateModule} from '@ngx-translate/core';

const classesToInclude = [
  AppLoaderComponent,
  FontSizeDirective,
]

@NgModule({
  exports: [
    classesToInclude,
    TranslateModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    MatMenuModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDialogModule
  ],
  entryComponents: [AppLoaderComponent],
  providers: [
    AuthGuard,
    LangService,
    AppLoaderService,
    LandingFixService
  ],
  declarations: classesToInclude
})
export class SharedModule { }
