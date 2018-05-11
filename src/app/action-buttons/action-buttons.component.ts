import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { ServicesService } from '../services/service.service';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.sass'],
  providers: [ServicesService]
})
export class ActionButtonsComponent implements OnInit {
  toppings = new FormControl();
  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  optionsSelect=[]
  groupOptionsSelect=[]
  emailForm:FormGroup

  constructor(private _service:ServicesService) { }

  ngOnInit() {
      this.emailForm = new FormGroup({
        'name': new FormControl("",[
            Validators.required,
            Validators.maxLength(100)
        ]),
        'city': new FormControl("",[
            Validators.required,
            Validators.maxLength(100)
        ]),
        'phone': new FormControl("",[
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(15)
        ]),
        'email': new FormControl("",[
            Validators.required,
            Validators.maxLength(150)
        ]),
        'message': new FormControl("",[
            Validators.required,
            Validators.maxLength(280)
        ]),
        'option': new FormControl("", Validators.required)
      })

      this.groupOptionsSelect = [
          { value: '', label: 'DOOR AND WINDOW SCREENS', group: true },
          { value: 'Retractable Screen Doors', label: 'Retractable Screen Doors' },
          { value: 'Sliding Screen Doors', label: 'Sliding Screen Doors' },
          { value: 'Swinging Screen Doors', label: 'Swinging Screen Doors' },
          { value: 'Pet Doors', label: 'Pet Doors' },
          { value: 'Window Screen Repair', label: 'Window Screen Repair' },
          { value: 'Solar Screens', label: 'Solar Screens' },
          { value: '', label: 'CHIMNEY SERVICES', group: true },
          { value: 'Chimney Inspection', label: 'Chimney Inspection' },
          { value: 'Chimney Cleaning', label: 'Chimney Cleaning' },
          { value: 'Chimney Repair', label: 'Chimney Repair' },
          { value: 'Masonry Services', label: 'Masonry Services' },
          { value: 'Dryer Vent Cleaning', label: 'Dryer Vent Cleaning' },
          { value: '', label: 'SECURITY DOORS AND WINDOWS', group: true },
          { value: 'Steel Security Doors', label: 'Steel Security Doors' },
          { value: 'Viewguard', label: 'Viewguard' },
          { value: 'Tru-View', label: 'Tru-View' },
          { value: 'Tru-Frame', label: 'Tru-Frame' },
          { value: 'Sliding Security Doors', label: 'Sliding Security Doors' },
          { value: 'CRL Guarda Quick Escape', label: 'CRL Guarda Quick Escape' },
          { value: 'CRL Guarda Fixed', label: 'CRL Guarda Fixed' },
          { value: 'CRL Guarda Casement', label: 'CRL Guarda Casement' },
          { value: '', label: 'AWNINGS', group: true },
          { value: 'Retractable Pation Awnings', label: 'Retractable Pation Awnings' },
          { value: 'Drop Roll Sunscreens', label: 'Drop Roll Sunscreens' },
          { value: 'Door and Window Awnings', label: 'Door and Window Awnings' },
      ];

      this.growActionBtns();

      if (screen.width < 992) {
          document.getElementById('desktop-only').style.display="none";
      }
  }

  get name(){
    return this.emailForm.get("name")
  }
  get city(){
    return this.emailForm.get("city")
  }
  get phone(){
    return this.emailForm.get("phone")
  }
  get email(){
    return this.emailForm.get("email")
  }
  get message(){
    return this.emailForm.get("message")
  }
  get option(){
    return this.emailForm.get("option")
  }

  handleSubmit(event:any, emailDir:NgForm, emailForm:FormGroup){
    event.preventDefault()
    if (emailDir.submitted){
        console.log(emailForm.value)
        let name = emailForm.value['name']
        let city = emailForm.value['city']
        let phone = emailForm.value['phone']
        let email = emailForm.value['email']
        let message = emailForm.value['message']
        let option = emailForm.value['option']
        this._service.create(name, city, phone, email, message, option).subscribe(data=>{
          console.log(data)
        })
        emailDir.resetForm({})
    }

  }

  hideShowSearch(){
      var searchInput = document.getElementById('search-input');

      document.getElementById('search-button').classList.toggle("orange");

      if (searchInput.style.display === "none") {
          searchInput.style.display="inline";
          searchInput.style.width="100%";
      } else {
          searchInput.style.display="none"
      }

  }

  growActionBtns(){
      if(screen.width < 992){
        var container = document.getElementById('action-buttons-container');
        container.classList.remove('container', 'mt-3');
        container.classList.add('row');
      }
  }


}
