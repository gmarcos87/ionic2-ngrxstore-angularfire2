import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular'

import { AngularFire, FirebaseListObservable } from 'angularfire2'

import { Observable } from 'rxjs/Observable' 
import { Subject }    from 'rxjs/Subject';

import { ProductI } from '../models/product.model'

export const prodTrans = function(prod){
  let prodT:ProductI = prod.val()
  prodT.$key = prod.key;
  return prodT
} 

export interface customProductEvent {
  product: ProductI;
  event: string;
}

@Injectable()
export class ProductService {
  public fb:FirebaseListObservable<ProductI[]>;
  public fbEvents: Subject<customProductEvent>
  constructor(private platform:Platform, private af: AngularFire) {
      this.fbEvents = new Subject<any>();
  }


  initFirebase(): Promise<any>{
    return this.platform.ready()
      .then(()=>{
        this.fb = this.af.database.list('/product')
        this.fb.$ref.ref.on('child_added',(x)=>{this.fbEvents.next({product:prodTrans(x),event:'child_added'})})
        this.fb.$ref.ref.on('child_changed',(x)=>{this.fbEvents.next({product:prodTrans(x),event:'child_changed'})})
        this.fb.$ref.ref.on('child_removed',(x)=>{this.fbEvents.next({product:prodTrans(x),event:'child_removed'})})
      })
  }

  add(product: ProductI): Promise<ProductI> {
      return new Promise((res,rej)=>{
        res(this.fb.push(product))
      })
  }

  update(product: ProductI): Promise<ProductI> {
      return new Promise((res,rej)=>{
        res(this.fb.update(product.$key, product))
      })
  }

  delete(product: ProductI): Promise<string> {
        return new Promise((res,rej)=>{
          res(this.fb.remove(product.$key))
      })
  }

  getAll() : Observable<ProductI[]> {
    return Observable.create(observer=> {
      this.initFirebase()
      .then(()=>{
          this.fb.take(1).subscribe((x:ProductI[]) => observer.next(x))
        })
      })
  }

  getChanges(): Observable<customProductEvent> {
    return this.fbEvents.asObservable()
  }

}
