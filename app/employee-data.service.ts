import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TEmployeeData,TAddEmployee } from './employee.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  
  public base_url='https://api.onlinewebtutorblog.com';

  constructor(private http:HttpClient) { }
  public getEmployeesData(): Observable<TEmployeeData[]>{
    const observable= this.http.get<TEmployeeData[]>(`${this.base_url}/employees`); 
    return observable;
    }
  public addEmployee(employee:TAddEmployee ): Observable<TEmployeeData>{
    return this.http.post<TEmployeeData>(`${this.base_url}/employees`,employee);

  }
  public getEmployeeDetailesById(id: number): Observable<TEmployeeData> {
    const es= this.http.get<TEmployeeData>(`${this.base_url}/employees/${id}`);
    return es;
  }
  public removeEmployee(id: number):Observable<TEmployeeData> {
    return this.http.delete<TEmployeeData>(`${this.base_url}/employees/${id}`);
  }
 
  public editEmployeeById(id: number,content:TEmployeeData): Observable<TEmployeeData> {
    return this.http.put<TEmployeeData>(`${this.base_url}/employees/${id}`,content);
  }
}
