import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent implements OnInit {

  uploadedDoc = {
    selfAssessment: 'none',
    identityCards: 'no',
    saleryStatment: 'yes'
  }

  selfAssessmentFiles=[
    {name:'201603 Vertrauliche pers. Selbstauskunft+Bel.Objekt RDS.pdf'},
    {name:'Why_fu?r_Trainees.pdf',size:46754},
    {name:'Selbstauskunft_Fam.Wüst.pdf',size:351421}
  ];
  identityCardsFiles=[];
  saleryStatmentFiles=[    
    {name:'Lohnabrechnung05.2016_WüstJennifer.pdf',size:46754},
    {name:'Lohnabrechnung05.2016_WüstChristian.pdf',size:351421}  
  ];

  selectedFileToUpload: File =null;
  constructor() { }

  ngOnInit() {
       
  }

  getUploadStatus(doc) {

    const Doc = doc === 'selfAssessment' ? this.uploadedDoc.selfAssessment : doc === 'identityCards' ? this.uploadedDoc.identityCards : this.uploadedDoc.saleryStatment;

    return {
      open: Doc === 'no' || Doc === 'none',
      sign: Doc === 'no' ? 'close' : Doc === 'none' ? 'help' : 'check',
      background: Doc === 'no' ? 'red' : Doc === 'none' ? 'yellow' : 'green',
      color: Doc === 'no' ? 'white' : Doc === 'none' ? 'black' : 'white',
    }

  }


  onChnageSelectedFile(event){ 
    this.selectedFileToUpload=<File>event.target.files[0];
  
    console.log(event);  
      if(event.target.classList.contains('selfAssessmentUpload')){
        this.selfAssessmentFiles.push(this.selectedFileToUpload);
      }
      if(event.target.classList.contains('identityCardsUpload')){
        this.identityCardsFiles.push(this.selectedFileToUpload);
      }
      if(event.target.classList.contains('saleryStatmentUpload')){
        this.saleryStatmentFiles.push(this.selectedFileToUpload);
      }
  }

  






}
