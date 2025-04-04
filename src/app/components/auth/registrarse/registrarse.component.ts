import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnDestroy, OnInit {

  //TODO REGISTRO
  email: string = '';
  password: string = '';
  role: 'admin' | 'proveedor' | 'user' = 'user';

  constructor(private auth: AuthService) { }

  onSubmit() {
    this.auth.register(this.email, this.password, this.role);
  }




  // TODO MOSTRAR CONTRASEÑA
  showPass = false;

  togglePass() {
    this.showPass = !this.showPass;
  }


  // TODO IMAGENES
  imagenes = [
    'https://i.pinimg.com/736x/24/1a/33/241a33e322eade5ed3f487b2ac9ea9f5.jpg',
    'https://i.pinimg.com/236x/f8/1b/39/f81b39d7555259c63c23cca0ac0b635e.jpg',
    'https://i.pinimg.com/736x/02/aa/6f/02aa6fc8f112bce0f0fcfd47b8940666.jpg',
    'https://i.pinimg.com/736x/21/e4/ee/21e4eebb78a1febe8e8268a6c24056d8.jpg',
    'https://i.pinimg.com/736x/89/de/a2/89dea2e415fe3e3dd184269290e9dc46.jpg'
  ];

  currentImgRg = this.imagenes[0];

  private imgIn: any;
  private curretnImgID = 0;


  ngOnInit() {
    this.empezar();
  }

  ngOnDestroy() {
    if (this.imgIn) {
      clearInterval(this.imgIn)
    }
  }

  private empezar() {
    this.imgIn = setInterval(() => {
      this.curretnImgID = (this.curretnImgID + 1) % this.imagenes.length
      this.currentImgRg = this.imagenes[this.curretnImgID]
    }, 5000)
  }
}
