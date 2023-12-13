export interface CountStore {
    count: number;
    actions:{
        increament:()=> void;
        decreament:()=> void;
    }
}