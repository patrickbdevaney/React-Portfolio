import React from "react";


function Footer() {

  return (

    <footer class="page-footer fixed-bottom font-small" style={{backgroundColor: '#5d7ce9'}}>

      <div class="container" >
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a
              class="btn-floating btn-fb mx-1"
              href="https://github.com/patrickbdevaney"
            >
              <i class="fab fa-github" style={{color: 'black'}}> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/patrick-devaney-6b4b78215/"
            >
              <i class="fab fa-linkedin-in" style={{color: 'black'}}> </i>
            </a>
          </li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
