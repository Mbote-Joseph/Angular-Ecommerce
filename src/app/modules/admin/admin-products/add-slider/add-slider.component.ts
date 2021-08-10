import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-slider',
  templateUrl: './add-slider.component.html',
  styleUrls: ['./add-slider.component.css'],
})
export class AddSliderComponent implements OnInit {
  adminAddSlider!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.adminAddSlider = this.formBuilder.group({
      slider: ['', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.adminAddSlider.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminAddSlider.invalid) {
      return;
    }
  }
}
