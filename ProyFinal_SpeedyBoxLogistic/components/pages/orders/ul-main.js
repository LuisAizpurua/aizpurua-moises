import {order_data} from '../../../services/order-list/order-list.js'

const addTags= (name_tag, elements = {}) =>{
    let tag = document.createElement(name_tag);
    Object.assign(tag, elements);
    return tag;
}

export class OrdenesUl extends HTMLElement{
    constructor(){
        super(); 
        this.render(); 
    }

    pagination = {
        pagePrevious: 1,
        pageCurrent: 1,
        pageNext: Math.ceil(order_data().length / 3)>1? 2:1 ,
        result: {'1': []},
        total: Math.ceil(order_data().length / 3)
    }

    setPage(page){
        if(page > 0 && page <= this.pagination.total){
           this.pagination.pageCurrent = page;
           this.pagination.pagePrevious = page==1? 1 : page -1;
           this.pagination.pageNext = (page == this.pagination.total)? page : page + 1;
           this.querySelector('#previous').disabled = this.pagination.pagePrevious == this.pagination.pageCurrent;
           this.querySelector('#next').disabled = this.pagination.pageNext == this.pagination.pageCurrent;  
           this.querySelector('ul').innerHTML = '';
           this.generatePagination(page);
        }
    }

    generatePagination(num_page){
        let count = 0;
        for(let page in this.pagination.result){
            if(num_page == page){
            this.pagination.result[page].forEach(a=>{
                    if(count != 0){
                        const img_flecha = addTags('img',{ src: '/images/orders-icon/flecha-sep.png', width: '600'});
                        img_flecha.style.margin = 'auto'
                        this.querySelector('ul').appendChild(img_flecha)
                      }
                      count++;
                      this.querySelector('ul').appendChild(a)
                } ) }
        }   }

    render(){  
        const h3_title = addTags('h3',{ textContent: 'Pedidos Disponibles', className: 'title_orders' })
        this.appendChild(h3_title);

        const ul = document.createElement('ul');
        let id_pagination = 1, ctrl_data = 0;

       order_data().forEach(data => {
        ctrl_data++;
        const div_li = document.createElement('div');
        const li = document.createElement('li');
        const h3 = addTags('h3', { textContent: data.names_client, className: 'name_order'});
        
        div_li.setAttribute('id','p_div')
        div_li.appendChild(h3);
        
        const p = addTags('p', { innerHTML: `<b>Tipo de Mercancía:</b> ${data.type_commodity}<br><b>Peso Total:</b> ${data.weight_total} kg<br>
                                             <b>Dimensiones:</b> ${data.dimensions} cm<br><b>Descripcion:</b> ${data.description}<br>`}); 
        div_li.appendChild(p);
        
        li.appendChild(div_li);
        
        const h4 = addTags('h4', { className: 'amount', textContent: `monto: $${data.amount}` });
        li.appendChild(h4);
        
        const div = addTags('div', { className: 'btns' })

        const btn_accept = addTags('button', {textContent: 'ACEPTAR'});
        const btn_decline = addTags('button', {textContent: 'RECHAZAR'})
        div.append(btn_accept, btn_decline);

        li.appendChild(div);
        
        this.pagination.result[`${id_pagination}`] =  [...this.pagination.result[`${id_pagination}`], li]; 
        if(ctrl_data % 3 == 0){ ctrl_data =0; id_pagination++; this.pagination.result[`${id_pagination}`] = []}

    });  
   
       this.appendChild(ul)
       this.generatePagination(1);

        const btn_anterior = addTags('button',{ className: 'btn_page', disabled: this.pagination.pagePrevious === 1, id:'previous'});
        btn_anterior.innerHTML += '<span class="material-symbols-outlined">arrow_back_ios</span>Anterior'
        btn_anterior.addEventListener('click', ()=>{
            this.setPage(this.pagination.pageCurrent - 1, btn_siguiente, btn_anterior)
        })

        const btn_siguiente = addTags('button',{ className:'btn_page', disabled: this.pagination.nextPage === this.pagination.total, id:'next'});
        btn_siguiente.innerHTML += 'Siguiente<span class="material-symbols-outlined">arrow_forward_ios</span>' 
        btn_siguiente.addEventListener('click', ()=>{ 
         this.setPage(this.pagination.pageCurrent + 1, btn_siguiente, btn_anterior);
        })
        btn_siguiente.disabled = this.pagination.total ==1

        const pagination_btn = addTags('div', { className: 'div_pages' }) 
        pagination_btn.style.textAlign = 'center'
        pagination_btn.append(btn_anterior, btn_siguiente);

        this.appendChild(pagination_btn);
    }
}