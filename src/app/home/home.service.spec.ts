import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { CoreModule, HttpCacheService } from '@app/core';
import { HomeService } from './home.service';

describe('HomeService', () => {
  let homeService: HomeService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [HttpCacheService, HomeService]
    });
  }));

  beforeEach(inject(
    [HttpCacheService, HomeService, HttpTestingController],
    (
      htttpCacheService: HttpCacheService,
      _homeService: HomeService,
      _httpMock: HttpTestingController
    ) => {
      homeService = _homeService;
      httpMock = _httpMock;

      htttpCacheService.cleanCache();
    }
  ));

  afterEach(() => {
    httpMock.verify();
  });

  //   describe('getRandomQuote', () => {
  //     it('should return a random Chuck Norris quote', () => {
  //       // Arrange
  //       const mockQuote = { value: 'a random quote' };

  //       // Act
  //       const randomQuoteSubscription = homeService.getRandomQuote({
  //         category: 'toto'
  //       });

  //       // Assert
  //       randomQuoteSubscription.subscribe((quote: string) => {
  //         expect(quote).toEqual(mockQuote.value);
  //       });
  //       httpMock.expectOne({}).flush(mockQuote);
  //     });

  //     it('should return a string in case of error', () => {
  //       // Act
  //       const randomQuoteSubscription = homeService.getRandomQuote({
  //         category: 'toto'
  //       });

  //       // Assert
  //       randomQuoteSubscription.subscribe((quote: string) => {
  //         expect(typeof quote).toEqual('string');
  //         expect(quote).toContain('Error');
  //       });
  //       httpMock.expectOne({}).flush(null, {
  //         status: 500,
  //         statusText: 'error'
  //       });
  //     });
  //   });
});
