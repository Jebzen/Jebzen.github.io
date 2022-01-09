import jQuery from "jquery";
import './styles/cvr.css';

class CVR{
    constructor(){
        this.input = document.querySelector('input[name="cvr-search"]');
        this.button = document.querySelector('button[name="cvr-init"]');
        this.button.addEventListener('click', ()=>{
            if(this.input.value.length > 3){
                this.search = this.input.value; 
                this.init()
            }
        })
        this.search; 
    }
    init(){
        jQuery.ajax({
            type: "GET",
            dataType: "jsonp",
            url: "//cvrapi.dk/api?search=" + this.search + "&country=dk",
            success: function (b)
            {
                this.data = b;

                this.cell = document.createElement('div');
                this.cell.classList.add('cvr_cell');
                this.cell.id = "cvr-"+this.data.vat

                this.cells = "";
                Object.keys(this.data).forEach(key =>{
                    switch (key){
                        case "vat":
                            this.cells += `
                                <h6>CVR nr.</h6>
                                <p>${this.data[key]}</p>`;
                            break;

                        case "name":
                            this.cells += `
                                <h6>Selskabsnavn</h6>
                                <p>${this.data[key]}</p>`;
                            break;

                        case "address":
                            this.cells += `
                                <h6>Adresse</h6>
                                <p>${this.data[key]}</p>`;
                            break;

                        case "zipcode":
                            this.cells += `
                                <h6>Post nr.</h6>
                                <p>${this.data[key]}</p>`;
                            break;

                        case "city":
                            this.cells += `
                                <h6>By</h6>
                                <p>${this.data[key]}</p>`;
                            break;

                        case "phone":
                            this.cells += `
                                <h6>TLF nr.</h6>
                                <p>${this.data[key]}</p> `;
                            break;

                        case "email":
                            this.cells += `
                                <h6>Email</h6>
                                <p>${this.data[key]}</p>`;
                            break;

                        case "industydesc":
                            this.cells += `
                                <h6>Branche</h6>
                                <p>${this.data[key]}</p>`;
                            break;

                        case "indusrtycode":
                            this.cells += `
                                <h6>Branchekode</h6>
                                <p>${this.data[key]}</p>`;
                            break;
                    }
                })

                this.cell.innerHTML = `
                    <div class="cvr_top">
                        <span >X</span>
                    </div>
                    <div class="cvr_content">
                        ${this.cells}
                    </div>`;
                document.querySelector(".cvr_tab").appendChild(this.cell);
            }
        });
    }
}

export { CVR as default };
