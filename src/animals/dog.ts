import * as interf from '../interfaces/animal';

export class Dog implements interf.IAnimal {
    public name = 'Dog';

    public move(steps: number) {
        console.log('You move ' + this.name + ' ' + steps + ' steps...');
        return true;
    }
}
