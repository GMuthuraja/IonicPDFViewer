import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private iab: InAppBrowser, private document: DocumentViewer,
    private fileOpener: FileOpener, private file: File) { }

  openPDFBrowserBlank() {
    this.iab.create('../../assets/sample.pdf', '_blank');
  }

  openPDFBrowserSystem() {
    this.iab.create('../../assets/sample.pdf', '_system');
  }

  openPDFViewer() {
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }

    this.document.viewDocument(this.file.applicationDirectory + 'www/assets/sample.pdf', 'application/pdf', options);
  }

  openPDFOpenerLocal() {
    this.fileOpener.open(this.file.applicationDirectory + 'www/assets/sample.pdf', 'application/pdf');
  }

  openPDFOpenerURL() {
    this.fileOpener.open('http://www.pdf995.com/samples/pdf.pdf', 'application/pdf');
  }
}
