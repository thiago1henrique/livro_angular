import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {HomeComponent} from './home/home.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatButton, MatSlideToggleModule, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
