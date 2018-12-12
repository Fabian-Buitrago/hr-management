import { IProject } from './project.interface';

export interface IEmployee {
    id: number;
    name: string;
    company: string,
    age: number;
    birthday: string;
    favoriteColor: IFavoriteColor;
    project: {
        id: number;
        name: string;
    };
}

export interface IFavoriteColor {
    id: number;
    name: string;
}


