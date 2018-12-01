  import { Component, OnInit } from '@angular/core';
  import { BackendService } from '../../services/backend.service';

  @Component({
    selector: 'app-contents',
    templateUrl: './contents.component.html',
    styleUrls: ['./contents.component.scss']
  })
  
  export class ContentsComponent {
  
    planet: string = 'PLANETS';
    people: string = 'PEOPLE';
    title: string = 'title: single line output';
    subtitle: string;
    data: {
      search: string,
      header: string,
      content: string,
      class: string,
    } = {
      search: 'Search for a contact...',
      header: 'data.header info',
      content: 'data.content info',
      class: 'search',
    };
    
    formData: {
      name: string,
      email: string,
      class: string,
    } = {
      name: '',
      email: '',
      class: 'test',
    }
  
    planets: any[];
    characters: any[];
  
    constructor(private backend: BackendService) {
      const subtitle: string = 'subtitle: in constructor this.subtitle = subtitle to outside subtitle';
      this.subtitle = subtitle;
  
      this.data.content = 'this.data.content in constructor'
      this.characters = this.backend.characters;
      
      this.backend.addCharacters({ name: 'ed', height: 177, mass: 77, hair_color: 'black', eye_color: 'brown', species: 'human', character: 'https://swapi.co/api/people/1/',
      homeworld: 'https://swapi.co/api/planets/10/',
     });
      
      this.planets = this.backend.planets;
  
      this.backend.addPlanets({ name: 'Earth', terrain: 'oceans, mountains, grasslands, forests', population: '800 Billion', url: 'https://swapi.co/api/planets/1/'})
      
      this.characters.push({ name: 'baseem', height: 177, mass: 77, hair_color: 'black',  eye_color: 'brown', species: 'human', character: 'https://swapi.co/api/people/1/',
      homeworld: 'https://swapi.co/api/planets/12/',
     });
  
     for(let i=1; i<88; i++){
      this.backend.getCharacter(i)
      .then((data) => {
        console.log(data);
        this.characters.push(data)
      });
     }
  
     for(let i=1; i<62; i++){
       this.backend.getPlanet(i)
       .then((data) => {
         console.log(data);
         this.planets.push(data)
       })
     }
    }
  
  }
    // Notes for creating sorting function:
    // Per project requirement, There should be a list of contacts in alphabetical order -
    // Jason Sewell
    // Jason Statham
    // Jason Voorhees
    // Since we have an array of contacts, create a function name 
    // "alphaSort" then give it an argument "result" then use it as result.sort
    // then pass an ES6 style function that takes arguments a and b and compare them
    // It should return something negative if first argument is less 
    // than second (should be placed before the second in resulting array)
    // something positive if first argument is greater (should be placed after second one)
    // then return 0 if those two elements are equal.
    // In our case if two elements are a and b we want to compare a.first_name and b.first_name
    //  alphaSort(result) {
    //   this.contacts = result.sort((a, b) => {
    //     if(a.name < b.name) { 
    //       return -1; 
    //     }
    //     if(a.name > b.name) { 
    //       return 1; 
    //     }
    //     return 0;
    //   });
    // }
  
    // ngOnInit() {     
    //   this.backend.getContents()
    //     .then(result => {
    //       this.alphaSort(result)
    //     })
        
    // } // ngOnInit
   // export class