import { Component, OnInit } from '@angular/core';
import { filter, map, publishLast } from 'rxjs/operators';
@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.scss']
})
export class ConsultantComponent implements OnInit {

  uploadedDoc = {
    selfAssessment: 'none',
    identityCards: 'no',
    saleryStatment: 'yes'
  }

  filee: any;

  message="Test Message by consultant";
  selfAssessmentFiles = [
    { name: '201603 Vertrauliche pers. Selbstauskunft+Bel.Objekt RDS.pdf' ,lastModified: 1567882752200  },
    { name: 'Why_fu?r_Trainees.pdf', size: 46754, lastModified: 1512382752500},
    { name: 'Selbstauskunft_Fam.Wüst.pdf', size: 351421, lastModified: 1534562752700 }
  ];
  identityCardsFiles = [
    { name: 'Lohnabrechnung05.2016_WüstJennifer.pdf', size: 46754, lastModified: 1567882752200  },
    { name: 'Lohnabrechnung05.2016_WüstChristian.pdf', size: 351421, lastModified: 1567882752200  }
  ];
  // LeaveComment = [
  //   { message: 'Lohnabrechnung',
  //    lastModified: 1567882752200 }
  // ];
  saleryStatmentFiles = [];

  selectedFileToUpload: File = null;
  imageStatus = null;
  valueStatus = null;
  finalStatus = [];
  denyStatus = [];
  confirmCommentStatus = [];
  leaveCommentStatus = [];
  aunotherSourceStatus = [];
  selfAssessmentFiles1={};
  LeaveComment=[];
  imageStatus1=null;
  green=null;
  comment_field=null;
  title_status='help';
  currentDate: any ="11/10/2018";
  public counter: number = 3;

 
  constructor() { }

  ngOnInit() {

  }

  getUploadStatus(doc) {

    const Doc = doc === 'selfAssessment' ? this.uploadedDoc.selfAssessment : doc === 'identityCards' ? this.uploadedDoc.identityCards : this.uploadedDoc.saleryStatment;

    return {
      open: Doc === 'no' || Doc === 'none',
      sign: Doc === 'no' ? 'close' : Doc === 'none' ? 'help' : 'check',
      background: Doc === 'no' ? 'green' : Doc === 'none' ? 'yellow' : 'green',
      color: Doc === 'no' ? 'white' : Doc === 'none' ? 'black' : 'white',
    }

  }


  onChnageSelectedFile(event) {
    this.selectedFileToUpload = <File>event.target.files[0];
    console.log('xxx xxxxxx xxxxxxx file is ', this.selectedFileToUpload);
   
      this.identityCardsFiles.push(this.selectedFileToUpload);
      console.log('customer-', this.identityCardsFiles);
   
    
  }

  test(event: any) {
    console.log('xxxxxxx xxxxxxx xxxxxxxxxx event is ', event);
    
    this.selectedFileToUpload = <File>event.target.files[0];
    console.log('xxx xxxxxx xxxxxxx file is ', this.selectedFileToUpload);


   
      this.selfAssessmentFiles.push(this.selectedFileToUpload);
      console.log('consultant-', this.selfAssessmentFiles);
   
   
   
  }


  imageStatusBox() {
    this.imageStatus = !this.imageStatus;
  }

  

  openDivfunction(id){
    if (id==3){
      this.imageStatus1 = !this.imageStatus1;

    }
  }

  loader(){
    this.counter += 2;
  }

  onEnter(value){

    let x={
      message :value,
      imageStatus1 : !this.imageStatus1,
      currentDate : new Date(),

    } 
    this.LeaveComment.reverse().push(x);
    
   
    this.comment_field='';
    console.log('xxxxxxxxxxx confirm-', this.LeaveComment.reverse());
    

  }

  del_consultant_doc(id){
    this.selfAssessmentFiles.splice(id, 1);
    return;
  }
  del_customer_doc(id) {
    this.identityCardsFiles.splice(id, 1);
    return;
  }


  StatusToConfirm(id,value, classStatus) {

    this.valueStatus = value;
    this.imageStatus = null;
    if (id==1){
      this.green='green';
      this.title_status='done';

    } else if (id == 2){
      this.green = 'red';
      this.title_status = 'clear';

    }
    else{
      this.green = '';
      this.title_status = 'help';
    }

    let selfAssessmentFiles1 = {
      id: id,
      status: value,
      classStatus: classStatus
    }
    this.selfAssessmentFiles1 = selfAssessmentFiles1;
    console.log('xxxxxxxxxxx confirm check-', selfAssessmentFiles1);



  }

 




}
