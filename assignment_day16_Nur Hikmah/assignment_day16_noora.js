/// SOAL 1 : Membuat Class Hewan
// ============

class Hewan {

    #usia;

    constructor(nama = null, breed, usia, gender, jumlahKaki = null){

        this.nama = nama;
        this.breed = breed;
        this.#usia = usia;
        this.gender = gender;
        this.jumlahKaki = jumlahKaki;

    }

    get usia(){
        return this.#usia;
    }

    set usia(value){
        this.#usia = value;
    }

    makeSound(){
        return "";
    }

}

class Kucing extends Hewan{

    constructor(nama, breed, usia, gender){
        super(nama, breed, usia, gender, 4);
    }

    makeSound(){
        return "Meoww";
    }

}

class Anjing extends Hewan{

    constructor(nama, breed, usia, gender){
        super(nama, breed, usia, gender, 4);
    }

    makeSound(){
        return "Guguk";
    }

}

class Sapi extends Hewan{

    constructor(nama, breed, usia, gender){
        super(nama, breed, usia, gender, 4);
    }

    makeSound(){
        return "Moo";
    }

}

const kucing = new Kucing("Cimoy", "Persia", 2, "Betina");
const anjing = new Anjing("Pipen", "Beagle", 3, "Jantan");
const sapi = new Sapi("Lala", "Brahman", 5, "Betina");

console.log(kucing.makeSound()); // Meong
console.log(anjing.makeSound()); // Guk Guk
console.log(sapi.makeSound());   // Moo

console.log(kucing.usia); // 2

kucing.usia = 4;

console.log(kucing.usia); // 4


/// SOAL 2 : Perubahan Energi 
// ===================


class Orang {

  #usia;
  #gender;
  #totalEnergi;

  constructor(nama, usia, gender, totalEnergi){
    this.nama = nama;
    this.#usia = usia;
    this.#gender = gender;
    this.#totalEnergi = totalEnergi;
  }

  get usia(){
    return this.#usia;
  }
  get gender(){
    return this.#gender;
  }
  get totalEnergi(){
    return this.#totalEnergi;
  }

  set totalEnergi(value) {
    this.#totalEnergi = value;
  }

  makan(){
    if(this.#usia <= 10){
      this.#totalEnergi += 6;
    } else if(this.#usia <= 25){
      this.#totalEnergi += 4 ;
    } else {
      this.#totalEnergi += 2;
    }
  }

  tidur(jam){
    if(this.#usia <= 10){
      this.#totalEnergi += jam + 3;
    } else if(this.#usia <= 25){
      this.#totalEnergi += jam + 2 ;
    } else {
      this.#totalEnergi += jam + 1;
    }
  }

  sekolahAtauKerja(jam) {
    let energi ;

    if(this.#usia <= 10){
        energi = jam + 3;
    }else if(this.#usia <= 25){
        energi = jam + 5;
    }else{
        energi = jam + 7;
    }

    if(this.#totalEnergi >= energi){
        this.#totalEnergi -= energi;
    }else{
        console.log("Energi tidak cukup, silakan istirahat.");
    }
  }

  olahraga(jam){
    let energi;

    if(this.#usia <= 10){
        energi = jam + 2;
    }else if(this.#usia <= 25){
        energi = jam + 3;
    }else{
        energi = jam + 5;
    }

    if(this.#totalEnergi >= energi){
        this.#totalEnergi -= energi;
    }else{
        console.log("Energi tidak cukup, silakan istirahat.");
    }
  }
}

const orang1 = new Orang("Noora", 23, "Perempuan", 10);

console.log("Energi awal:", orang1.totalEnergi);

orang1.makan();
console.log("Setelah makan:", orang1.totalEnergi);

orang1.tidur(3);
console.log("Setelah tidur:", orang1.totalEnergi);

orang1.sekolahAtauKerja(5);
console.log("Setelah kerja:", orang1.totalEnergi);

orang1.olahraga(2);
console.log("Setelah olahraga:", orang1.totalEnergi);

orang1.sekolahAtauKerja(10);
console.log("Energi sekarang:", orang1.totalEnergi);