import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  public id = this.route.snapshot.paramMap.get('id');
  public message: string;  
  
  public showid: number;   
  public title: string;  
  public content: string;
  public latitude: number;
  public longitude: number;
  public image: string;  
	
  ngOnInit() {
	  this.http.get('https://wf-challenge-artuan.herokuapp.com/posts/'+this.id).subscribe( data =>{ 
		this.showid = data['id'];
		this.title = data['title'];
		this.content = data['content'];
		this.latitude = Number(data['lat']);
		this.longitude = Number(data['long']);
		this.image = data['image_url'];
	 })
  }
  
  update(id){
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

		console.log(requestData);
		
		const httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json' }) };
		this.http.put("https://wf-challenge-artuan.herokuapp.com/posts/"+id, requestData,httpOptions).subscribe(
			data => 
			{
				this.message = 'Success ! Resource updated sucessfully';		
			},
			 error => 
			 {
				 this.message = 'Error ! Invalid resource data';		
			 }
		);
	}	
  }

  mapmarker($event){
	this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
  }
  
}
