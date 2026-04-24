import * as Phaser from 'phaser';
import { Fruit } from './Fruit';

export class ObjectPool {
    private pool: Fruit[] = [];
    private scene: Phaser.Scene;
    private poolSize: number;

    constructor(scene: Phaser.Scene, poolSize: number = 20) {
        this.scene = scene;
        this.poolSize = poolSize;
        this.initializePool();
    }

    private initializePool(): void {
        for (let i = 0; i < this.poolSize; i++) {
            const fruit = new Fruit(this.scene, -100, -100);
            fruit.setActive(false);
            this.pool.push(fruit);
        }
    }

    public get(): Fruit | null {
        const fruit = this.pool.find((f) => !f.getActive());
        if (fruit) {
            fruit.setActive(true);
            return fruit;
        }
        return null;
    }

    public return(fruit: Fruit): void {
        fruit.setActive(false);
        fruit.setPosition(-100, -100);
        fruit.setVelocity(0, 0);
    }

    public getAll(): Fruit[] {
        return this.pool.filter((f) => f.getActive());
    }

    /** Returns all fruits in the pool, regardless of active state. */
    public getPool(): Fruit[] {
        return this.pool;
    }

    public destroy(): void {
        this.pool.forEach((fruit) => fruit.destroy());
        this.pool = [];
    }
}
