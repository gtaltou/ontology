import { Injectable } from '@angular/core';
import { Tenant } from '../models/tenant.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  private tenants: Tenant[] = [
    { id: 'admin', name: 'Admin' },
    { id: 'tenant1', name: 'Tenant 1' },
    { id: 'tenant2', name: 'Tenant 2' },
    { id: 'tenant3', name: 'Tenant 3' },
  ];

  getTenants(): Observable<Tenant[]> {
    return of(this.tenants);
  }
}
