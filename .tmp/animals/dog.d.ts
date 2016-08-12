import * as interf from '../interfaces/animal';
export declare class Dog implements interf.IAnimal {
    name: string;
    move(steps: number): boolean;
}
