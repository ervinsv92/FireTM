import { CodeFont } from "./CodeFont";

export class Task{
    id:string;
    code:number;
    description:string;
    taskType:string;
    taskRevition:number;
    estimateTime:number;
    priority:number;
    status:string;
    startDate:string;
    endDate:string;
    note:string;
    sprint:number;
    fonts:CodeFont[];
}