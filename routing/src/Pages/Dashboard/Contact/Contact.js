import React from "react";
import {useFormik} from "formik";
import Validasyon from './Validation';
import './styles.css'



function Contact() {

    const {handleChange,handleSubmit,isSubmitting,values,handleBlur, errors,touched}=useFormik({
      initialValues:{
        firstName: "",
        lastName: "",
        email: "",
        message:"",
      },
      onSubmit:async(values,bag) => {
        await new Promise((r)=>setTimeout(r,1000));
        console.log(values);

        if(values.email==='beyzauyanik57@hotmail.com')
        {
          return bag.setErrors({email:'Bu mail adresi daha önceden kullanılmıştır.'});
        }
        bag.resetForm();
      },
      validationSchema:Validasyon,
      

    })
  return (
    <div>
      <h2>iletişim</h2>

    
            <form onSubmit={handleSubmit}  className="form" >
              <div>
              <label htmlFor="firstName">First Name</label>
              <input onBlur={handleBlur} id="firstName" name="firstName" placeholder="Jane" onChange={handleChange} value={values.firstName} disabled={isSubmitting} />
              {errors.firstName  && touched.firstName && <div className="error">{errors.firstName}</div>}

              </div>
              <div>
              <label htmlFor="lastName">Last Name</label>
              <input onBlur={handleBlur} id="lastName" name="lastName" placeholder="Doe" onChange={handleChange} value={values.lastName} disabled={isSubmitting} />
              {errors.lastName  && touched.lastName && <div className="error">{errors.lastName}</div>}
              </div>
              <div>
              <label onBlur={handleBlur} htmlFor="email" >Email</label>
              <input
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                  value={values.email}
                  disabled={isSubmitting}
                  onChange={handleChange}
          />
          {errors.email  && touched.email && <div className="error"> {errors.email}</div>}
              </div>
              <div>
              <label onBlur={handleBlur} htmlFor="message">Email</label>
              <textarea
            id="message"
            name="message"
            placeholder="Your Message..."
            value={values.message}
            disabled={isSubmitting}
            onChange={handleChange}

          />
          {errors.message  && touched.message && <div className="error">{errors.message}</div>}
              </div>
         
         
          <button className="button" type="submit" disabled={isSubmitting}>Submit</button>
        </form>
      
    </div>
  );
}

export default Contact;
