import { ResourceBean } from './resource-bean';

export class ListResourceBean {

    public page:string;
    public per_page:string;
    public total:string;
    public total_pages:string;
    public data:Array<ResourceBean>;

}
