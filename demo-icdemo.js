import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class DemoIcdemo 
{
    constructor(http)
    {
        http.configure(config => {
            config
              .withBaseUrl('api/')
              .withDefaults({
                  headers: {
                      'Accept': 'application/json'
                  }
              });
        });

        this.http = http;       
    }
    
    activate()
    {
        this.http.fetch('DemoIcdemo/GetData').then(response => response.json()).then(info => 
        { 
            let allInfo = JSON.parse(info);
            this.makes = allInfo.makes;
            this.models = allInfo.models;
        });
    }

    showImage(car_image, car_text, model_name)
    {
        car_text.style.display = '';
        car_text.innerHTML = model_name;

        car_image.style.display = '';
        car_image.src = model_name + ".jpg";
    }
}
