import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(3)]],
      logo: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.maxLength(200)]],
      fechaLiberacion: ['', Validators.required],
      fechaRestauracion: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('submit', this.registroForm);
  }
}
