import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  })
 
  
);

 
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
 
});
