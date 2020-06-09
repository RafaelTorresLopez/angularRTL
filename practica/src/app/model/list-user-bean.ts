import { UserBean } from './user-bean';

export class ListUserBean {

    public page:string;
    public per_page:string;
    public total:string;
    public total_pages:string;
    public data:Array<UserBean>;

}
