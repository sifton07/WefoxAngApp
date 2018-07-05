import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
	
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  public id = this.route.snapshot.paramMap.get('id');
  public showtitle: string;  
  public showcontent: string;
  public showlat: number;
  public showlong: number;
  public showimage: string;  
	
  ngOnInit() {
	  this.http.get('https://wf-challenge-artuan.herokuapp.com/posts/'+this.id).subscribe( data =>{ 
		this.showtitle = data['title'];
		this.showcontent = data['content'];
		this.showlat = Number(data['lat']);
		this.showlong = Number(data['long']);
		this.showimage = data['image_url'];
	 })
  }
  
}
