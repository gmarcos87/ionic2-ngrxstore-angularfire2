import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AddFormComponent} from '../components/add-form/add-form'
import { ProductListComponent} from '../components/product-list/product-list'

import { AngularFireModule } from 'angularfire2';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductActions } from '../actions/product.actions';  
import { ProductReducer } from '../reducers/product.reducer';
import { ProductEffects } from '../effects/product.effects';  
import { ProductService } from '../providers/product.service';    

export const firebaseConfig = {
    //--->>> Your firebase config <<<---//
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddFormComponent,
    ProductListComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    EffectsModule.runAfterBootstrap(ProductEffects),
    StoreModule.provideStore({ products: ProductReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddFormComponent,
    ProductListComponent
  ],
  providers: [
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler,
    },
    ProductActions,
    ProductService
  ]
})
export class AppModule {}
