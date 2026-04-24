import * as Phaser from 'phaser';
import { GameObject, type GameObjectConfig } from './GameObject';
import { FRUIT_CONFIG } from '../constants/GameObjects.ts';
import { PHYSICS_CONFIG } from '../constants/Physics.ts';
import { ASSET_CONFIG } from '../constants/Assets.ts';

export class Fruit extends GameObject {
    private points: number;
    private isActive: boolean;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        const config: GameObjectConfig = {
            x,
            y,
            width: FRUIT_CONFIG.WIDTH,
            height: FRUIT_CONFIG.HEIGHT,
            color: FRUIT_CONFIG.COLOR,
            textureKey: ASSET_CONFIG.FRUIT.textureKey || undefined,
        };

        super(scene, config);
        this.points = FRUIT_CONFIG.POINTS;
        this.isActive = true;
        this.setupPhysics();
    }

    private setupPhysics(): void {
        const body = this.sprite.body as Phaser.Physics.Arcade.Body;
        body.setCollideWorldBounds(false);
        body.setBounce(PHYSICS_CONFIG.BOUNCE);
    }

    public setFallSpeed(speed: number): void {
        const body = this.sprite.body as Phaser.Physics.Arcade.Body;
        body.setVelocityY(speed);
    }

    public getPoints(): number {
        return this.points;
    }

    public isOutOfBounds(): boolean {
        return this.sprite.y > this.scene.cameras.main.height;
    }

    public setActive(active: boolean): void {
        this.isActive = active;
        this.sprite.setActive(active);
        this.sprite.setVisible(active);
        const body = this.sprite.body as Phaser.Physics.Arcade.Body | null;
        if (body) {
            body.enable = active;
            if (!active) {
                body.setVelocity(0, 0);
            }
        }
    }

    public getActive(): boolean {
        return this.isActive;
    }

    public update(): void {
        if (this.isOutOfBounds()) {
            this.setActive(false);
        }
    }
}
