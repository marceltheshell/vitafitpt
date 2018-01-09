import { Injectable } from '@angular/core';

@Injectable()
export class HttpClientService {

  cars = [
    'Ford','Chevrolet','Buick'
  ];

  constructor() { }

}
