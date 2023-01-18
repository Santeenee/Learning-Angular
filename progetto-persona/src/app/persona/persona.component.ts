import { Component, Input } from '@angular/core';

class Persona {
  nominativo: string | undefined;
  importo: number = 0;
}

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  persona!: Persona;

  constructor() {
    this.persona = { nominativo: '', importo: 0 };
    this.persone.push({ nominativo: 'eta beta', importo: 10 });
    this.persone.push({ nominativo: 'topolino', importo: -10 });
  }

  persone: Persona[] = [
    {
      nominativo: 'Gianalberto',
      importo: 777,
    },
    {
      nominativo: 'Franco',
      importo: -888,
    },
    {
      nominativo: 'Il mio conto revolut',
      importo: 12,
    },
  ];

  add(nome: string, importo: number) {
    const inputObj: Persona = { nominativo: nome, importo };
    this.persone.push(inputObj);
  }

  @Input() inputNome!: string;
  @Input() inputImporto!: number;
}
