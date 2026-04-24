import * as Phaser from 'phaser';
import { GameObject, type GameObjectConfig } from './GameObject';
import { BASKET_CONFIG } from '../constants/GameObjects.ts';
import { PHYSICS_CONFIG } from '../constants/Physics.ts';
import { ASSET_CONFIG } from '../constants/Assets.ts';


export class Basket extends GameObject {
    private moveSpeed: number;

    constructor(scene: Phaser.Scene, moveSpeed: number) {
        const config: GameObjectConfig = {
            x: BASKET_CONFIG.START_X,
            y: BASKET_CONFIG.START_Y,
            width: BASKET_CONFIG.WIDTH,
            height: BASKET_CONFIG.HEIGHT,
            color: BASKET_CONFIG.COLOR,
            textureKey: ASSET_CONFIG.BASKET.textureKey || undefined,
        };

        super(scene, config);
        this.moveSpeed = moveSpeed;
        this.setupPhysics();
    }

    private setupPhysics(): void {
        const body = this.sprite.body as Phaser.Physics.Arcade.Body;
        body.setCollideWorldBounds(true);
        body.setBounce(PHYSICS_CONFIG.BOUNCE);
        body.setDrag(PHYSICS_CONFIG.FRICTION);
    }

    public moveLeft(): void {
        const body = this.sprite.body as Phaser.Physics.Arcade.Body;
        body.setVelocityX(-this.moveSpeed);
    }

    public moveRight(): void {
        const body = this.sprite.body as Phaser.Physics.Arcade.Body;
        body.setVelocityX(this.moveSpeed);
    }

    public stop(): void {
        const body = this.sprite.body as Phaser.Physics.Arcade.Body;
        body.setVelocityX(0);
    }

    public update(): void {
        // Basket update logic if needed
    }
}
