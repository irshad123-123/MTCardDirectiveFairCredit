import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor() { }

  @HostListener('keyup', ['$event'])
  cardValidate(eve : Event){
    let InputControl = eve.target as HTMLInputElement
    this.createErrorContainer(InputControl)
    // let val = InputControl.value.trim()
    let val : string = InputControl.value.replace(/\s+/g, '')
    console.log(val, val.length);
    if(val.length>16){
      val = val.substring(0, 16)
    }


      if(/[^\d]/.test(val)){
        InputControl.nextElementSibling?.classList.remove('d-none')
  }else{
          InputControl.nextElementSibling?.classList.add('d-none')
  }



    val = this.formatData(val)
    InputControl.value = val
    console.log(val);
  }
  formatData(data:string){
    let chankedArr : Array<string> =[]
    for(let i=0; i<data.length; i+=4){
      chankedArr.push(data.slice(i, i+4))
    }
    return chankedArr.join(" ")
  }
  createErrorContainer(control : HTMLInputElement){
    let strong  = document.createElement('strong')
    strong.className = 'd-none text-danger'
    strong.innerText = 'Plz enter valid details'
    control.parentElement?.append(strong)
  }


}
