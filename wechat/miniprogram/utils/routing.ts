export namespace routing {
    // driving页面跳转
    export interface DrivingOpts {
        trip_id: string
    }
    export function driving(opt: DrivingOpts) {
        return `/pages/driving/driving?trip_id=${opt.trip_id}`
    }

    // lock页面跳转
    export interface LockOpts {
        car_id: string
    }
    export function lock(opt: LockOpts) {
        return `/pages/lock/lock?car_id=${opt.car_id}`
    }

    // register页面跳转
    export interface RegisterOpts {
        redirect?: string
    }
    export interface RegisterParams {
        redirectUrl: string
    }
    export function register(p?: RegisterParams) {
        const page = '/pages/register/register'
        if (!p) {
            return page
        }
        return `${page}?redirect=${encodeURIComponent(p.redirectUrl)}`
    }

    // index->mytrips pages
    export function mytrips() {
        return '/pages/trips/trips'
    }
}