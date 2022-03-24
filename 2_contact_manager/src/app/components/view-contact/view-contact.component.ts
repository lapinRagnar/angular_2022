import { ContactService } from 'src/app/services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/models/IContact';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  public loading: boolean = false;
  public contactId: string | null = null 
  public contact: IContact = {} as IContact
  public errorMessage: string | null = null

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((param) => {
      this.contactId = param.get('contactId')
    })

    console.log("le contactId " + this.contactId );
    

    if (this.contactId) {
      
      this.loading = true
      this.contactService.getContact(this.contactId).subscribe((data) => {

        this.contact = data
        this.loading = false

        console.log(data);
        console.log(this.loading);
        
      }, (error) => {

        this.errorMessage = error
        this.loading = false
        
      })

    }

  }

  public isNotEmpty() {
    return Object.keys(this.contact).length > 0
  }

}
