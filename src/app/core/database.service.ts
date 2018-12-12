import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DatabaseService implements InMemoryDbService {
  createDb() {
    const colors = [
        { id: 1, name: 'black' },
        { id: 2, name: 'blue' },
        { id: 3, name: 'green' },
        { id: 4, name: 'pink' },
        { id: 5, name: 'red' },
        { id: 6, name: 'white' },
        { id: 7, name: 'yellow' },
      ];
  
      const employees = [
        {
          id: 1,
          name: "Jorge Hurtado",
          company: "Company 1",
          age: 33,
          birthday: new Date(),
          favoriteColor: { 
            id: 1, 
            name: 'black' 
          },
          project: { 
            id: 1, 
            name: 'Project 1' 
          }
        }
      ];
  
      const projects = [
        { id: 1, name: 'Project 1', teamSize: 1, clientName: "TCC" },
        { id: 2, name: 'Project 2', teamSize: 0, clientName: "MSI" },
        { id: 3, name: 'Project 3', teamSize: 0, clientName: "Brainshark" },
        { id: 4, name: 'Project 4', teamSize: 0, clientName: "IMS" },
        { id: 5, name: 'Project 5', teamSize: 0, clientName: "Apex" },
        { id: 6, name: 'Project 6', teamSize: 0, clientName: "Apex" }
      ];
  
      return { colors, employees, projects };
  }
}