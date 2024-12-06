export const vehicle_list = ({type_vehicle, marca, modelo, age, color, number_plate, description, load_capacity}) => {
    
    const data_storage = JSON.parse(localStorage.getItem('vehicle'))
    const data_users = JSON.parse(localStorage.getItem('data_users'))
    
    //for(let i = 0; i<3; i++){
      //  data_storage.pop();
    //}

    const form_vehicle = {
        id: data_users.at(-1)['id'] ,
        name_client: data_users.at(-1)['name'] ,
        type: type_vehicle,
        marca: marca,
        modelo: modelo,
        age: age,
        color: color,
        number_plate: number_plate,
        load_capacity: load_capacity,
        description: description
    }
    
    data_storage.push(form_vehicle);
    localStorage.setItem('vehicle',JSON.stringify(data_storage));

    return form_vehicle; 
}

export const sure_list = ({insured, name_company, number_policy, date_exp_sure})=>{
    const data_storage = JSON.parse(localStorage.getItem('sure'))
    const data_users = JSON.parse(localStorage.getItem('data_users'))
  //  for(let i = 0; i<3; i++){
     //   data_storage.pop();
    //}

    const form_sure = {
        id: data_users.at(-1)['id'] ,
        insured: insured,
        name_company: name_company,
        number_policy: number_policy,
        date_exp_sure: date_exp_sure
    }
    
    data_storage.push(form_sure);
    localStorage.setItem('sure',JSON.stringify(data_storage));

    return form_sure;
}