import {Component} from '@angular/core';
import { VisitanteService } from '../../core/services/visitante.service';
import { Visitante } from '../../core/models/visitate.model';

@Component({
  selector: 'app-visitante',
  standalone: true,
  imports: [],
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.css']
})
export class VisitanteComponent {
  visitantes: Visitante[] = [];

  constructor(private visitanteService: VisitanteService) {
   
  }
    ngOnInit() {
        this.visitanteService.getVisitantes().subscribe(visitantes => {
            this.visitantes = visitantes;
                console.log('Visitantes Recibidos:', this.visitantes);
            }, error => {            
                console.error('Error al obtener los visitantes:', error);
            }
        );
    }
}