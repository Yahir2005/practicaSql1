import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Visitante } from "../models/visitate.model";

@Injectable({
    providedIn: 'root'
})
export class VisitanteService {
    private apiUrl = 'http://localhost:3000/api/visitantes';

    constructor(private http: HttpClient) {}

    getVisitantes(): Observable<Visitante[]> {
        return this.http.get<Visitante[]>(this.apiUrl);
    }

    getVisitanteById(id: number): Observable<Visitante> {
        return this.http.get<Visitante>(`${this.apiUrl}/${id}`);
    }

    createVisitante(visitante: Visitante): Observable<Visitante> {
        return this.http.post<Visitante>(this.apiUrl, visitante);
    }

    updateVisitante(id: number, visitante: Visitante): Observable<Visitante> {
        return this.http.put<Visitante>(`${this.apiUrl}/${id}`, visitante);
    }

    deleteVisitante(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}