export const PHYSICS_CONFIG = {
    GRAVITY_Y: 300,
    BOUNCE: 0.2,
    FRICTION: 0.99,
    COLLISION_ENABLED: true,
} as const;

export const COLLISION_GROUPS = {
    BASKET: 'basket',
    FRUIT: 'fruit',
    WORLD_BOUNDS: 'worldBounds',
} as const;
