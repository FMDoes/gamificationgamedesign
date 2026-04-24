export const BASKET_CONFIG = {
    WIDTH: 80,
    HEIGHT: 80,
    COLOR: 0xff9900,
    START_X: 400,
    START_Y: 550,
} as const;

export const FRUIT_CONFIG = {
    WIDTH: 20,
    HEIGHT: 20,
    COLOR: 0xff0000,
    SPAWN_Y: 0,
    SPAWN_RANGE: 800,
    POINTS: 10,
} as const;

export const TEXT_CONFIG = {
    SCORE_FONT_SIZE: '32px',
    SCORE_COLOR: '#ffffff',
    SCORE_X: 20,
    SCORE_Y: 20,
    TIMER_FONT_SIZE: '32px',
    TIMER_COLOR: '#ffffff',
    TIMER_X: 700,
    TIMER_Y: 20,
    GAME_OVER_FONT_SIZE: '48px',
    GAME_OVER_COLOR: '#ffffff',
} as const;
