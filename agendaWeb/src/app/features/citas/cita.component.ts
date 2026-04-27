import {Component} from '@angular/core';
import {CitaService} from "../../core/services/cita.service";
import {Cita} from "../../core/models/cita.models";

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [],
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent {
  citas: Cita[] = [];

  constructor(private citaService: CitaService) {
   
  }
    ngOnInit() {
        this.citaService.getCitas().subscribe(citas => {
            this.citas = citas;
                console.log('Citas Recibidas:', this.citas);
            }, error => {            
                console.error('Error al obtener las citas:', error);
            }
        );
    }
}   