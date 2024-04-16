class Animales {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._imagen = imagen;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }

  get nombre() {
    return this._nombre;
  }

  get imagen() {
    return this._imagen;
  }

  get sonido() {
    return this._sonido;
  }

  get comentarios() {
    return this._comentarios;
  }

  get edad() {
    return this._edad;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  set imagen(nuevaImagen) {
    this._imagen = nuevaImagen;
  }

  set sonido(nuevoSonido) {
    this._sonido = nuevoSonido;
  }

  set comentarios(nuevosComentarios) {
    this._comentarios = nuevosComentarios;
  }

  set edad(nuevaEdad) {
    this._edad = nuevaEdad;
  }
}

class Leon extends Animales {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }

  rugir() {
    const audio = new Audio(this._sonido);
    audio.play();
  }
}

class Lobo extends Animales {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }

  aullar() {
    const audio = new Audio(this._sonido);
    audio.play();
  }
}

class Oso extends Animales {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }

  grunir() {
    const audio = new Audio(this._sonido);
    audio.play();
  }
}

class Serpiente extends Animales {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }

  sisear() {
    const audio = new Audio(this._sonido);
    audio.play();
    console.log(this._sonido);
  }
}

class Aguila extends Animales {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }

  chillar() {
    const audio = new Audio(this._sonido);
    audio.play();
  }
}

export { Animales, Leon, Lobo, Oso, Serpiente, Aguila };
