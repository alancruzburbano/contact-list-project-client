import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact/contact.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {  
  contacts: Array<any>;  
  results: Object;   
  itemsNumber;

  constructor(private contactService: ContactService, private sanitizer:DomSanitizer) { }    

  ngOnInit() {
    this.itemsNumber = '5';
  }

  readDataFrom(origin){
    this.contactService.getAll(origin).subscribe(data =>{         
      this.contacts = data;      
    });
  }

  sanitizeAvatarUrl(urlAvatar){
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlAvatar);
  }

}
