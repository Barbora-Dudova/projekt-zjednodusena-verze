'use strict';

/**
 * Třída pro práci se záznamy pojištěnců
 */
class SeznamPojistencu {
    constructor() {
        const zaznamyStorage = localStorage.getItem("zaznamyPojistencu");
        this.zaznamy = zaznamyStorage ? JSON.parse(zaznamyStorage) : [];

        this.jmenoInput = document.getElementById("jmeno");
        this.prijmeniInput = document.getElementById("prijmeni");
        this.vekInput = document.getElementById("vek");
        this.telefonInput = document.getElementById("telefon");
        this.ulozitButton = document.getElementById("ulozit");

        this.vypisElement = document.getElementById("vypisSeznamuPojistencu");

        this._nastavZaznamy();
    }

    /**
     * Metoda pro vytvoření nové instance třídy Zaznam, uložení tohoto záznamu do pole zaznamy a vypsání záznamu do tabulky
     */
    _nastavZaznamy() {
        this.ulozitButton.onclick = () => {
            const zaznam = new Zaznam(this.jmenoInput.value, this.prijmeniInput.value, this.telefonInput.value, this.vekInput.value);
            this.zaznamy.push(zaznam);
            this.ulozZaznamy();
            this.vypisZaznamy();
        }
    }

    /**
     * Metoda pro vypsání záznamů do tabulky a přidání tlačítka smazat do poslední buňky tabulky s třídou proTlacitka
     */
    vypisZaznamy() {
        this.vypisElement.innerHTML = "";
        for (let i = 0; i < this.zaznamy.length; i++) {
            const zaznam = this.zaznamy[i];

            this.vypisElement.innerHTML += `<tr><td>${zaznam.jmeno} ${zaznam.prijmeni}</td> <td>${zaznam.telefon}</td> <td>${zaznam.vek}</td>`;
        }
    }

    /**
     * Metoda pro uložení instancí třídy Zaznam do local storage
     */
    ulozZaznamy() {
        localStorage.setItem("zaznamyPojistencu", JSON.stringify(this.zaznamy));
    }
}