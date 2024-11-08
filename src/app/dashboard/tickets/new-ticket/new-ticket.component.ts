import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
  viewChildren,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // @ViewChildren(ButtonComponent) private buttons?: ElementRef<HTMLElement>;
  //  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter();
  enteredTitle = '';
  enteredText = '';
  add = output<{ title: string; text: string }>();

  ngOnInit() {
    console.log('On init');
    console.log(this.form?.nativeElement);
    // console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('After view init');
    console.log(this.form?.nativeElement);
    // console.log(this.form().nativeElement);
  }

  // onsubmit(title: string, ticketText: string, form:HTMLFormElement) {
  //   console.log(title)
  //   console.log(ticketText)
  //   form.reset();
  // }

  // onsubmit(title: string, ticketText: string) {
  //   console.log(title);
  //   console.log(ticketText);
  //   this.form?.nativeElement.reset();
  //   this.form().nativeElement.reset();
  // }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
