import { Component } from '@angular/core';
import {FdDate, FdRangeDate} from '@fundamental-ngx/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-planner';
  tableRows = [];
  dates: FdRangeDate;
  destination;
  notes;
  showForm = false;
  files: FileList;

  submitTrip() {
    this.tableRows.push({
      dates: this.dates.start.toDateString() + ' - ' + this.dates.end.toDateString(),
      destination: this.destination,
      notes: this.notes,
      files: this.files
    });
    this.resetForm();
  }

  resetForm() {
    this.showForm = false;
    this.dates = {
      start: null,
      end: null
    };
    this.destination = '';
    this.notes = '';
    this.files = null;
  }

  download(file) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = file.name;
    a.click();
  }
}
