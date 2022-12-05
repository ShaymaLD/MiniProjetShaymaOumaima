import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Marque } from 'src/app/marque';
import { ProduitVoitureService } from 'src/app/service/produitVoiture.service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  voituresForm!:FormGroup;
  productList !:Marque[] ;
  constructor(private prod:ProduitVoitureService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {


    this.voituresForm = this.formBuilder.nonNullable.group({
     
      prix:[0],
      marque:[''],
      modele:[''],
      nouveau:[''],
    })
  }
  onAjoute(){this.prod.addVoiture(this.voituresForm.value).subscribe(dd=>this. productList.push(dd));
  }

}
