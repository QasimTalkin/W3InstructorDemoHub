import Joi from 'joi-browser'
import { useState } from 'react';
import ReactJsAlert from 'reactjs-alert'
// what do i want to validate what are my rules
// data and add rules 
// data with rules -> Schma

// 1 create validation Shema

let validationShema = {
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  userInput: Joi.string().min(10).max(500),
  age: Joi.number().min(18).max(99).required()
}


const ContactUs = () => {
  function handleSubmit(e){
    e.preventDefault();
    let {name, age, email, userInput } = e.target; 
    let userData  = {name:name.value,
      email:email.value,
      userInput:userInput.value,
      age:age.value 
    }
    let result = Joi.validate(userData,validationShema )

    if(result.error){
      let field = result.error.message.split('\"')[1]
      setTitle('Invalid Entry : '+field)
      setCurrentError(result.error.message)
      setStatus(true)
    }
}


  let [status, setStatus] = useState(false);
  let [currentError, setCurrentError] = useState('');
  let [title, setTitle] = useState('')
  return (<>
    <h1>
      Contact Us
    </h1>
    <form onSubmit={handleSubmit}>
  <div className="container gap-3">
    <div className="col-12 m-2">
      <input type="text" className="form-control" placeholder="First name"   name='name'/>
    </div>
    <div className="col-12 m-2">
      <input type="text" className="form-control" placeholder="Email" name='email'/>
    </div>
    <div className="col-12 m-2">
      <input type="textarea" className="form-control" placeholder="input data...." name='userInput'/>
    </div>
    <div className="col-12 m-2">
      <input type="number" className="form-control" placeholder="age" name='age'/>
    </div>
    <div className="col-12">
      <input type="submit" className="form-control btn btn-success" value="submit" />
    </div>
  </div>
</form>
<ReactJsAlert
    status={status}   // true or false
    type="info"   // success, warning, error, info
    title={title}   // title you want to display
    quotes={true}
    quote={currentError}
    Close={() => setStatus(false)}   // callback method for hide
/>
  </>  );
}

export default ContactUs;
