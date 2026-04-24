export class ScoreManager {
    private score: number;
    private onScoreChange: ((score: number) => void) | null = null;

    constructor(initialScore: number = 0) {
        this.score = initialScore;
    }

    public addScore(points: number): void {
        this.score += points;
        if (this.onScoreChange) {
            this.onScoreChange(this.score);
        }
    }

    public getScore(): number {
        return this.score;
    }

    public reset(): void {
        this.score = 0;
        if (this.onScoreChange) {
            this.onScoreChange(this.score);
        }
    }

    public onScoreChanged(callback: (score: number) => void): void {
        this.onScoreChange = callback;
    }
}
