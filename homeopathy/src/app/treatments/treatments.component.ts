import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  imageUrls = ['assets/image/allergy.jpeg', 'assets/image/anemia.jpeg', 'assets/image/child.jpeg', 'assets/image/female.jpeg','assets/image/fever.jpeg',
  'assets/image/hair.jpeg','assets/image/joint1.jpeg','assets/image/lungs.jpeg','assets/image/mental.jpeg','assets/image/obesity.jpeg'
,'assets/image/piles.jpeg','assets/image/skin.jpeg', 'assets/image/urinar.jpeg']

  constructor() { }

  ngOnInit(): void {
  }

}
