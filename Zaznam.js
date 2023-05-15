'use strict';

/**
 * Třída eviduje jednotlivé záznamy evidence pojištění
 * Instance této třídy se tvoří s následujícími parametry:
 * @param {string} jmeno Křestní jméno pojištěnce
 * @param {string} prijmeni Příjmení pojištěnce
 * @param {number} telefon Telefonní číslo pojištěnce
 * @param {number} vek Věk pojištěnce
 */
class Zaznam {
    constructor(jmeno, prijmeni, telefon, vek) {
        this.jmeno = jmeno;
        this.prijmeni = prijmeni;
        this.telefon = telefon;
        this.vek = vek;
    }

    /**
     * Metoda pro převod instance třídy Zaznam do stringu
     * @returns Výpis parametrů ve formátu: jmeno, prijmeni, telefon, vek.
     */
    toString() {
        //do konzole? nebo do webu?
        let zaznamString = `${this.jmeno}, ${this.prijmeni}, ${this.telefon}, ${this.vek}.`;
        return zaznamString; //nechat jen zde
    }
}
