import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'

const NAME = 'gifts'

const view = (params, model, dispatch) => html`
  <div>
    <div class='sub-section'>
    <h2>The greatest gift we can imagine is spending time with you!</h2>
      <p>
        We’re touched that you want to be with us on our special day, and there’s no need to give anything more.
        So please just bring your lovely selves, your good wishes, and your appetite!
      </p>

      <p>
        We’re asking guests to BYO drinks of choice, so bring a little extra of your favorite to share if you're so inclined.
      </p>
    </div>

    <div class='sub-section'>
      <img src='images/mirror.jpg' />
    </div>

    <div class='sub-section'>
      <p>
        We have all the household items we need, but if you'd like to contribute to our dream of buying our own home, it would be greatly appreciated.
      </p>

      Paypal: <pre>kdynamic@gmail.com</pre> <br />

      NZ Bank Transfer: <br />
      <pre>A S & J A IRVING</pre><br />
      <pre>38-9014-0578605-03</pre>
    </div>
    
  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)]
  ]
})
