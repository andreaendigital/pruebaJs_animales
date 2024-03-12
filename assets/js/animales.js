// Clase Padre: Animal
class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    get Nombre() {
        return this._nombre;
    }

    get Edad() {
        return this._edad;
    }

    get Img() {
        return this._img;
    }

    get Comentarios() {
        return this._comentarios;
    }

    set Comentarios(comentarios) {
        this._comentarios = comentarios;
    }

    get Sonido() {
        return this._sonido;
    }

    set Sonido(sonido) {
        this._sonido = sonido;
    }
}

//Clase Hijo: Leon
class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, rugido) {
        super(nombre, edad, img, comentarios, sonido);
        this._img = "./assets/imgs/Leon.png";
        this._rugido = "./assets/sounds/Rugido.mp3";
    }
    get Rugido() {
        return this._rugido;
    }
    set Rugido(rugido) {
        this._rugido = rugido;
    }
}

//Clase Hijo: Lobo
class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, aullido) {
        super(nombre, edad, img, comentarios, sonido);
        this._img = "./assets/imgs/Lobo.jpg";
        this._aullido = "./assets/sounds/Aullido.mp3";
    }
    get Aullido() {
        return this._aullido;
    }
    set Aullido(aullido) {
        this._aullido = aullido;
    }
}

//Clase Hijo: Oso
class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, grunido) {
        super(nombre, edad, img, comentarios, sonido);
        this._img = "./assets/imgs/Oso.jpg";
        this._grunido = "./assets/sounds/Grunido.mp3";
    }
    get Grunido() {
        return this._grunido;
    }
    set Grunido(grunido) {
        this._grunido = grunido;
    }
}

//Clase Hijo: Serpiente
class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, sisear) {
        super(nombre, edad, img, comentarios, sonido);
        this._img = "./assets/imgs/Serpiente.jpg";
        this._sisear = "./assets/sounds/Siseo.mp3";
    }
    get Sisear() {
        return this._sisear;
    }
    set Sisear(sisear) {
        this._sisear = sisear;
    }
}

//Clase Hijo: Aguila
class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, chillar) {
        super(nombre, edad, img, comentarios, sonido);
        this._img = "./assets/imgs/Aguila.png";
        this._halar = "./assets/sounds/Chillido.mp3";
    }
    get Chillar() {
        return this._chillar;
    }
    set Chillar(chillar) {
        this._chillar = chillar;
    }
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };