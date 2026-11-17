
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
AbstractControl,
FormBuilder,
ReactiveFormsModule,
ValidationErrors,
ValidatorFn,
Validators
} from '@angular/forms';
type ModoAcceso = 'login' | 'registro';
/** Datos que se enviarán al almacenamiento (sin los campos de
confirmación). */
// Define la estructura de los datos que se utilizan en el proyecto.
export interface DatosRegistro {
nombre: string;
email: string;
fechaNacimiento: string; // formato AAAA-MM-DD
password: string;
}
const PATRON_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Fecha de hoy en formato AAAA-MM-DD, según la hora local (el
formato en-CA lo produce directamente). */
function hoyISO(): string {
    return new Date().toLocaleDateString('en-CA');
}
/** La fecha de nacimiento no puede ser posterior a hoy. */
function fechaNoFutura(control: AbstractControl): ValidationErrors |
null {
const valor: string = control.value;
return valor && valor > hoyISO() ? { fechaFutura: true } : null;
}
/** Valida a nivel de grupo que dos campos tengan el mismo valor. */
function coinciden(
campo: string,
confirmacion: string,
error: string,
normalizar: (valor: string) => string = valor => valor
): ValidatorFn {
return (grupo: AbstractControl): ValidationErrors | null => {
const a = normalizar(grupo.get(campo)?.value ?? '');
const b = normalizar(grupo.get(confirmacion)?.value ?? '');
return a && b && a !== b ? { [error]: true } : null;
};
}
// Indica a Angular cómo se configura este componente y qué vista utiliza.
@Component({
selector: 'app-login',
standalone: true,
imports: [CommonModule, ReactiveFormsModule, RouterLink],
templateUrl: './login.html',
styleUrl: './login.css'
})
// Clase del componente o servicio; reúne sus datos y sus funciones.
export class Login implements OnInit {
private readonly fb = inject(FormBuilder);
private readonly route = inject(ActivatedRoute);
mensajeLogin = '';
// Se ejecuta al iniciar el componente y prepara sus datos.
ngOnInit(): void { this.modo = this.route.snapshot.data['modo'] === 'registro' ? 'registro' : 'login'; }
modo: ModoAcceso = 'login';
registroValidado = false;
/** Fecha máxima del selector de fecha de nacimiento. */
readonly hoy = hoyISO();
readonly registroForm = this.fb.nonNullable.group(
{
nombre: ['', [Validators.required, Validators.minLength(3)]],
email: ['', [Validators.required,
Validators.pattern(PATRON_EMAIL)]],
confirmarEmail: ['', Validators.required],
fechaNacimiento: ['', [Validators.required, fechaNoFutura]],
password: ['', [Validators.required, Validators.minLength(8)]],
confirmarPassword: ['', Validators.required]
},
{
validators: [
coinciden('email', 'confirmarEmail', 'emailsDistintos', v =>
v.trim().toLowerCase()),
coinciden('password', 'confirmarPassword',
'passwordsDistintas')
]
}
);
// Cambia entre el formulario de inicio de sesión y el de registro.
cambiarModo(nuevoModo: ModoAcceso): void {
this.modo = nuevoModo;
this.registroValidado = false;
}
/** Un campo se marca como inválido solo cuando el usuario ya ha
interactuado con él. */
// Comprueba si un campo tiene errores y si el usuario ya lo ha tocado.
invalido(campo: string): boolean {
const control = this.registroForm.get(campo);
return !!control && control.invalid && (control.touched ||
control.dirty);
}
/** Error de grupo (los dos valores no coinciden), mostrado una vez
tocado el campo de confirmación. */
// Comprueba si los campos de confirmación tienen valores diferentes.
noCoinciden(error: string, campoConfirmacion: string): boolean {
return this.registroForm.hasError(error) && !!
this.registroForm.get(campoConfirmacion)?.touched;
}
// Muestra el aviso correspondiente al inicio de sesión de demostración.
iniciarSesion(): void { this.mensajeLogin = 'El inicio de sesión es una demostración y todavía no está conectado a un servidor.'; }
// Comprueba el formulario y prepara los datos del nuevo usuario.
registrar(): void {
if (this.registroForm.invalid) {
this.registroForm.markAllAsTouched();
return;
}
const valores = this.registroForm.getRawValue();
const datos: DatosRegistro = {
nombre: valores.nombre.trim(),
email: valores.email.trim().toLowerCase(),
fechaNacimiento: valores.fechaNacimiento,
password: valores.password
};
this.guardarUsuario(datos);
this.registroValidado = true;
this.registroForm.reset();
}
// Punto previsto para guardar los datos del usuario.
private guardarUsuario(datos: DatosRegistro): void {
// TODO: punto de conexión con el almacenamiento elegido
// (localStorage, json-server, Firebase...).
// Nunca guardar la contraseña en texto plano.
}
}