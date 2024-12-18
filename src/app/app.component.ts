import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importar los módulos necesarios

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  [x: string]: any;
 
  profileForm!: FormGroup;

  
  images: string[] = [
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWJnYTFkcHkwbmZ5YnRxYTZrOHU1OTl5OW1zcmt2eTJpNGtldXRyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/noKPfoiakFXsk/giphy.webp', // Chica anime con fondo rosa
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExczk4dHpkbDRoaDNmdnI2MHlnODZyOHN1MHB1NXpvcmJkMmFyd2UyMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12K8GGWstl229G/giphy.webp', // Samurai anime
    'https://i.giphy.com/ayMW3eqvuP00o.webp', // Guerrero con espada
    'https://i.giphy.com/jOZt5tdGYxzz0H6Nfi.webp', // Personaje anime con armadura
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3NmdGU4b3lobTlzOTViM2Y1dTIzNmd1ZGw4aTRqNmJwa2R4anMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jqpS1l9avo7GEpa74Q/giphy.webp', // Estudiante anime
    'https://i.giphy.com/ADSJHOoIvyjKM.webp'  // Chica con paisaje
];


  
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '480px', numVisible: 1, numScroll: 1 }
  ];

  
  constructor(private fb: FormBuilder) {}

  
  ngOnInit() {
    
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue] 
    });
  }

  
  onSubmit() {
    if (this.profileForm.valid) {
      console.log("Formulario enviado:", this.profileForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}
