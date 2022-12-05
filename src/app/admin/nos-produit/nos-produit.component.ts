import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/marque';
import { ProduitVoitureService } from 'src/app/service/produitVoiture.service';
import { rechercherCarService } from 'src/app/service/rechercherCar.service';

@Component({
  selector: 'app-nos-produit',
  templateUrl: './nos-produit.component.html',
  styleUrls: ['./nos-produit.component.css']
})
export class NosProduitComponent implements OnInit {

  constructor(private prod:ProduitVoitureService,private  rechercher:rechercherCarService) { }
  productList !:Marque[] ;
  

  ngOnInit(): void {
    this.prod.getProduct()
    .subscribe(res=>{
      this.productList = res;
   
     





      console.log(this.productList)
    });

    
   
  }
 
  onsupprimer(id:number){
    this.prod.deleteVoiture(id).subscribe(dd=>this.productList.pop());
  }

}



 



