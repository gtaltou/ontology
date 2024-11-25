import { Component, OnInit } from '@angular/core';
import { TenantService } from '../../core/services/tenant.service';
import { Tenant } from '../../core/models/tenant.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tenants: Tenant[] = [];
  selectedTenant: string = 'admin';
  profiles: string[] = ['profil1', 'profil2', 'profil3'];
  selectedProfile: string = 'profil1';

  constructor(private tenantService: TenantService) {}

  ngOnInit(): void {
    this.tenantService.getTenants().subscribe((tenants) => {
      this.tenants = tenants;
    });
  }
}
