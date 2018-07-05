import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list : Object;
  resourcemessage : string;
  resourcetitle : string;
  resourceid : number;
  removestatus : boolean;
  
  constructor(private http: HttpClient){ }
  ngOnInit() { 
	this.http.get('https://wf-challenge-artuan.herokuapp.com/posts').subscribe(data => {
	  this.list = data;
	});
  }
  
  removeresource(id,title){	 
	  this.resourcemessage = 'Are you sure you want to remove this resource ?';
	  this.resourcetitle = title;
	  this.resourceid = id;
  }
  
  remove(id){	  
	  this.http.delete("https://wf-challenge-artuan.herokuapp.com/posts/"+id).subscribe(
			data => 
			{
				 this.resourcemessage = 'Success ! Resource is deleted sucessfully !';	
				 this.removestatus = true;
			},
			 error => 
			 {
				  this.resourcemessage = 'Error ! Failed to deleted the resource !';	
				  this.removestatus = false;				  
			 }
		);
  }

}
