import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";

interface User {
    email: string;
    role: 'admin' | 'proveedor' | 'user';
    createdAt: Date;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private fireauth: AngularFireAuth,
        private firestore: AngularFirestore,
        private router: Router
    ) {}

    async register(email: string, password: string, role: 'admin' | 'proveedor' | 'user') {
        try {
            const result = await this.fireauth.createUserWithEmailAndPassword(email, password);
            if (result.user) {
                // Guardar rol en Firestore con tipado explícito
                await this.firestore.collection<User>('users')
                    .doc(result.user.uid)
                    .set({
                        email: email,
                        role: role,
                        createdAt: new Date()
                    });
                
                alert('Registro exitoso');
                this.router.navigate(['/login']);
            }
        } catch (err: any) {
            alert(err.message);
        }
    }

    async login(email: string, password: string) {
        try {
            const result = await this.fireauth.signInWithEmailAndPassword(email, password);
            if (result.user) {
                // Obtener rol del usuario con tipado seguro
                const userDoc = await this.firestore.collection<User>('users')
                    .doc(result.user.uid)
                    .get()
                    .toPromise();
                
                const userData = userDoc?.data();
                if (userData) {
                    localStorage.setItem('token', 'true');
                    localStorage.setItem('userRole', userData.role);
                }
                
                // Redirigir según el rol
                switch (userData?.role) {
                    case 'admin':
                        this.router.navigate(['/admin-dashboard']);
                        break;
                    case 'proveedor':
                        this.router.navigate(['/proveedor-dashboard']);
                        break;
                    case 'user':
                        this.router.navigate(['/user-dashboard']);
                        break;
                    default:
                        this.router.navigate(['/home']);
                }
            }
        } catch (err: any) {
            alert('Error al iniciar sesión');
            this.router.navigate(['/login']);
        }
    }

    logout() {
        this.fireauth.signOut().then(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('userRole');
            this.router.navigate(['/home']);
        });
    }

    getUserRole(): string {
        return localStorage.getItem('userRole') || 'user';
    }

    hasRole(allowedRoles: string[]): boolean {
        const userRole = this.getUserRole();
        return allowedRoles.includes(userRole);
    }
}