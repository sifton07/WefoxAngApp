import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http: HttpClient){ }
  ngOnInit() { }

  message : string;
  title : string;
  content : string;
  latitude : number = 50;
  longitude : number = 10;
  image : string;
  
  create() {	  
	  
	if ((this.title == null)&&(this.content == null)&&(this.latitude == null)&&(this.longitude == null)&&(this.image == null)){
		this.message = 'Please fill all the data in the form';		
	} else {
		
		var params={
			'title': this.title,
			'content': this.content,
			'lat': this.latitude,
			'long': this.longitude,
			'image_url': this.image
		}
		var requestData = {
		  'post': params
		};

		const httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json' }) };
		this.http.post("https://wf-challenge-artuan.herokuapp.com/posts/", requestData,httpOptions).subscribe(
			data => 
			{
				this.message = 'Success ! Resource created sucessfully';
			},
			 error => 
			 {
				 this.message = 'Error ! Invalid resource data';		
			 }
		);
	}
	this.title = '';
    this.content = '';
    this.latitude = 50;
    this.longitude = 10;
    this.image = '';	
  }
  
  mapmarker($event){
	this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
  }
  
}
