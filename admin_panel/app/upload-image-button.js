class UploadImageButton extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' })  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    <style>
        span {
          color: #fff;
          font-size: 1rem;
          font-weight: bold;
          text-transform: uppercase;
        }
        .box {
          align-items: center;
          border: none;
          background-color: #718be0;
          border: none;
          box-sizing: border-box;
          display: flex;
          font-size: 1rem;
          flex-direction: column;
          justify-content: center;
          outline: transparent;
          outline: transparent;
          padding: 0.5rem;
          width: 10rem; 
        }
        .bo:hover {
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
        }
        
        .box:hover::before {
          content: "Upload";
          position: absolute;
          top: -2rem;
          left: 50%;
          transform: translateX(-50%);
          background-color: #000;
          color: #fff;
          padding: 0.5rem;
          border-radius: 0.5rem;
          font-size: 0.8rem;
        }
        .box svg {
          width: 10rem;
          fill: white; 
        }
        </style>
    <div class="box">
      <div class="title">
        <span>
          Upload
        </span>
      </div>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Upload image</title><path d="M8 17V15H16V17H8M16 10L12 6L8 10H10.5V14H13.5V10H16M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" /></svg>
      </div>
    </div>
    `;

    const box = this.shadow.querySelector('.box')
      box.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('upload'))
      })
  }
}

customElements.define('upload-image-button', UploadImageButton);
