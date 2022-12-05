import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marque } from '../marque';

const URL=" http://localhost:3000/voiture";
@Injectable({
  providedIn: 'root'
})

export class ProduitVoitureService {
  lamarque!:Marque;
  constructor(private http:HttpClient) { }
  getProduct():Observable<Marque[]>{
    return this.http.get<Marque[]>(URL)
   
    }
    addVoiture(l:Marque):Observable<Marque>{
      return this.http.post<Marque>(URL,l);
    }
    deleteVoiture(id:number){
      return this.http.delete(URL+'/'+id);
    }
    getVoitureByid(id :number):Observable<Marque> {
      return  this.http.get<Marque>(URL + '/'+ id);
     }
    
  }
