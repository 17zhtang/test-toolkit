export interface getTestAccountsRquestData {
  account: string;
  environment: string;
	detail:string;
	creator:string;
}

export interface ResponseData {
  code: number;
  message: string;
}

export interface testAccountRecord {
	id: string;
	account: string;
	environment: number;
	detail: string;
	creatorId: number;
	creator: string;
}

export interface testAccountRecords {
	records:testAccountRecord[];
	total:number;
	size:number;
	current:number;
	orders:any;
	optimizeCountSql:boolean;
	searchCount:boolean;
	maxLimit:any;
	countId:any;
	pages:number;
} 

export interface getTestAccountsResponseData extends ResponseData {
  data: testAccountRecords;
}