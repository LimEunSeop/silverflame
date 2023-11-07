import moment, { Moment, MomentInput } from 'moment-timezone'

export const isServer = () => typeof window === 'undefined'

export const momentHere = (input: MomentInput) => moment.utc(input).tz(moment.tz.guess())
