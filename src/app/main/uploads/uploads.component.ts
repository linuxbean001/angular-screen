import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent implements OnInit {
  currentDate: any ="11/10/2018";
  display ='none';
  message="Test Message by consultant";
  comment: string;
  comment2: string;
  files:any;
  imageStatus1=null;
  imageStatus2=null;
  fieldArray: Array<string> = [];
  fieldArray2: Array<string> = [];
  valueStatus = null;
  chats
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
  identityCardsFiles=[
    
  ];
  saleryStatmentFiles=[    
    {name:'Lohnabrechnung05.2016_WüstJennifer.pdf',size:46754},
    {name:'Lohnabrechnung05.2016_WüstChristian.pdf',size:351421}  
  ];

  selectedFileToUpload: File =null;
  constructor() { }

  ngOnInit() {
    this.currentDate = new Date();
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
 
  _comments(value){
    // this.display ="block";
    console.log(this.comment);
  
    // this.fieldArray.push(this.comment);
    this.imageStatus1 = !this.imageStatus1;
  }
  onEnter(value){
    console.log('xxxx--',value);
    this.message = value;
    this.fieldArray.push(this.comment);

    this.imageStatus1 = !this.imageStatus1;
    this.comment = '';
  }
  _comments2(){
    console.log(this.comment2);
   
    this.imageStatus2 = !this.imageStatus2;
  }
  onEnter2(value){
    console.log('xxxx--',value);
    this.message = value;
    this.fieldArray2.push(this.comment2).toString;
    this.imageStatus2 = !this.imageStatus2;
    this.comment2 = '';
  }
  hidePopup(){
    this.display ='none';
  }
  onCloseHandled(value){
    console.log(this.comment);
    this.fieldArray.push(this.comment);
    console.log( this.fieldArray);
    this.display ='none';
}

deleteFieldValue(index){
 this.selfAssessmentFiles.splice(index, 1); 
}
// deleteFieldValue2(index){
//   this.identityCardsFiles.splice(index, 1); 
// }
deleteFieldValue3(index){
  this.saleryStatmentFiles.splice(index, 1); 
}
  






}
