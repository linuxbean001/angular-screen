import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public tasks = [
    { name: 'Riesterunterlagen fertig machen', due: 'seit 5 Tagen' },
    { name: 'PKV Vergleiche rechnen', due: 'seit 2 Tagen' },
    { name: 'Kundenmappe sortieren', due: 'seit 2 Tagen' },
    { name: 'Finanzierungsanfrage weitergeben', due: 'heute' },
    { name: 'Eine lange Aufgabe, welche zu lang für eine Zei...', due: 'heute' },
    { name: 'Neue Umschläge kaufen', due: 'morgen' },
  ];

  public activeUploads = [
    { name: 'Eigentumswohnung Müller', due: '3 neu' },
    { name: 'Mehrfamilienhaus Fam. Mayer', due: '2 neu' },
    { name: 'Priv. Krankenversicherung Schmitz Jun.', due: 'heute' },
    { name: 'Priv. Krankenversicherung Schmitz Sen.', due: 'gestern' },
    { name: 'BAV Unterlagen Schmidt GmbH', due: 'Montag' },
    { name: 'BAV Unterlagen Schulz GmbH & Co. KG', due: 'letzte Woche' }
  ];

  public content = 'Lorem ipsum';

  constructor() { }

  ngOnInit() {
  }

  public changeContent() {
    this.content = 'New Content!';
  }

}
