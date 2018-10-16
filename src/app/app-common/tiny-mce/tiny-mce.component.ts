import {
  ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, OnChanges, OnDestroy, OnInit, Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
declare const tinymce;

@Component({
  selector: 'app-tiny-mce',
  templateUrl: './tiny-mce.component.html',
  styleUrls: ['./tiny-mce.component.scss']
})
export class TinyMceComponent implements OnInit, OnDestroy, OnChanges {

  @Input() content: string;
  @Output() contentChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('content') contentElement: ElementRef;
  private editor: any;
  private _content: string;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    console.log(this.contentElement);

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        tinymce.init({
          target: this.contentElement.nativeElement,
          inline: true,
          menubar: false,
          insert_toolbar: false,
          skin_url: '/assets/tinymce-skins/lightgray',
          plugins: [],
          setup: (editor) => {
            // Updates the data model and the view
            this.editor = editor;
            this.editor.on('change', () => {
              const content = editor.getContent();
              this.content = content;
              this._content = content;
              this.contentChange.emit(content);
            });
            setTimeout(() => {
              this.editor.setContent(this.content);
            });
          },
        });
      });
    });
  }

  ngOnDestroy() {
    if (this.editor) {
      this.editor.remove();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['content'] && this.editor && this._content !== this.content) {
      this.editor.setContent(this.content);
    }
  }

}
