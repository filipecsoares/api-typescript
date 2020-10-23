export class CachePolicy {
    private static maxAgeDays = 3
    private constructor () {}

    static validate (timestamp: Date, date: Date): boolean {
        const maxAge = new Date(timestamp)
            maxAge.setDate(maxAge.getDate() + CachePolicy.maxAgeDays)
            return maxAge > date
    }
}