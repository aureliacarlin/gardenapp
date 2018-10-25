import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  success = false;
  values = "";
  emailVal: string;
  passwordVal: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
    if (this.emailVal === "wer@odikepki.pr" && this.passwordVal === "test") {
      this.success = true;
    } else {
      console.log("fail");
    }
  }
}
