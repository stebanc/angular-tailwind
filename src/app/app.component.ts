import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { SettingsService } from './core/bootstrap/settings.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppSettings } from './core/settings';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatRadioModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly settings = inject(SettingsService);
  private readonly fb = inject(FormBuilder);

  form = this.fb.nonNullable.group<AppSettings>(this.settings.options);
  sendOptions() {
    const options = this.form.getRawValue();
    this.settings.setOptions(options);
    this.settings.setTheme();
  }
  ngOnInit() {
    this.settings.setTheme();
  }
  title = 'angular-material';
}
