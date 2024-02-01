class UploadImageForm extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' }); 
  }

  connectedCallback() {
    document.addEventListener('upload', (event) => {
      this.handleUpload(event);
    });
    
    this.render();
  }

  render() {
    this.shadow.innerHTML = /* html */
    `
    <style>
      .box {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.8); /* Adjust opacity as needed */
        z-index: 3;
      }
      .box.active {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4); /* Adjust the opacity as needed */
      }
      .gallery {
        width: 80%;
        height: 80%;
        background-color: #fff;
      }
      .form {
        flex: 2;
      }

      .form-top-bar{
          display: flex;
          justify-content: center;
          background-color: white;
          height: 3rem;
          width: 100%;
          margin-bottom: 2rem;

      }
      .tabs{
          display: flex;
          height: 100%;
          width: 100%;
      }

      .tab{
          background-color: none;
          display: flex;
          align-items: center;
          padding: 0.5rem;
      }

      .tab:hover{
        background-color: hsl(206.87,84.81%,69.02%);
        cursor:pointer;
      }

      .tab button{
          color: blue;
      }

      .tab.active button{
          color: white;
      }

      .tab.active{
          background-color: #e69428;
          color: white;
      }

      .tab-contents{
        width: 100%;
      }

      .tab-content.active{
        width: 100%;
        display: block;
      }

      .tab-content{
        display: none;
      }

      .form-row{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .form-element {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
        width: 100%;
      }

      .form-element-input * {
        background-color: #718be0;
        border: none;
        box-sizing: border-box;
        font-size: 1rem;
        outline: transparent;
        padding: 0.5rem;
        width: 100%;
      }
      </style>
          <div class="box">
            <div class="gallery">
              <div class="form">
                <div class="form-top-bar">
                  <div class="tabs">
                    <div class="tab active" data-tab="general">
                      <button>
                        General
                      </button>
                    </div>
                    <div class="tab" data-tab="images">
                      <button>
                        Imágenes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <form class="admin-form">
                <input type="hidden" name="id" value="">
                <div class="tab-contents">
                  <div class="tab-content active" data-tab="general">
                    <div class="form-row">
                      <div class="form-element">
                        <div class="form-element-label">
                          <label for="question">
                            Pregunta
                          </label>
                        </div>
                        <div class="form-element-input">
                          <input type="text" name="name" value="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-content" data-tab="images">
                    <div class="form-row">
                      <div class="form-element">
                        <div class="form-element-label">
                          <label for="upload-images">
                            Imagenes
                          </label>
                        </div>
                        <div class="form-element-input">
                          <input type="file" name="images" value="">
                          <button type="button" class="upload-image-button">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
    `;
    this.handleTabs();
  }

  handleTabs() {
    const main = this.shadow.querySelector('.form')
    main?.addEventListener('click', (event) => {

      if (event.target.closest('.tab')) {
        if (event.target.closest('.tab').classList.contains('active')) {
          return
        }

        const tabClicked = event.target.closest('.tab')
        const tabActive = tabClicked.parentElement.querySelector('.active')

        tabClicked.classList.add('active')
        tabActive.classList.remove('active')
        console.log(this.shadow.querySelector(".tab-content.active"))
        this.shadow.querySelector(`.tab-content.active[data-tab="${tabActive.dataset.tab}"]`).classList.remove('active')
        this.shadow.querySelector(`.tab-content[data-tab="${tabClicked.dataset.tab}"]`).classList.add('active')
      }
    })
  }
  

  handleUpload(event) {
    let boxElement = this.shadow.querySelector('.box');
    boxElement.classList.add('active');
  }
}

customElements.define('upload-image-form', UploadImageForm);
